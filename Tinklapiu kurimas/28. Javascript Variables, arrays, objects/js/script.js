// First task

let amzius = 27;
let vardas = "Osvaldas";
let hobis = "sokiai";
console.log(`Mano vardas ${vardas}, man ${amzius}. Mano hobis yra ${hobis}`);

// Second task
let gimimo_metai = 1993;
let metai = 2025;

let predicted_age = metai - gimimo_metai;

console.log(`${metai} metais man bus ${predicted_age} arba ${(predicted_age - 1)} metai/metu."`);

// Third task

let skersmuo = 14;
let spindulys = 14 / 2;

let perimetras = 2 * Math.PI * spindulys;
let plotas = Math.PI * Math.pow(spindulys, 2);
console.log(`Apskritimo, kurio skermuo yra ${skersmuo}, perimetras yra ${perimetras.toFixed(2)}`);
console.log(`Apskritimo, kurio skersmuo yra ${skersmuo}, plotas yra ${plotas.toFixed(2)}`);

// Fourth task

let laipsniaiInCelsius = 23;

let laipsniaiInFahrenheit = laipsniaiInCelsius * 1.8 + 32;

console.log(`${laipsniaiInCelsius} °C yra ${laipsniaiInFahrenheit} °F.`);

// Fifth task

let sentence = "Mes kalbame mazai, jeigu nekalbame apie save.";

console.log(`Sentence length: ${sentence.length}`);
console.log(`Sentence in uppercase: ${sentence.toUpperCase()}`);
console.log(`Sentence without "apie save": ${sentence.replace("apie save", "")}`);

let sentenceArray = sentence.split(/[\s,]+/);
console.log(sentenceArray);
console.log(sentenceArray.indexOf("mazai"));
console.log(`Remade sentence: ${sentence.replace("kalbame", "snekame")}`);

// Sixth task

let disruptedSentence = "laBa8s rYta56s, lIEtuva";
console.log(disruptedSentence.toLowerCase().replaceAll("l", "L").replaceAll(/\d/g, ""));

// Seventh task

let fruits = ["Apple", "Banana", "Orange", "Watermelon", "Avocados", "Pineapple", "Pear", "Mango", "Lemon", "Nectarine"];
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits[5] = "new";
console.log(fruits);
let berries = ["blueberries", "raspberries", "strawberries", "grapes"];
let newArray = fruits.concat(berries);
console.log(newArray);
console.log(newArray.join(", "));

// Eigth task

const mokinys = [
    {
        vardas: "Martynas",
        pavarde: "Lubys",
        amzius: 17,
        pazymiuVidurkis: 4.5,
        stipendija: false,
    },
    {
        vardas: "Alina",
        pavarde: "Alijeva",
        amzius: 16,
        pazymiuVidurkis: 9,
        stipendija: true,
    },
    {
        vardas: "Kazimieras",
        pavarde: "Bakstys",
        amzius: 17,
        pazymiuVidurkis: 9.3,
        stipendija: true,
    },
    {
        vardas: "Algimantas",
        pavarde: "Peraitis",
        amzius: 16,
        pazymiuVidurkis: 6.5,
        stipendija: true,
    },
    {
        vardas: "Kotryna",
        pavarde: "Petraityte",
        amzius: 16,
        pazymiuVidurkis: 4,
        stipendija: false,
    },
]

console.log(mokinys[1].amzius)
console.log(mokinys[3].pazymiuVidurkis)
console.log(mokinys[1])
