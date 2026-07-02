# Kon-Sti-La-Na — interaktywna dokumentacja klipu

Statyczna strona do zahostowania na GitHub Pages. Bez builda, bez backendu, bez zależności.

## Pliki

- `index.html` — struktura strony
- `style.css` — wygląd
- `script.js` — interakcje, filtry, checklisty, localStorage

## Funkcje

- Interaktywna mapa scen według fragmentów piosenki
- Filtrowanie po części utworu i uczestnikach
- Checklisty ujęć, sprzętu, BHP i postprodukcji
- Automatyczny zapis odhaczeń w `localStorage`
- Eksport postępu do JSON
- Tryb drukowania / zapis do PDF z przeglądarki
- Responsywność pod telefon

## Jak wrzucić na GitHub Pages

1. Stwórz nowe repozytorium na GitHubie, np. `konstilana-klip`.
2. Wrzuć do repozytorium pliki `index.html`, `style.css`, `script.js` i opcjonalnie `README.md`.
3. Wejdź w **Settings → Pages**.
4. Wybierz źródło: **Deploy from a branch**.
5. Branch: `main`, folder: `/ (root)`.
6. Zapisz. Po chwili strona będzie dostępna pod adresem GitHub Pages repozytorium.

## Edycja treści

Najwięcej treści siedzi w tablicach w `script.js`:

- `scenes` — sceny i ujęcia
- `timeline` — plan dnia
- `crew` — role ekipy
- `checklists` — checklisty

Możesz edytować same teksty bez ruszania mechaniki strony.
