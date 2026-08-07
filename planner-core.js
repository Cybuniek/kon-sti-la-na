(function (root, factory) {
  const api = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  root.PlannerCore = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  const FORMAT_VERSION = 1;

  const defaultStages = [
    { id: "przygotowanie", time: "Start", title: "Przygotowanie", text: "Sprzęt, woda, podkład offline i bezpieczne zasady przed wyjściem." },
    { id: "lokacja", time: "Etap 1", title: "Lokacja i dojście", text: "Zewnętrzne kadry oraz rozpoznanie wyłącznie bezpiecznych stref." },
    { id: "performance", time: "Etap 2", title: "Performance i dźwięk", text: "Główne ujęcia, playback oraz energia w kadrze." },
    { id: "backstage", time: "Etap 3", title: "Backstage i przebitki", text: "Dokumentacja, reakcje ekipy i materiał montażowy." },
    { id: "domkniecie", time: "Etap 4", title: "Domknięcie i wyjście", text: "Sprawdzenie materiału, spokojne wyjście i porządek." }
  ];

  const defaultTasks = [
    { id: "kamera-zewnetrzna", stageId: "lokacja", title: "Kamera zewnętrzna", description: "Fasada, dojście i detale wejścia.", role: "kamera", capacity: 1, safety: false },
    { id: "bhp-trasa", stageId: "lokacja", title: "Asekuracja trasy", description: "Pilnowanie bezpiecznych stref i decyzji BHP.", role: "bhp", capacity: 1, safety: true },
    { id: "performance-glowny", stageId: "performance", title: "Wsparcie performance", description: "Playback, energia w kadrze i pomoc przy głównych ujęciach.", role: "performance", capacity: 2, safety: false },
    { id: "backstage-dokumentacja", stageId: "backstage", title: "Backstage", description: "Krótkie przebitki, reakcje oraz zapis przebiegu dnia.", role: "backstage", capacity: 1, safety: false },
    { id: "logistyka-wyjscie", stageId: "domkniecie", title: "Logistyka wyjścia", description: "Sprawdzenie sprzętu, wody i wspólne domknięcie dnia.", role: "logistyka", capacity: 1, safety: true },
    { id: "zwierze-bezpieczna-strefa", stageId: "backstage", title: "Opieka nad zwierzęciem", description: "Tylko czysta, spokojna strefa — zwierzę zawsze ma pierwszeństwo.", role: "opieka nad zwierzęciem", capacity: 1, safety: true }
  ];

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function createId(prefix) {
    const suffix = typeof crypto !== "undefined" && crypto.randomUUID
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    return `${prefix}-${suffix}`;
  }

  function createDefaultPlan() {
    return {
      version: FORMAT_VERSION,
      type: "day-plan",
      title: "Otwarty plan dnia nagrań",
      stages: clone(defaultStages),
      tasks: clone(defaultTasks),
      people: [],
      requests: []
    };
  }

  function createSignup(plan, input) {
    const name = String(input?.name || "").trim();
    const selectedIds = [...new Set(Array.isArray(input?.taskIds) ? input.taskIds : [])];
    const validIds = new Set(plan.tasks.map((task) => task.id));
    if (!name || !selectedIds.length || selectedIds.some((taskId) => !validIds.has(taskId))) {
      throw new Error("Wybierz pseudonim i co najmniej jedno dostępne zadanie.");
    }
    const person = { id: createId("person"), name };
    return {
      version: FORMAT_VERSION,
      type: "signup",
      exportedAt: new Date().toISOString(),
      person,
      requests: selectedIds.map((taskId) => ({
        id: createId("request"),
        personId: person.id,
        taskId,
        status: "pending"
      }))
    };
  }

  function taskAvailability(plan, taskId) {
    const task = plan.tasks.find((item) => item.id === taskId);
    if (!task) return 0;
    const confirmed = plan.requests.filter((request) => request.taskId === taskId && request.status === "confirmed").length;
    return Math.max(0, task.capacity - confirmed);
  }

  function importSignup(plan, signup) {
    const validation = validateImportPayload(signup);
    if (!validation.ok || validation.kind !== "signup") return validation;
    if (!plan.people.some((person) => person.id === signup.person.id)) plan.people.push(clone(signup.person));
    signup.requests.forEach((request) => {
      if (plan.tasks.some((task) => task.id === request.taskId) && !plan.requests.some((known) => known.id === request.id)) {
        plan.requests.push({ ...clone(request), status: "pending" });
      }
    });
    return { ok: true };
  }

  function approveSignup(plan, requestId) {
    const request = plan.requests.find((item) => item.id === requestId);
    if (!request) return { ok: false, error: "Nie znaleziono zgłoszenia." };
    if (request.status === "confirmed") return { ok: true };
    if (taskAvailability(plan, request.taskId) < 1) return { ok: false, error: "Brak wolnych miejsc w tym zadaniu." };
    request.status = "confirmed";
    return { ok: true };
  }

  function rejectSignup(plan, requestId) {
    const request = plan.requests.find((item) => item.id === requestId);
    if (!request) return { ok: false, error: "Nie znaleziono zgłoszenia." };
    request.status = "rejected";
    return { ok: true };
  }

  function moveSignup(plan, requestId, taskId) {
    const request = plan.requests.find((item) => item.id === requestId);
    if (!request || !plan.tasks.some((task) => task.id === taskId)) return { ok: false, error: "Nie znaleziono zgłoszenia lub zadania." };
    request.taskId = taskId;
    request.status = "pending";
    return { ok: true };
  }

  function validateImportPayload(payload) {
    if (!payload || typeof payload !== "object" || payload.version !== FORMAT_VERSION) {
      return { ok: false, error: "Nieobsługiwana wersja pliku planu." };
    }
    if (payload.type === "signup") {
      const valid = typeof payload.person?.name === "string" && payload.person.name.trim()
        && typeof payload.person?.id === "string"
        && Array.isArray(payload.requests) && payload.requests.length
        && payload.requests.every((request) => typeof request?.id === "string" && typeof request.taskId === "string");
      return valid ? { ok: true, kind: "signup" } : { ok: false, error: "Plik zgłoszenia nie zawiera poprawnego pseudonimu lub zadań." };
    }
    if (payload.type === "day-plan" && Array.isArray(payload.stages) && Array.isArray(payload.tasks) && Array.isArray(payload.people) && Array.isArray(payload.requests)) {
      return { ok: true, kind: "day-plan" };
    }
    return { ok: false, error: "Plik nie jest zgłoszeniem ani planem dnia." };
  }

  return {
    FORMAT_VERSION,
    createDefaultPlan,
    createSignup,
    taskAvailability,
    importSignup,
    approveSignup,
    rejectSignup,
    moveSignup,
    validateImportPayload
  };
});
