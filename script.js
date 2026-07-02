const STORAGE_KEY = "konstilana-progress-v1";
const AUDIO_WIDGET_KEY = "konstilana-audio-widget-collapsed";

const filters = [
  { id: "all", label: "Wszystko" },
  { id: "intro", label: "Intro" },
  { id: "refren", label: "Refreny" },
  { id: "zwrotka", label: "Zwrotki" },
  { id: "bridge", label: "Bridge" },
  { id: "outro", label: "Outro" },
  { id: "cybus", label: "Cybuś" },
  { id: "maniek", label: "Maniek" },
  { id: "olka", label: "Olka" },
  { id: "luna", label: "Luna" },
  { id: "bhp", label: "BHP" }
];

const scenes = [
  {
    id: "intro-wejscie",
    part: "Intro",
    title: "Konstilana jako mapa startowa",
    quote: "Kon-sti, Kon-sti, la-la-la-na / Ust-nik, Ust-nik, Cy-buch",
    description: "Szybkie establishing shoty: fasada, okna, rdza, wejście, Cybuś pojawiający się jak gracz na początku levelu.",
    tags: ["intro", "cybus"],
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
    description: "Najbardziej ikoniczny performance shot. Cybuś centralnie, z ruiną za plecami, jak monarcha bez pałacu, ale z pełnym lore.",
    tags: ["refren", "cybus", "maniek"],
    shots: [
      "Cybuś rapuje refren do kamery w najładniejszym miejscu lokacji.",
      "Szeroki kadr: mała postać w wielkim pustostanie.",
      "Maniek jako hype-man na okrzyki Kon-Sti-La-Na."
    ]
  },
  {
    id: "zwrotka-wejscie",
    part: "Zwrotka 1",
    title: "Wejście do betonowego azylu",
    quote: "Idzie bez pośpiechu, i o jednym Cybek śni…",
    description: "Chodzone ujęcia bez pośpiechu: korytarz, wejście, ściany, długi spacer przez budynek. Klimat bardziej narracyjny niż koncertowy.",
    tags: ["zwrotka", "cybus"],
    shots: [
      "Cybuś wchodzi do budynku zza pleców operatora.",
      "Długie przejście korytarzem z lekkim trzęsieniem kamery.",
      "Cybuś ogląda przestrzeń, jakby wracał do znajomego miejsca."
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
    tags: ["bhp", "zwrotka", "maniek"],
    shots: [
      "Zbliżenia na papiery, śmieci i rdzę.",
      "Cybuś pokazuje podłogę jak prezenter wystroju wnętrz.",
      "Maniek sprawdza drogę i odcina głupie pomysły."
    ]
  },
  {
    id: "build-up-wejscie-dnia",
    part: "Build Up",
    title: "Wejście dnia",
    quote: "Cybuch z domu Kometa zaraz robi wejście dnia.",
    description: "Moment narastania. Cybuś idzie w stronę kamery, najlepiej przez framugę albo korytarz. Na drop wchodzi refren.",
    tags: ["refren", "cybus", "maniek"],
    shots: [
      "Niski kąt: Cybuś idzie prosto na kamerę.",
      "Szybkie przebitki: okno, schody, twarz, dym, buty.",
      "Wejście przez drzwi lub framugę zsynchronizowane z build-upem."
    ]
  },
  {
    id: "parapet-tron",
    part: "Refren 2",
    title: "Parapet zamiast tronu",
    quote: "Nie ma tu tronu, jest parapet i wiatr.",
    description: "Obowiązkowy symbol klipu. Cybuś siedzi przy oknie/parapecie i patrzy na lokację jak na własne królestwo.",
    tags: ["refren", "cybus", "bhp"],
    shots: [
      "Cybuś siedzi przy bezpiecznym oknie albo na stabilnym miejscu obok parapetu.",
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
    tags: ["refren", "cybus"],
    shots: [
      "Detal dachu, parapetu albo śladów ptaków, jeśli są.",
      "Cybuś zachwycony widoczkiem w stylu ma-ni-fiq.",
      "Krótki zoom na reakcję Mańka."
    ]
  },
  {
    id: "zwrotka-dymowy-szlak",
    part: "Zwrotka 2",
    title: "Dymowy szlak w mlecznych oknach",
    quote: "W mlecznych oknach rysuje się dymowy szlak.",
    description: "Druga zwrotka powinna być mniej biegana, bardziej siedząca i zawieszona. Czas krzywo płynie, Cybuś już nie musi nic.",
    tags: ["zwrotka", "cybus"],
    shots: [
      "Cybuś siedzi nieruchomo na tle okien.",
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
    tags: ["zwrotka", "cybus"],
    shots: [
      "Close-up Cybka bez uśmiechu i bez memicznej miny.",
      "Cybuś odkłada telefon albo przestaje patrzeć w ekran.",
      "Cichy kadr przez okno, możliwie z drzewami albo chmurami."
    ]
  },
  {
    id: "refren-gang",
    part: "Refren 3",
    title: "Chór pustostanu",
    quote: "Cy-buch! Cy-buch! / Ko-me-ta!",
    description: "Najbardziej wspólnotowy refren. Maniek i opcjonalnie Olka robią call-and-response. Luna może wejść jako strażniczka ruin.",
    tags: ["refren", "maniek", "olka", "luna", "cybus"],
    shots: [
      "Maniek i Cybuś krzyczą gang-vocale do kamery.",
      "Olka jako świadek/kontrast/reakcja, jeśli będzie.",
      "Luna tylko w bezpiecznej strefie: przy wejściu albo na czystym korytarzu."
    ]
  },
  {
    id: "cybek-meteo",
    part: "Bridge",
    title: "Cybek Meteo",
    quote: "Tutaj Cybek Meteo, pogoda: ja pierdolę.",
    description: "Piracka prognoza pogody z końca świata. Cybuś mówi close-mic do kamery, jak prezenter, który już widział wszystko.",
    tags: ["bridge", "cybus"],
    shots: [
      "Cybuś stoi przy oknie i pokazuje front atmosferyczny na ścianie.",
      "Napis ekranowy: CYBEK METEO.",
      "Po ciszy bliski kadr: I to wystarczy."
    ]
  },
  {
    id: "instrumental-break",
    part: "Instrumental Break",
    title: "Glitchowy przelot przez lokację",
    quote: "kon-sti, kon-sti, la-la-la-na / Cybuch, Cybuch, z domu Kometa",
    description: "Materiał montażowy: schody, twarze, buty, dym, ściany, Luna, Maniek, szybkie obroty i brutalne cięcia pod breakbeat.",
    tags: ["refren", "maniek", "olka", "luna", "cybus"],
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
    tags: ["refren", "cybus", "maniek", "olka", "luna"],
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
    description: "Spokojne opuszczenie lokacji. Mniej efektów, więcej oddechu. Budynek zostaje sam, a Cybuś kończy szczęśliwy.",
    tags: ["outro", "cybus", "maniek", "olka", "luna"],
    shots: [
      "Cybuś patrzy ostatni raz na Konstilanę.",
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
    text: "Fasada, komin, wejście, Cybuś pod budynkiem, pierwsze wejście w klimat.",
    items: ["Budynek z daleka", "Detale okien i drzwi", "Cybuś idący do Konstilany"]
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
    text: "Refreny, wejście dnia, Cybek Meteo i najważniejsza linia o powrocie do siebie przez pustostan.",
    items: ["Refren przy oknach", "Bridge blisko kamery", "Finalny refren z największą energią"]
  },
  {
    time: "Etap 4",
    title: "Ekipa, reakcje i gang-vocale",
    text: "Maniek jako hype-man, Olka jako świadek, Luna jako strażniczka ruin — tylko w bezpiecznych strefach.",
    items: ["Call-response", "Śmiech i backstage", "Luna bez szkła, dziur i hałasu"]
  },
  {
    time: "Etap 5",
    title: "Outro i wyjście",
    text: "Ostatnie spojrzenie, opuszczenie lokacji, czarny ekran, klik.",
    items: ["Spokojne ujęcia", "Budynek zostaje pusty", "Opcjonalna herbata/domowy kadr po powrocie"]
  }
];

const crew = [
  {
    name: "Cybuś",
    role: "główny byt",
    intro: "Narrator, król wybitych okien, człowiek robiący z pustostanu prywatne królestwo.",
    tasks: ["Rapuje główne fragmenty", "Siedzi przy oknie/parapecie", "Robi Cybek Meteo", "W momentach szczerych przestaje robić miny"]
  },
  {
    name: "Maniek",
    role: "operator / hype-man",
    intro: "Drugi mózg BHP, kamera pomocnicza i człowiek od gang-vocali.",
    tasks: ["Nagrywa Cybka", "Pilnuje światła i kadru", "Krzyczy Kon-Sti-La-Na / Cy-buch / Ko-me-ta", "Odcina pomysły typu: super kadr, tylko strop odpada"]
  },
  {
    name: "Olka",
    role: "opcjonalnie",
    intro: "Świadek wyprawy, backstage, reakcje i spokojniejszy kontrast dla Cybanowego obrządku.",
    tasks: ["Nagrywa backstage telefonem", "Pojawia się w refrenach", "Reaguje naturalnie na absurd", "Pomaga z Luną, jeśli Luna idzie"]
  },
  {
    name: "Luna",
    role: "strażniczka",
    intro: "Nie gra. Jest Luną. Jeśli nie chce, nie kręcimy Luny. Pies wygrywa z planem zdjęciowym.",
    tasks: ["Bezpieczne ujęcie przy wejściu", "Krótki spacer po czystej strefie", "Spojrzenie w kamerę", "Zero szkła, dziur, metalu i stresu"]
  }
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
      "Woda dla Luny, jeśli idzie",
      "Rękawiczki robocze",
      "Apteczka minimum"
    ]
  },
  {
    title: "Ujęcia obowiązkowe",
    items: [
      "Budynek z zewnątrz",
      "Cybuś wchodzący do Konstilany",
      "Refren przy wybitych oknach",
      "Cybuś przy parapecie / oknie",
      "Detale rdzy, szkła, schodów, papierów, graffiti",
      "Cybek Meteo",
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
      "Luna nie wchodzi w szkło, dziury i metal"
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
let activeFilter = "all";
let searchTerm = "";

const sceneGrid = document.querySelector("#sceneGrid");
const sceneTemplate = document.querySelector("#sceneTemplate");
const filterRow = document.querySelector("#filterRow");
const searchInput = document.querySelector("#searchInput");
const timelineEl = document.querySelector("#timeline");
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

let introCloseTimer;
let introPreviousFocus;

init();

function init() {
  renderFilters();
  renderScenes();
  renderTimeline();
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

function renderTimeline() {
  timelineEl.innerHTML = "";
  timeline.forEach((step) => {
    const article = document.createElement("article");
    article.className = "timeline-card";
    article.innerHTML = `
      <div><span class="timeline-time">${escapeHtml(step.time)}</span></div>
      <div>
        <h3>${escapeHtml(step.title)}</h3>
        <p>${escapeHtml(step.text)}</p>
        <ul>${step.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </div>
    `;
    timelineEl.append(article);
  });
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
