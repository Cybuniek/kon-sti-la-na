const STORAGE_KEY = "konstilana-progress-v1";
const AUDIO_WIDGET_KEY = "konstilana-audio-widget-collapsed";
const PLAN_STORAGE_KEY = "konstilana-open-day-plan-v1";

const filters = [
  { id: "all", label: "Wszystko" },
  { id: "intro", label: "Intro" },
  { id: "refren", label: "Refreny" },
  { id: "zwrotka", label: "Zwrotki" },
  { id: "bridge", label: "Bridge" },
  { id: "outro", label: "Outro" },
  { id: "performance", label: "Performance" },
  { id: "kamera", label: "Kamera" },
  { id: "backstage", label: "Backstage" },
  { id: "logistyka", label: "Logistyka" },
  { id: "zwierze", label: "Opieka nad zwierzęciem" },
  { id: "bhp", label: "BHP" }
];

const scenes = [
  {
    id: "intro-wejscie",
    part: "Intro",
    title: "Konstilana jako mapa startowa",
    quote: "Kon-sti, Kon-sti, la-la-la-na / Ust-nik, Ust-nik, Cy-buch",
    description: "Szybkie establishing shoty: fasada, okna, rdza, wejście i osoba performująca pojawiająca się jak gracz na początku levelu.",
    tags: ["intro", "performance"],
    shots: [
      "Budynek z daleka, najlepiej z dojściem Cybka w kadrze.",
      "Detale: wybite okna, łańcuch, drzwi, ściany, rdza.",
      "Buty idące po betonie i krótkie glitchowe przebitki twarzy."
    ]
  },
  {
    id: "refren-krol-okien",
    part: "Refren",
    title: "Król wybitych okien",
    quote: "Ustnik Cybuch siedzi sobie, król wybitych okien.",
    description: "Najbardziej ikoniczny performance shot. Główna osoba centralnie, z ruiną za plecami i pełną energią.",
    tags: ["refren", "performance", "kamera"],
    shots: [
      "Główna osoba wykonuje refren do kamery w najładniejszym miejscu lokacji.",
      "Szeroki kadr: mała postać w wielkim pustostanie.",
      "Druga osoba wspiera call-and-response poza głównym kadrem."
    ]
  },
  {
    id: "zwrotka-wejscie",
    part: "Zwrotka 1",
    title: "Wejście do betonowego azylu",
    quote: "Idzie bez pośpiechu — początek spokojnej drogi przez lokację.",
    description: "Chodzone ujęcia bez pośpiechu: korytarz, wejście, ściany, długi spacer przez budynek. Klimat bardziej narracyjny niż koncertowy.",
    tags: ["zwrotka", "performance"],
    shots: [
      "Osoba performująca wchodzi do budynku zza pleców operatora.",
      "Długie przejście korytarzem z lekkim trzęsieniem kamery.",
      "Osoba performująca ogląda przestrzeń, jakby wracała do znajomego miejsca."
    ]
  },
  {
    id: "komin-moment",
    part: "Zwrotka 1",
    title: "Komin moment",
    quote: "Tam komin sterczy jak fiut po dobrym filmie…",
    description: "Krótki, głupkowaty wizualny żart. Można zrobić freeze-frame, podpis KOMIN MOMENT i przesadny zoom.",
    tags: ["zwrotka"],
    shots: [
      "Ujęcie komina albo pionowego elementu budynku.",
      "Szybki zoom i freeze-frame do montażu.",
      "Reakcja Cybka lub Mańka: mina bez komentarza."
    ]
  },
  {
    id: "pre-bhp",
    part: "Pre-Chorus",
    title: "Dywanik BHP",
    quote: "Dokumenty po podłodze walają wszędzie się, trochę jak dywanik, tylko bardziej BHP.",
    description: "Detaliczny przegląd syfu: papiery, schody, rdza, ślady czasu. Humor ma iść razem z ostrzeżeniem: niczego podejrzanego nie dotykać.",
    tags: ["bhp", "zwrotka", "kamera"],
    shots: [
      "Zbliżenia na papiery, śmieci i rdzę.",
      "Osoba performująca pokazuje podłogę jak prezenter wystroju wnętrz.",
      "Osoba od BHP sprawdza drogę i odcina ryzykowne pomysły."
    ]
  },
  {
    id: "build-up-wejscie-dnia",
    part: "Build Up",
    title: "Wejście dnia",
    quote: "Cybuch z domu Kometa zaraz robi wejście dnia.",
    description: "Moment narastania. Osoba performująca idzie w stronę kamery przez framugę albo korytarz. Na drop wchodzi refren.",
    tags: ["refren", "performance", "kamera"],
    shots: [
      "Niski kąt: osoba performująca idzie prosto na kamerę.",
      "Szybkie przebitki: okno, schody, twarz, dym, buty.",
      "Wejście przez drzwi lub framugę zsynchronizowane z build-upem."
    ]
  },
  {
    id: "parapet-tron",
    part: "Refren 2",
    title: "Parapet zamiast tronu",
    quote: "Nie ma tu tronu, jest parapet i wiatr.",
    description: "Obowiązkowy symbol klipu. Osoba performująca siedzi przy bezpiecznym oknie i patrzy na lokację.",
    tags: ["refren", "performance", "bhp"],
    shots: [
      "Osoba performująca siedzi przy bezpiecznym oknie albo na stabilnym miejscu obok parapetu.",
      "Wiatr porusza kapturem/bluzą/dymem.",
      "Detal betonu i szkła bez dotykania ostrych elementów."
    ]
  },
  {
    id: "post-ptaki",
    part: "Post-Chorus",
    title: "Widoczek magnifique",
    quote: "Ptaki cały dach obsrały już: myk, pyk, cyk, fik.",
    description: "Głupkowate przebitki detali i mimika Cybka. To może być najlżejszy, najbardziej memiczny fragment klipu.",
    tags: ["refren", "performance"],
    shots: [
      "Detal dachu, parapetu albo śladów ptaków, jeśli są.",
      "Naturalna reakcja na widoczek w lekkim, memicznym stylu.",
      "Krótki zoom na reakcję Mańka."
    ]
  },
  {
    id: "zwrotka-dymowy-szlak",
    part: "Zwrotka 2",
    title: "Dymowy szlak w mlecznych oknach",
    quote: "W mlecznych oknach rysuje się dymowy szlak.",
    description: "Druga zwrotka powinna być mniej biegana, bardziej siedząca i zawieszona. Czas krzywo płynie, bez zbędnego ruchu.",
    tags: ["zwrotka", "performance"],
    shots: [
      "Osoba performująca siedzi nieruchomo na tle okien.",
      "Dym albo oddech/światło tworzy ślad w kadrze.",
      "Patrzenie przez okno na drzewa — spokojne, bez wygłupu."
    ]
  },
  {
    id: "beczki-gra",
    part: "Zwrotka 2",
    title: "Beczki jak w grach",
    quote: "Beczki zielone — wybuchowe jak w grach.",
    description: "Jeśli na miejscu są beczki albo zielone elementy, robią za game-prop. Tylko wizualnie — bez dotykania i bez sprawdzania, co jest w środku.",
    tags: ["zwrotka", "bhp"],
    shots: [
      "Ujęcie zielonego elementu / beczki / przemysłowego detalu.",
      "Dodać w montażu napis HUD: EXPLOSIVE BARREL?",
      "Oddalić się, nie ruszać, nie testować, nie głaskać beczki jak bossa."
    ]
  },
  {
    id: "pustostan-prawda",
    part: "Pre-Chorus 2",
    title: "Pustostan jako powrót do siebie",
    quote: "Czasem człowiek wraca do siebie przez pustostan.",
    description: "Najbardziej szczery moment. Minimalny ruch, bliska kamera, mało efektów. Przez chwilę teledysk przestaje się śmiać.",
    tags: ["zwrotka", "performance"],
    shots: [
      "Close-up Cybka bez uśmiechu i bez memicznej miny.",
      "Osoba performująca odkłada telefon albo przestaje patrzeć w ekran.",
      "Cichy kadr przez okno, możliwie z drzewami albo chmurami."
    ]
  },
  {
    id: "refren-gang",
    part: "Refren 3",
    title: "Chór pustostanu",
    quote: "Cy-buch! Cy-buch! / Ko-me-ta!",
    description: "Najbardziej wspólnotowy refren. Otwarta ekipa robi call-and-response, a zwierzę może pojawić się wyłącznie w spokojnej strefie.",
    tags: ["refren", "performance", "kamera", "backstage", "zwierze"],
    shots: [
      "Dwie osoby robią gang-vocale do kamery.",
      "Backstage łapie naturalne reakcje, jeśli jest obsada.",
      "Zwierzę tylko w bezpiecznej strefie: przy wejściu albo na czystym korytarzu."
    ]
  },
  {
    id: "meteo",
    part: "Bridge",
    title: "Meteo z końca świata",
    quote: "Piracka prognoza pogody z końca świata.",
    description: "Krótka prognoza close-mic do kamery, jak od prezentera, który już widział wszystko.",
    tags: ["bridge", "performance"],
    shots: [
      "Osoba performująca stoi przy oknie i pokazuje front atmosferyczny na ścianie.",
      "Napis ekranowy: METEO.",
      "Po ciszy bliski kadr: I to wystarczy."
    ]
  },
  {
    id: "instrumental-break",
    part: "Instrumental Break",
    title: "Glitchowy przelot przez lokację",
    quote: "kon-sti, kon-sti, la-la-la-na / Cybuch, Cybuch, z domu Kometa",
    description: "Materiał montażowy: schody, twarze, buty, dym, ściany, ekipa, szybkie obroty i brutalne cięcia pod breakbeat.",
    tags: ["refren", "performance", "kamera", "backstage", "zwierze"],
    shots: [
      "Krótkie 2–4 sekundowe przebitki wszystkiego, co ma teksturę.",
      "Trzęsąca kamera i szybkie ruchy, ale bez wchodzenia w niebezpieczne miejsca.",
      "Reakcje ekipy, śmiech, backstage, absurdalne miny."
    ]
  },
  {
    id: "final-refren",
    part: "Final Chorus",
    title: "Finalne koronowanie Cybana",
    quote: "Kon-Sti-La-La-Na, Ko-Ko-Ko-Kon-Sti-La-Na!",
    description: "Największy refren. Najlepsze ujęcia, najwięcej energii, najbardziej czytelny obraz Cybka jako króla betonu i szkła.",
    tags: ["refren", "performance", "kamera", "backstage", "zwierze"],
    shots: [
      "Szeroki kadr całej lokacji z Cybkiem w centrum.",
      "Sylabiczne cięcia: Kon / Sti / La / Na na różne detale.",
      "Ekipa w kadrze, jeśli jest, jako chór Konstilany."
    ]
  },
  {
    id: "outro-wyjscie",
    part: "Outro",
    title: "Wyjście bez dram",
    quote: "Bez werdyktu. Bez ocen. Bez dram. / klik",
    description: "Spokojne opuszczenie lokacji. Mniej efektów, więcej oddechu. Budynek zostaje sam, a ekipa kończy z poczuciem domknięcia.",
    tags: ["outro", "performance", "kamera", "backstage", "zwierze"],
    shots: [
      "Osoba performująca patrzy ostatni raz na lokację.",
      "Ekipa wychodzi, budynek zostaje pusty.",
      "Czarny ekran i odcięcie obrazu na klik."
    ]
  }
];

const timeline = [
  {
    time: "Start",
    title: "Przed wyjściem",
    text: "Sprawdzenie sprzętu, podkładu, baterii, pamięci i podstawowego BHP.",
    items: ["Telefon/kamera + powerbank", "Głośnik z podkładem offline", "Woda, latarka, rękawiczki, minimum apteczki"]
  },
  {
    time: "Etap 1",
    title: "Dojście i zewnętrzne establishing shoty",
    text: "Fasada, komin, wejście i pierwsze wejście w klimat.",
    items: ["Budynek z daleka", "Detale okien i drzwi", "Osoba performująca idąca do lokacji"]
  },
  {
    time: "Etap 2",
    title: "Eksploracja bez performansu",
    text: "Czyste przebitki lokacji do montażu: rdza, szkło, schody, papiery, graffiti, światło.",
    items: ["Nie dotykać podejrzanych rzeczy", "Nie wchodzić na niestabilne elementy", "Nagrywać długie 10–20 sekundowe kadry"]
  },
  {
    time: "Etap 3",
    title: "Główne performance shoty Cybka",
    text: "Refreny, wejście dnia, meteo i najważniejsza linia o powrocie do siebie przez pustostan.",
    items: ["Refren przy oknach", "Bridge blisko kamery", "Finalny refren z największą energią"]
  },
  {
    time: "Etap 4",
    title: "Ekipa, reakcje i gang-vocale",
    text: "Otwarta ekipa przy call-and-response i backstage — tylko w bezpiecznych strefach.",
    items: ["Call-response", "Śmiech i backstage", "Zwierzę bez szkła, dziur i hałasu"]
  },
  {
    time: "Etap 5",
    title: "Outro i wyjście",
    text: "Ostatnie spojrzenie, opuszczenie lokacji, czarny ekran, klik.",
    items: ["Spokojne ujęcia", "Budynek zostaje pusty", "Opcjonalna herbata/domowy kadr po powrocie"]
  }
];

const crew = [
  { name: "Performance", role: "w kadrze", intro: "Osoba wspierająca energię i główne ujęcia.", tasks: ["Playback i rytm", "Wejścia do kadru", "Naturalne reakcje"] },
  { name: "Kamera", role: "technicznie", intro: "Osoba od kadru, baterii i spokojnego prowadzenia ujęć.", tasks: ["Kadrowanie", "Sprawdzenie pamięci", "Bezpieczny ruch kamery"] },
  { name: "Backstage", role: "dokumentacja", intro: "Osoba od krótkich przebitek i przebiegu dnia.", tasks: ["Reakcje ekipy", "Przebitki", "Notatki do montażu"] },
  { name: "BHP i logistyka", role: "bezpieczeństwo", intro: "Osoba, która może zatrzymać ryzykowny pomysł.", tasks: ["Bezpieczne strefy", "Woda i światło", "Wspólne wyjście"] }
];

const checklists = [
  {
    title: "Sprzęt i rzeczy",
    items: [
      "Telefon/kamera naładowane",
      "Powerbank naładowany",
      "Miejsce w pamięci sprawdzone",
      "Podkład pobrany offline",
      "Głośnik bluetooth",
      "Latarka + zapas światła",
      "Woda dla ludzi",
      "Woda dla zwierzęcia, jeśli idzie",
      "Rękawiczki robocze",
      "Apteczka minimum"
    ]
  },
  {
    title: "Ujęcia obowiązkowe",
    items: [
      "Budynek z zewnątrz",
      "Osoba performująca wchodząca do lokacji",
      "Refren przy wybitych oknach",
      "Osoba performująca przy parapecie / oknie",
      "Detale rdzy, szkła, schodów, papierów, graffiti",
      "Meteo z końca świata",
      "Linia: Czasem człowiek wraca do siebie przez pustostan",
      "Finalny refren z ekipą",
      "Wyjście z budynku",
      "Czarny ekran / klik"
    ]
  },
  {
    title: "BHP",
    items: [
      "Nie wchodzić na dach bez realnego zabezpieczenia",
      "Nie chodzić po podejrzanych stropach",
      "Nie dotykać beczek, kabli, chemikaliów i szkła",
      "Nie zostawiać nikogo samego w głębi budynku",
      "Nie rozpalać ognia",
      "Nie niszczyć lokacji",
      "Nie zostawiać śmieci",
      "Zwierzę nie wchodzi w szkło, dziury i metal"
    ]
  },
  {
    title: "Po nagraniach",
    items: [
      "Zgrać materiał tego samego dnia",
      "Zrobić kopię zapasową",
      "Oznaczyć najlepsze refreny",
      "Oznaczyć najlepsze przebitki lokacji",
      "Oddzielić backstage od performance shotów",
      "Wybrać finalny kadr pod miniaturę",
      "Sprawdzić, czy w materiale nie ma niechcianych danych/adresów/tablic"
    ]
  }
];

let state = loadState();
let dayPlan = loadDayPlan();
let plannerMode = "join";
let activeFilter = "all";
let searchTerm = "";

const sceneGrid = document.querySelector("#sceneGrid");
const sceneTemplate = document.querySelector("#sceneTemplate");
const filterRow = document.querySelector("#filterRow");
const searchInput = document.querySelector("#searchInput");
const crewGrid = document.querySelector("#crewGrid");
const checklistGrid = document.querySelector("#checklistGrid");
const progressFill = document.querySelector("#progressFill");
const progressLabel = document.querySelector("#progressLabel");
const progressCount = document.querySelector("#progressCount");
const progressBar = document.querySelector(".progress-bar");
const introOverlay = document.querySelector("#introOverlay");
const introSkipButton = document.querySelector("#introSkipButton");
const replayIntroButton = document.querySelector("#replayIntroButton");
const audioWidget = document.querySelector("#audioWidget");
const audioWidgetToggle = document.querySelector("#audioWidgetToggle");
const joinTab = document.querySelector("#joinTab");
const coordinateTab = document.querySelector("#coordinateTab");
const joinPanel = document.querySelector("#joinPanel");
const coordinatePanel = document.querySelector("#coordinatePanel");
const plannerStatus = document.querySelector("#plannerStatus");
const signupTaskList = document.querySelector("#signupTaskList");
const planBoard = document.querySelector("#planBoard");
const connectionMap = document.querySelector("#connectionMap");
const requestList = document.querySelector("#requestList");

let introCloseTimer;
let introPreviousFocus;

init();

function init() {
  renderFilters();
  renderScenes();
  renderPlanner();
  renderCrew();
  renderChecklists();
  updateProgress();
  bindGlobalActions();
  setupIntroAnimation();
  setupAudioWidget();
}

function bindGlobalActions() {
  searchInput.addEventListener("input", (event) => {
    searchTerm = event.target.value.trim().toLowerCase();
    renderScenes();
  });

  document.querySelector("#printButton").addEventListener("click", () => window.print());
  document.querySelector("#exportButton").addEventListener("click", exportProgress);
  document.querySelector("#resetButton").addEventListener("click", resetProgress);
  replayIntroButton.addEventListener("click", openIntroAnimation);

  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector("#navLinks");
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });

  joinTab.addEventListener("click", () => setPlannerMode("join"));
  coordinateTab.addEventListener("click", () => setPlannerMode("coordinate"));
  document.querySelector("#exportSignupButton").addEventListener("click", exportSignup);
  document.querySelector("#exportPlanButton").addEventListener("click", exportDayPlan);
  document.querySelector("#plannerImport").addEventListener("change", importPlannerFile);
  document.querySelector("#taskForm").addEventListener("submit", addTask);
}

function setupIntroAnimation() {
  if (!introOverlay) return;
  introSkipButton.addEventListener("click", closeIntroAnimation);
  introOverlay.addEventListener("click", (event) => {
    if (event.target === introOverlay) closeIntroAnimation();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeIntroAnimation();
  });
  openIntroAnimation();
}

function openIntroAnimation() {
  if (!introOverlay) return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  introPreviousFocus = document.activeElement;
  window.clearTimeout(introCloseTimer);
  introOverlay.hidden = false;
  introOverlay.classList.remove("is-closing");
  document.body.classList.add("intro-lock");
  introSkipButton.focus({ preventScroll: true });
  introCloseTimer = window.setTimeout(closeIntroAnimation, reduceMotion ? 800 : 3200);
}

function closeIntroAnimation() {
  if (!introOverlay || introOverlay.hidden || introOverlay.classList.contains("is-closing")) return;
  window.clearTimeout(introCloseTimer);
  introOverlay.classList.add("is-closing");
  document.body.classList.remove("intro-lock");
  window.setTimeout(() => {
    introOverlay.hidden = true;
    if (introOverlay.contains(document.activeElement)) {
      if (introPreviousFocus && introPreviousFocus !== document.body) {
        introPreviousFocus.focus({ preventScroll: true });
      } else {
        document.activeElement.blur();
      }
    }
  }, 520);
}

function setupAudioWidget() {
  if (!audioWidget || !audioWidgetToggle) return;
  const isCollapsed = localStorage.getItem(AUDIO_WIDGET_KEY) === "true";
  setAudioWidgetCollapsed(isCollapsed);
  audioWidgetToggle.addEventListener("click", () => {
    setAudioWidgetCollapsed(!audioWidget.classList.contains("is-collapsed"));
  });
}

function setAudioWidgetCollapsed(isCollapsed) {
  audioWidget.classList.toggle("is-collapsed", isCollapsed);
  audioWidgetToggle.textContent = isCollapsed ? "Rozwiń" : "Zwiń";
  audioWidgetToggle.setAttribute("aria-expanded", String(!isCollapsed));
  localStorage.setItem(AUDIO_WIDGET_KEY, String(isCollapsed));
}

function renderFilters() {
  filterRow.innerHTML = "";
  filters.forEach((filter) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter-button";
    button.textContent = filter.label;
    button.setAttribute("aria-pressed", String(filter.id === activeFilter));
    button.addEventListener("click", () => {
      activeFilter = filter.id;
      renderFilters();
      renderScenes();
    });
    filterRow.append(button);
  });
}

function renderScenes() {
  sceneGrid.innerHTML = "";
  const visibleScenes = scenes.filter(matchesSceneFilters);

  if (!visibleScenes.length) {
    const empty = document.createElement("article");
    empty.className = "card";
    empty.innerHTML = "<h3>Brak scen dla tego filtra</h3><p>Spróbuj innego hasła albo wróć do filtra Wszystko.</p>";
    sceneGrid.append(empty);
    return;
  }

  visibleScenes.forEach((scene) => {
    const clone = sceneTemplate.content.cloneNode(true);
    const card = clone.querySelector(".scene-card");
    const head = clone.querySelector(".scene-head");
    const body = clone.querySelector(".scene-body");
    clone.querySelector(".scene-part").textContent = scene.part;
    clone.querySelector(".scene-title").textContent = scene.title;
    clone.querySelector(".scene-quote").textContent = scene.quote;
    clone.querySelector(".scene-description").textContent = scene.description;

    const tagList = clone.querySelector(".tag-list");
    scene.tags.forEach((tag) => {
      const item = document.createElement("span");
      item.className = "tag";
      item.textContent = tagLabel(tag);
      tagList.append(item);
    });

    const shotList = clone.querySelector(".shot-list");
    scene.shots.forEach((shot, index) => {
      shotList.append(createCheckItem(`scene:${scene.id}:${index}`, shot));
    });

    head.addEventListener("click", () => {
      const expanded = head.getAttribute("aria-expanded") === "true";
      head.setAttribute("aria-expanded", String(!expanded));
      body.hidden = expanded;
    });

    card.dataset.tags = scene.tags.join(" ");
    sceneGrid.append(clone);
  });
}

function matchesSceneFilters(scene) {
  const filterMatch = activeFilter === "all" || scene.tags.includes(activeFilter) || scene.part.toLowerCase().includes(activeFilter);
  const haystack = [scene.part, scene.title, scene.quote, scene.description, ...scene.tags, ...scene.shots].join(" ").toLowerCase();
  const searchMatch = !searchTerm || haystack.includes(searchTerm);
  return filterMatch && searchMatch;
}

function renderCrew() {
  crewGrid.innerHTML = "";
  crew.forEach((member) => {
    const article = document.createElement("article");
    article.className = "crew-card card";
    article.innerHTML = `
      <h3>${escapeHtml(member.name)} <span class="role-badge">${escapeHtml(member.role)}</span></h3>
      <p>${escapeHtml(member.intro)}</p>
      <ul>${member.tasks.map((task) => `<li>${escapeHtml(task)}</li>`).join("")}</ul>
    `;
    crewGrid.append(article);
  });
}

function renderChecklists() {
  checklistGrid.innerHTML = "";
  checklists.forEach((list, listIndex) => {
    const article = document.createElement("article");
    article.className = "checklist-card card";
    const items = document.createElement("div");
    items.className = "check-items";
    list.items.forEach((item, itemIndex) => {
      items.append(createCheckItem(`checklist:${listIndex}:${itemIndex}`, item));
    });
    const title = document.createElement("h3");
    title.textContent = list.title;
    article.append(title, items);
    checklistGrid.append(article);
  });
}

function createCheckItem(id, label) {
  const wrapper = document.createElement("label");
  wrapper.className = "check-item";

  const input = document.createElement("input");
  input.type = "checkbox";
  input.checked = Boolean(state[id]);
  input.addEventListener("change", () => {
    state[id] = input.checked;
    saveState();
    updateProgress();
  });

  const text = document.createElement("span");
  text.textContent = label;
  wrapper.append(input, text);
  return wrapper;
}

function updateProgress() {
  const allIds = getAllCheckIds();
  const checked = allIds.filter((id) => state[id]).length;
  const total = allIds.length;
  const percent = total ? Math.round((checked / total) * 100) : 0;
  progressFill.style.width = `${percent}%`;
  progressLabel.textContent = `${percent}% gotowe`;
  progressCount.textContent = `${checked} / ${total}`;
  progressBar.setAttribute("aria-valuenow", String(percent));
}

function getAllCheckIds() {
  const sceneIds = scenes.flatMap((scene) => scene.shots.map((_, index) => `scene:${scene.id}:${index}`));
  const checklistIds = checklists.flatMap((list, listIndex) => list.items.map((_, itemIndex) => `checklist:${listIndex}:${itemIndex}`));
  return [...sceneIds, ...checklistIds];
}

function exportProgress() {
  const payload = {
    project: "Kon-Sti-La-Na — dokumentacja klipu",
    exportedAt: new Date().toISOString(),
    progress: state,
    checked: getAllCheckIds().filter((id) => state[id]).length,
    total: getAllCheckIds().length
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "konstilana-postep.json";
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function resetProgress() {
  const ok = confirm("Wyczyścić wszystkie odhaczenia checklist i ujęć?");
  if (!ok) return;
  state = {};
  saveState();
  renderScenes();
  renderChecklists();
  updateProgress();
}

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadDayPlan() {
  try {
    const stored = JSON.parse(localStorage.getItem(PLAN_STORAGE_KEY));
    const validation = PlannerCore.validateImportPayload(stored);
    return validation.ok && validation.kind === "day-plan" ? stored : PlannerCore.createDefaultPlan();
  } catch {
    return PlannerCore.createDefaultPlan();
  }
}

function saveDayPlan() {
  localStorage.setItem(PLAN_STORAGE_KEY, JSON.stringify(dayPlan));
}

function setPlannerMode(mode) {
  plannerMode = mode;
  const isCoordinator = mode === "coordinate";
  joinTab.classList.toggle("is-active", !isCoordinator);
  coordinateTab.classList.toggle("is-active", isCoordinator);
  joinTab.setAttribute("aria-selected", String(!isCoordinator));
  coordinateTab.setAttribute("aria-selected", String(isCoordinator));
  joinPanel.hidden = isCoordinator;
  coordinatePanel.hidden = !isCoordinator;
  renderPlanner();
}

function renderPlanner() {
  renderSignupTasks();
  renderPlanBoard();
  renderCoordinatorControls();
}

function renderSignupTasks() {
  signupTaskList.innerHTML = "";
  dayPlan.tasks.forEach((task) => {
    const available = PlannerCore.taskAvailability(dayPlan, task.id);
    const label = document.createElement("label");
    label.className = "signup-task";
    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = task.id;
    input.disabled = available === 0;
    const content = document.createElement("span");
    content.innerHTML = `<strong>${escapeHtml(task.title)}</strong><small>${escapeHtml(task.role)} · ${available} wolne ${available === 1 ? "miejsce" : "miejsca"}${task.safety ? " · BHP" : ""}</small>`;
    label.append(input, content);
    signupTaskList.append(label);
  });
}

function renderPlanBoard() {
  planBoard.innerHTML = "";
  dayPlan.stages.forEach((stage) => {
    const stageEl = document.createElement("article");
    stageEl.className = "stage-card card";
    const heading = document.createElement("div");
    heading.className = "stage-heading";
    heading.innerHTML = `<span class="timeline-time">${escapeHtml(stage.time)}</span><div><h3>${escapeHtml(stage.title)}</h3><p>${escapeHtml(stage.text)}</p></div>`;
    const tasks = document.createElement("div");
    tasks.className = "stage-tasks";
    dayPlan.tasks.filter((task) => task.stageId === stage.id).forEach((task) => {
      const available = PlannerCore.taskAvailability(dayPlan, task.id);
      const taskEl = document.createElement("div");
      taskEl.className = "plan-task";
      const text = document.createElement("div");
      const confirmed = dayPlan.requests.filter((request) => request.taskId === task.id && request.status === "confirmed");
      const people = plannerMode === "coordinate"
        ? confirmed.map((request) => dayPlan.people.find((person) => person.id === request.personId)?.name).filter(Boolean).join(", ")
        : "";
      text.innerHTML = `<strong>${escapeHtml(task.title)}</strong><p>${escapeHtml(task.description)}</p><small>${escapeHtml(task.role)} · ${available} wolne ${available === 1 ? "miejsce" : "miejsca"}${task.safety ? " · BHP" : ""}${people ? ` · obsada: ${escapeHtml(people)}` : ""}</small>`;
      const actions = document.createElement("div");
      actions.className = "task-actions";
      const mapButton = document.createElement("button");
      mapButton.type = "button";
      mapButton.className = "text-button";
      mapButton.textContent = "Połączenia";
      mapButton.addEventListener("click", () => renderConnectionMap(stage.id));
      actions.append(mapButton);
      if (plannerMode === "coordinate") {
        const editButton = document.createElement("button");
        editButton.type = "button";
        editButton.className = "text-button";
        editButton.textContent = "Edytuj";
        editButton.addEventListener("click", () => editTask(task.id));
        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.className = "text-button danger-text";
        deleteButton.textContent = "Usuń";
        deleteButton.addEventListener("click", () => deleteTask(task.id));
        actions.append(editButton, deleteButton);
      }
      taskEl.append(text, actions);
      tasks.append(taskEl);
    });
    stageEl.append(heading, tasks);
    planBoard.append(stageEl);
  });
}

function renderCoordinatorControls() {
  const stageSelect = document.querySelector("#taskStage");
  stageSelect.innerHTML = "";
  dayPlan.stages.forEach((stage) => {
    const option = document.createElement("option");
    option.value = stage.id;
    option.textContent = stage.title;
    stageSelect.append(option);
  });
  requestList.innerHTML = "";
  const pending = dayPlan.requests.filter((request) => request.status === "pending");
  const title = document.createElement("h4");
  title.textContent = pending.length ? `Zgłoszenia oczekujące (${pending.length})` : "Brak zgłoszeń oczekujących";
  requestList.append(title);
  pending.forEach((request) => {
    const task = dayPlan.tasks.find((item) => item.id === request.taskId);
    const person = dayPlan.people.find((item) => item.id === request.personId);
    if (!task || !person) return;
    const item = document.createElement("div");
    item.className = "request-item";
    item.innerHTML = `<div><strong>${escapeHtml(person.name)}</strong><small>${escapeHtml(task.title)} · ${escapeHtml(task.role)}</small></div>`;
    const actions = document.createElement("div");
    actions.className = "task-actions";
    const approve = document.createElement("button");
    approve.type = "button";
    approve.className = "text-button";
    approve.textContent = "Akceptuj";
    approve.addEventListener("click", () => decideRequest(request.id, "approve"));
    const reject = document.createElement("button");
    reject.type = "button";
    reject.className = "text-button danger-text";
    reject.textContent = "Odrzuć";
    reject.addEventListener("click", () => decideRequest(request.id, "reject"));
    const move = document.createElement("select");
    move.className = "move-request";
    dayPlan.tasks.forEach((target) => {
      const option = document.createElement("option");
      option.value = target.id;
      option.textContent = target.title;
      option.selected = target.id === request.taskId;
      move.append(option);
    });
    move.addEventListener("change", () => {
      PlannerCore.moveSignup(dayPlan, request.id, move.value);
      saveDayPlan();
      renderPlanner();
      setPlannerMessage("Przeniesiono zgłoszenie do wybranego zadania.");
    });
    actions.append(approve, reject, move);
    item.append(actions);
    requestList.append(item);
  });
}

function exportSignup() {
  const name = document.querySelector("#signupName").value;
  const taskIds = [...signupTaskList.querySelectorAll("input:checked")].map((input) => input.value);
  try {
    const signup = PlannerCore.createSignup(dayPlan, { name, taskIds });
    downloadJson(signup, "konstilana-zgloszenie.json");
    setPlannerMessage("Pobrano zgłoszenie. Przekaż plik osobie koordynującej.");
  } catch (error) {
    setPlannerMessage(error.message, true);
  }
}

function exportDayPlan() {
  downloadJson({ ...dayPlan, exportedAt: new Date().toISOString() }, "konstilana-plan-dnia.json");
  setPlannerMessage("Pobrano migawkę lokalnego planu dnia.");
}

async function importPlannerFile(event) {
  const file = event.target.files[0];
  event.target.value = "";
  if (!file) return;
  try {
    const payload = JSON.parse(await file.text());
    const validation = PlannerCore.validateImportPayload(payload);
    if (!validation.ok) throw new Error(validation.error);
    if (validation.kind === "day-plan") {
      if (!confirm("Zastąpić bieżący lokalny plan zaimportowaną migawką?")) return;
      dayPlan = payload;
      saveDayPlan();
      renderPlanner();
      setPlannerMessage("Zaimportowano plan dnia.");
      return;
    }
    const result = PlannerCore.importSignup(dayPlan, payload);
    if (!result.ok) throw new Error(result.error);
    saveDayPlan();
    renderPlanner();
    setPlannerMessage("Zaimportowano zgłoszenie jako oczekujące na decyzję.");
  } catch (error) {
    setPlannerMessage(`Nie zaimportowano pliku: ${error.message}`, true);
  }
}

function decideRequest(requestId, decision) {
  const result = decision === "approve" ? PlannerCore.approveSignup(dayPlan, requestId) : PlannerCore.rejectSignup(dayPlan, requestId);
  if (!result.ok) {
    setPlannerMessage(result.error, true);
    return;
  }
  saveDayPlan();
  renderPlanner();
  setPlannerMessage(decision === "approve" ? "Zgłoszenie zaakceptowane." : "Zgłoszenie odrzucone.");
}

function addTask(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const taskId = form.dataset.editingId;
  const task = {
    id: taskId || `task-${Date.now()}`,
    stageId: data.get("taskStage"),
    title: String(data.get("taskTitle")).trim(),
    description: String(data.get("taskDescription")).trim(),
    role: String(data.get("taskRole")).trim(),
    capacity: Number(data.get("taskCapacity")),
    safety: data.get("taskSafety") === "on"
  };
  if (!task.title || !task.description || !task.role || !Number.isInteger(task.capacity) || task.capacity < 1) {
    setPlannerMessage("Uzupełnij nazwę, opis, rolę i liczbę miejsc co najmniej 1.", true);
    return;
  }
  const index = dayPlan.tasks.findIndex((item) => item.id === taskId);
  if (index >= 0) dayPlan.tasks[index] = task;
  else dayPlan.tasks.push(task);
  delete form.dataset.editingId;
  form.reset();
  saveDayPlan();
  renderPlanner();
  setPlannerMessage(index >= 0 ? "Zapisano zmiany zadania." : "Dodano zadanie do planu.");
}

function editTask(taskId) {
  const task = dayPlan.tasks.find((item) => item.id === taskId);
  if (!task) return;
  const form = document.querySelector("#taskForm");
  form.dataset.editingId = task.id;
  document.querySelector("#taskStage").value = task.stageId;
  document.querySelector("#taskTitle").value = task.title;
  document.querySelector("#taskDescription").value = task.description;
  document.querySelector("#taskRole").value = task.role;
  document.querySelector("#taskCapacity").value = task.capacity;
  document.querySelector("#taskSafety").checked = task.safety;
  form.querySelector("button[type=submit]").textContent = "Zapisz zmiany";
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function deleteTask(taskId) {
  const hasRequests = dayPlan.requests.some((request) => request.taskId === taskId && request.status !== "rejected");
  if (hasRequests || !confirm("Usunąć to zadanie z planu?")) return;
  dayPlan.tasks = dayPlan.tasks.filter((task) => task.id !== taskId);
  saveDayPlan();
  renderPlanner();
  setPlannerMessage("Usunięto zadanie z planu.");
}

function renderConnectionMap(stageId) {
  const stage = dayPlan.stages.find((item) => item.id === stageId);
  const tasks = dayPlan.tasks.filter((task) => task.stageId === stageId);
  const requests = dayPlan.requests.filter((request) => tasks.some((task) => task.id === request.taskId) && request.status !== "rejected");
  connectionMap.hidden = false;
  connectionMap.innerHTML = "";
  const title = document.createElement("h3");
  title.textContent = `Połączenia: ${stage.title}`;
  const hint = document.createElement("p");
  hint.textContent = "Ciągłe połączenia oznaczają zaakceptowaną obsadę, a przerywane — zgłoszenie oczekujące.";
  const map = document.createElement("div");
  map.className = "node-map";
  const stageNode = document.createElement("div");
  stageNode.className = "node stage-node";
  stageNode.textContent = stage.title;
  map.append(stageNode);
  const branches = document.createElement("div");
  branches.className = "node-branches";
  tasks.forEach((task) => {
    const branch = document.createElement("div");
    branch.className = "node-branch";
    const taskNode = document.createElement("div");
    taskNode.className = "node task-node";
    taskNode.textContent = task.title;
    branch.append(taskNode);
    const people = document.createElement("div");
    people.className = "person-nodes";
    const matching = requests.filter((request) => request.taskId === task.id);
    if (!matching.length) {
      const empty = document.createElement("span");
      empty.className = "node-empty";
      empty.textContent = "brak zgłoszeń";
      people.append(empty);
    }
    matching.forEach((request) => {
      const person = dayPlan.people.find((item) => item.id === request.personId);
      if (!person) return;
      const personNode = document.createElement("div");
      personNode.className = `node person-node ${request.status === "pending" ? "is-pending" : ""}`;
      personNode.textContent = person.name;
      people.append(personNode);
    });
    branch.append(people);
    branches.append(branch);
  });
  map.append(branches);
  const close = document.createElement("button");
  close.type = "button";
  close.className = "text-button";
  close.textContent = "Zamknij mapę";
  close.addEventListener("click", () => { connectionMap.hidden = true; });
  connectionMap.append(title, hint, map, close);
  connectionMap.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function downloadJson(payload, filename) {
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function setPlannerMessage(message, isError = false) {
  plannerStatus.textContent = message;
  plannerStatus.classList.toggle("is-error", isError);
}

function tagLabel(tag) {
  const found = filters.find((filter) => filter.id === tag);
  return found ? found.label : tag;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
