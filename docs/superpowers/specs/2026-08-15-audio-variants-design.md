# Warianty utworu w widżecie audio

## Cel

Widżet audio ma prezentować kilka wersji tego samego utworu zamiast pojedynczego pliku `bgmusic.mp3`.

## Zakres i struktura

- Nagłówek widżetu oraz przycisk zwijania pozostają bez zmian.
- Lista wersji jest generowana w `script.js` z krótkiej tablicy numerów ścieżek.
- Numer `01` tworzy pozycję o etykiecie `Wariant 01` i źródle `assets/track01.mp3`; identycznie dla kolejnych numerów.
- Początkowa konfiguracja obejmuje dostępne pliki `track01.mp3` i `track02.mp3`. Dodanie kolejnej wersji wymaga tylko dopisania numeru do tablicy po uprzednim umieszczeniu odpowiadającego pliku w `assets/`.

## Zachowanie

- Rozwinięty widżet pokazuje osobny natywny odtwarzacz dla każdego wariantu.
- Uruchomienie jednego wariantu wstrzymuje wszystkie pozostałe, aby dźwięki nie nakładały się.
- Stan zwinięcia pozostaje zapisany w obecnym kluczu `localStorage`.
- Gdy lista wariantów jest pusta, widżet przekazuje czytelną informację zamiast pustej przestrzeni.

## Dostępność i styl

- Każdy odtwarzacz ma widoczną tekstową etykietę.
- Dotychczasowe style i responsywne wymiary widżetu są zachowane; dodany zostaje pionowy odstęp między wariantami.

## Weryfikacja

- Test jednostkowy sprawdza budowanie ścieżki i etykiety na podstawie numeru wariantu.
- Test jednostkowy sprawdza, że rozpoczęcie jednego wariantu wstrzymuje pozostałe.
- Ręcznie sprawdzona zostanie lista, zwijanie, odtwarzanie oraz responsywny widok strony.
