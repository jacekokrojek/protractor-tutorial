import { app } from  './src/App';
import { screen } from  './src/Screen';
import * as path from 'path';

app.openSync ("notepad");
screen.writeSync("Hej")
screen.clickSync(path.resolve("img","Plik.png"))
screen.clickSync(path.resolve("img","Zakoncz.png"))
screen.clickSync(path.resolve("img","Nie_zapisuj.png"))
