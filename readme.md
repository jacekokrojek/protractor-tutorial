# Przygotowanie środowiska
Zainstaluj poniższe komponenty
* node.js
* npm 
# Instalowanie zależności
Instalacja
`npm install`

# Tworzenie nowego projektu
* Do stworzenia nowego projektu należy wykonać polecenie i podać podstawowe informacje o projekcie
`npm init`
* Kolejnym krokiem jest dodanie zależności poleceniem
`npm install --save <modul>`

# TypeScript
Korzystanie z TypeScript wymaga zainstalowania modułu typescript `npm install -g typescript`. Do uchuchomienie kodu potrzebne są dwa kroki: transpilacja do kodu JavaScript i uduchomienie kodu JavaScript poleceniem node
`tsc sample.ts`
`node sample.js`

# Korzystanie z ts-node
Moduł ts-node pozwala na uruchamianie kodu TypeScript jednym poleceniem. Jeśli zainstalujemy moduł globalnie będzie odbywać się to jak poniżej
`npm install -g ts-node`
`ts-node sample.ts`


`npm install ts-node`
`npx ts-node sample.ts`
`node node_modules/ts-node/dist/bin.js sample.ts`
`node -r ts-node/register sample.ts`

# Node Types
Aby umożliwić typowanie dla komponentów napisanych w JavaScript należy do projektu dodać odpowiednie definicje przez odrębne moduły. Przykład definicji dla modułów node to 
`npm install --save-dev @types/node`
