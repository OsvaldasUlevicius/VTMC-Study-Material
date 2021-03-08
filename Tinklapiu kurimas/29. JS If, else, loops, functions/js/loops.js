// 
// LOOPS
// 

// 
// FOR LOOPS
// 

// First Task

let kiekDienuDresavo = 4;
let kiekKatinasIstvereKasdien = [15, 12, 13, 20];

let minutesTotal = 0;
for (let i = 0; i < 4; i++){
    minutesTotal += kiekKatinasIstvereKasdien[i];
}
let vidutiniskaiDresavo = minutesTotal / kiekDienuDresavo;

console.log(`Per ${kiekDienuDresavo} dienas Zinas buvo dresuojamas ${minutesTotal} minuciu. Vidutiniskai per diena katinas buvo dresuojamas ${vidutiniskaiDresavo} minuciu.`)

// Second Task    

let braskiuSkaicius = 4;
let braskiuDaugejimoSkaicius = 5;
let dienuSkaicius = 3;

for (let i = 0; i < dienuSkaicius; i++){
    braskiuSkaicius += braskiuSkaicius * braskiuDaugejimoSkaicius;
}

console.log(`Per ${dienuSkaicius} dienas prinoko ${braskiuSkaicius} braskes`);

// Third Task

let prekesKaina = 100;
let aukcionoDalyviai = 4;

let aukcionoDalyviuDidinimai = [5, 7, 5, 5]

for(let i = 0; i < aukcionoDalyviai; i++){
    prekesKaina += aukcionoDalyviuDidinimai[i];
}
console.log(`Galutine prekes kaina bus ${prekesKaina} litai.`);

// Fourth Task

let skaicius = 30

let skaiciausDalikliuSuma = 0;

for(let i = 1; i < skaicius; i++){
    if(skaicius % i == 0) {
        skaiciausDalikliuSuma += i;
    }
}

if(skaiciausDalikliuSuma == skaicius){
    console.log(`${skaicius} yra tobulasis skaicius.`)
} else{
    console.log(`${skaicius} nera tobulasis skaicius.`)
}

// 
// 
const add = (a, b) => a + b
// 
// 

// Fifth Task

let number = 7;
let times = 5;

let sum = 0;
for(let i = 1; i <= times; i++){
    sum += parseInt(number.toString().repeat(i));
}

console.log(sum);

// 
// WHILE LOOPS
// 

// First Task

let number1 = 5;
let number2 = 3;

let i = 1
while(true){
    if(i % number1 == 0 && i % number2 ==0){
        break;
    }
    i++;
}
console.log(`Skaiciu ${number1} ir ${number2} maziausias bendras kartotinis yra ${i}.`);

// Second Task

let atlyginimas = {
    atlyginimas: 1000,
    atlyginimoAugimas: 500,
    atlyginimnasPoMetu: null,
    atlyginimasPo3Men: null,
    atlyginimasDvigubasMen: null,
    atlyginimas4000Men: null,
}

let pakeltasAtlyginimas = atlyginimas.atlyginimas;

i = 0;
while(true){
    i++;
    pakeltasAtlyginimas += atlyginimas.atlyginimoAugimas;
    if(!atlyginimas.atlyginimasDvigubasMen && pakeltasAtlyginimas / atlyginimas.atlyginimas > 2){
        atlyginimas.atlyginimasDvigubasMen = i;
    }
    if(!atlyginimas.atlyginimas4000Men && pakeltasAtlyginimas > 4000) {
        atlyginimas.atlyginimas4000Men = i;
    }
    if(i == 3){
        atlyginimas.atlyginimasPo3Men = pakeltasAtlyginimas;
    }
    if(i == 12){
        atlyginimas.atlyginimnasPoMetu = pakeltasAtlyginimas;
        break;
    }
}

console.log(`Atlyginimas po metu bus ${atlyginimas.atlyginimnasPoMetu} eur.`);
console.log(`Atlyginimas po triju menesiu bus ${atlyginimas.atlyginimasPo3Men} eur.`)

if(atlyginimas.atlyginimasDvigubasMen){
    console.log(`Atlyginimas bus daugiau neidvigubai didesnis po ${atlyginimas.atlyginimasDvigubasMen} menesiu.`);
}

if(atlyginimas.atlyginimas4000Men){
    console.log(`Atlyginimas bus daugiau 4000 po ${atlyginimas.atlyginimas4000Men} menesiu.`);
}


// Third Task

number = 1234
let numberArray = number.toString().split('');

i = 1;
let numberBackwards = "";
while(i <= numberArray.length){
    numberBackwards += numberArray[numberArray.length - i];
    i++;
}
console.log(numberBackwards);

// Fourth Task

let seka = "";
number = 6;
i = 1;
let suma = 0;
while(suma < number){
    seka += i + " ";
    i++;
    suma += i - 1;
}
if(suma == number){
    console.log(seka);
} else{
    console.log("Seka nerasta.")
}

// Sixth Task

number1 = 2;
number2 = 5;
let ar_pirminis = true;
i = 1;
while (number1 > i){
    i++;
    if (number1 % i == 0 && number1 != i) {
        ar_pirminis = false;
        break;
    }
}

if (ar_pirminis){
    console.log(`Skaicius ${number1} yra pirminis.`);
} else {
    console.log(`Skaicius ${number1} yra sudetinis.`);
}

// Seventh Task

number = 24;
let ar_faktorialas = true;

i = 1;
y = 1;
while (y < number){
    y *= i + 1;
    i++;
}

if (y == number){
    console.log(`Skaicius ${number} yra skaiciaus ${i} faktorialas.`)
} else {
    console.log(`Skaicius ${number} nera niekeno faktorialas... :(`)
}

// 
// LOOPS + ARRAYS
// 

// First Task

const circles = [
    {
        spindulys: 9,
    },
    {
        spindulys: 10,
    },
    {
        spindulys: 8,
    },
    {
        spindulys: 7,
    },
    {
        spindulys: 6,
    },
    {
        spindulys: 15,
    },
    {
        spindulys: 4,
    },
    {
        spindulys: 7,
    },
    {
        spindulys: 15,
    },
    {
        spindulys: 15,
    },
]

let biggestRadius = 0;
let numberOfInstances = 0;
for (let circle of circles) {
    if (circle["spindulys"] >= biggestRadius) {
        if (circle["spindulys"] > biggestRadius) {
            numberOfInstances = 0;
            biggestRadius = circle["spindulys"];
        } 
        numberOfInstances++;
    }
}

console.log(`Didziausias spindulys yra ${biggestRadius}. Tokius apskritimu is viso yra ${numberOfInstances}`);

// Second Task

const bankClients = [
    {
        accountBalance: 900,
    },
    {
        accountBalance: 1032,
    },
    {
        accountBalance: 82,
    },
    {
        accountBalance: 700,
    },
    {
        accountBalance: 6000,
    },
    {
        accountBalance: 1500,
    },
    {
        accountBalance: 400,
    },
    {
        accountBalance: 71,
    },
    {
        accountBalance: 155,
    },
    {
        accountBalance: 151221,
    },
]

numberOfInstances = 0;
for (let client of bankClients) {
    if (client["accountBalance"] > 1000) {
        numberOfInstances++;
    }
}

console.log(`Zmoniu, kuriu indelis daugiau negu 1000 lt, yra ${numberOfInstances}`);


// Third Task

let vaikuLankomumas = {};

for (let i = 10; i > 0; i--) {
    vaikuLankomumas[10-i] = {praleistos_pamokos: i};
}

console.log("Vaiku lankomumas:");
console.log(vaikuLankomumas);

// Fourth Task

let kartoteka = {};
for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        kartoteka[i] = {skyriaus_numeris: i, korteliu_kiekis: i,};
    } else {
        kartoteka[i] = {skyriaus_numeris: i, korteliu_kiekis: i * 3,};
    }
}

console.log("Kartoteka:");
console.log(kartoteka);

// Fifth Task

const mokiniai = [
    {
        matematika: 10,
        lietuviu_kalba: 20,
        kuno_kultura: 5,
        informacines_technologijos: 9,
    },
    {
        matematika: 2,
        lietuviu_kalba: 2,
        kuno_kultura: 2,
        informacines_technologijos: 2,
    },
    {
        matematika: 1,
        lietuviu_kalba: 5,
        kuno_kultura: 8,
        informacines_technologijos: 9,
    },
    {
        matematika: 10,
        lietuviu_kalba: 2,
        kuno_kultura: 2,
        informacines_technologijos: 5,
    },
    {
        matematika: 7,
        lietuviu_kalba: 5,
        kuno_kultura: 6,
        informacines_technologijos: 3,
    },
    {
        matematika: 10,
        lietuviu_kalba: 10,
        kuno_kultura: 10,
        informacines_technologijos: 10,
    },
    {
        matematika: 4,
        lietuviu_kalba: 5,
        kuno_kultura: 6,
        informacines_technologijos: 7,
    },
    {
        matematika: 7,
        lietuviu_kalba: 7,
        kuno_kultura: 7,
        informacines_technologijos: 7,
    },
    {
        matematika: 5,
        lietuviu_kalba: 4,
        kuno_kultura: 3,
        informacines_technologijos: 2,
    },
    {
        matematika: 1,
        lietuviu_kalba: 10,
        kuno_kultura: 10,
        informacines_technologijos: 2,
    },
]

let mokiniuVidurkiai = {};
let pazymiuVidurkis;
let numberOfGrades;

i = 0;
for (let mokinys of mokiniai) {
    pazymiuVidurkis = 0;
    numberOfGrades = 0;
    for (pazymys in mokinys) {
        pazymiuVidurkis += mokinys[pazymys];
        numberOfGrades++;
    }
    mokiniuVidurkiai[i] = {mokinio_id: i, mokinio_vidurkis: pazymiuVidurkis / numberOfGrades,};
    i++;
}

console.log("Mokiniu vidurkiai:");
console.log(mokiniuVidurkiai);
