# Repository Guidelines

## Struktura projektu i organizacja modułów

To statyczna strona dokumentacji teledysku, bez backendu, bundlera i zależności npm. Główne pliki są w katalogu głównym:

- `index.html` - struktura strony i sekcje nawigacji.
- `style.css` - wygląd, responsywność, tryb druku i zmienne CSS.
- `script.js` - dane scen, planu, ekipy, checklist oraz logika interakcji.
- `assets/` - obrazy PNG i pliki audio używane przez stronę.

Treści produkcyjne edytuj przede wszystkim w tablicach w `script.js`, np. `scenes`, `timeline`, `crew` i `checklists`.

## Komendy budowania, testowania i uruchamiania

Projekt nie wymaga instalacji ani builda.

- `Start-Process .\index.html` - otwiera stronę lokalnie w domyślnej przeglądarce na Windows.
- `python -m http.server 8000` - uruchamia prosty serwer lokalny, przydatny do sprawdzenia ścieżek i zasobów pod `http://localhost:8000`.
- `git status` - sprawdza, które pliki zmieniono przed commitem, jeśli katalog jest używany jako repozytorium Git.

## Styl kodu i nazewnictwo

Utrzymuj prosty, ręcznie czytelny kod. W HTML, CSS i JS stosuj wcięcia dwoma spacjami, tak jak w obecnych plikach. Dla identyfikatorów HTML, klas CSS i tagów danych używaj `kebab-case`, np. `progress-panel` albo `intro-wejscie`. W JavaScripcie preferuj `const`, tablice obiektów i krótkie funkcje skupione na jednej odpowiedzialności. Nie dodawaj frameworków ani zależności, jeśli zwykły HTML/CSS/JS wystarcza.

## Testowanie

Nie ma automatycznego zestawu testów. Po zmianach sprawdź stronę ręcznie w przeglądarce:

- nawigację po sekcjach,
- filtrowanie scen,
- checklisty i zapis w `localStorage`,
- eksport postępu do JSON,
- widok mobilny oraz drukowanie / zapis do PDF.

Przy zmianach w danych upewnij się, że każde `id` jest unikalne i stabilne, ponieważ może być używane przez stan zapisany w przeglądarce.

## Commity i pull requesty

Ten katalog nie zawiera obecnie historii Git, więc nie ma lokalnej konwencji commitów do odtworzenia. Używaj krótkich komunikatów w trybie rozkazującym, np. `Update scene checklist` albo `Add mobile print fixes`. Pull request powinien zawierać opis zmiany, listę ręcznie sprawdzonych funkcji oraz zrzuty ekranu, jeśli modyfikujesz układ, kolory lub zasoby wizualne.

## Wskazówki dla agentów

Zachowuj stronę jako samodzielny projekt GitHub Pages. Nie przenoś treści do generatora ani aplikacji SPA bez wyraźnej potrzeby. Dbaj, aby ścieżki do `assets/` pozostały względne i działały po publikacji z katalogu głównego repozytorium.
