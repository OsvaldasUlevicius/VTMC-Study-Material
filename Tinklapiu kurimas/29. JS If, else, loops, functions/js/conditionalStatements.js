// 
// SALYGINIAI SAKINIAI
// 

// First Task

let pirmoPirkejoKrepselioDydis = 2;
let antroPirkejoKrepselioDydis = 3;

if (pirmoPirkejoKrepselioDydis > antroPirkejoKrepselioDydis) {
    console.log("Ilgiau aptarnaujamas pirmasis pirkejas.");
} else {
    console.log("Ilgiau aptarnaujamas antrasis pirkejas.");
}

let comparison = pirmoPirkejoKrepselioDydis > antroPirkejoKrepselioDydis ? "Ilgiau aptarnaujamas pirmasis pirkejas." : "Ilgiau aptarnaujamas antrasis pirkejas.";
console.log(comparison);

// Second Task

let jonoTaskai = 2;
let poviloTaskai = 3;

if (jonoTaskai > poviloTaskai) {
    console.log("Turnyra laimejo Jonas.");
} else {
    console.log("Turnyra laimejo Povilas.");
}

let turnyroNugaletojas = jonoTaskai > poviloTaskai ? "Jonas" : "Povilas";
switch(turnyroNugaletojas){
    case "Jonas":
        console.log("Turnyra laimejo Jonas.");
        break;
    case "Povilas":
        console.log("Turnyra laimejo Povilas.")
        break;
    default:
        "Turnyro niekas nelaimejo."
}

// Third Task

let martynoSaldainiaiGramais = 200;
let karolioSaldainiaiGramais = 300;

if (martynoSaldainiaiGramais > karolioSaldainiaiGramais) {
    console.log("Daugiau saldainiu pirko Martynas.");
} else {
    console.log("Daugiau saldainiu pirko Karolis.");
}

// Fourth Task

let olimpiniuZaidyniuMetai = 2020;

if (olimpiniuZaidyniuMetai % 4 == 0) {
    let olimpiniuZaidyniuNumeris = (olimpiniuZaidyniuMetai - 1896) / 4 + 1;
    console.log(`n = ${olimpiniuZaidyniuNumeris}`);
} else {
    console.log("Metai neolimpiniai.")
}

// Fifth Task

let pamokosTrukme = 60;
let praejesPamokosLaikas = 53;

let likesPamokosLaikas = pamokosTrukme - praejesPamokosLaikas;

if (likesPamokosLaikas > 30) {
    console.log("Liko dar labai daug laiko.");
} else if (15 < likesPamokosLaikas && likesPamokosLaikas< 30) {
    console.log("Liko dar nemazai laiko.");
} else if (7 < likesPamokosLaikas && likesPamokosLaikas < 15) {
    console.log("Liko nedaug laiko.");
} else {
    console.log("Pamoka baigesi.")
}

// Sixth Task

let metai = 2004;

let arMetaiKeliamieji = metai % 400 == 0 || (metai % 100 > 0 && metai % 4 == 0) ? true : false;

switch(arMetaiKeliamieji){
    case true:
        console.log("Metai yra keliamieji.");
        break;
    case false:
        console.log("Metai nera keliamieji.");
        break;
    default:
        console.log(`The value ${arMetaiKeliamieji} is not correct for the variable "arMetaiKeliamieji"`);

}

// 
// 
const add = (a, b) => a + b
// 
// 

// Seventh Task

let loterijosBilietoNr = 123459;

let loterijosBilietoNrArray = Array.from(String(loterijosBilietoNr), Number);
console.log(loterijosBilietoNrArray);

let sumArray = loterijosBilietoNrArray.reduce(add);

let arBilietasLaimingas = sumArray % 4 == 0 ? true : false;

switch(arBilietasLaimingas){
    case true:
        console.log(`Bilieto skaitmenu suma: ${sumArray}, bilietas yra laimingas!`);
        break;
    case false:
        console.log(`Bilieto skaitmenu suma: ${sumArray}, bilietas nera laimningas...`);
        break;
}

// Eighth Task

let knyguSkaiciusSarase = 10;
let vidutinisPuslapiuSkaiciusKnygose = 200;
let perskaitytiPslSavaitesDienomis = [40, 40, 50, 40, 30];
let kiekSavaiciuSkaite = 11;

let perSavaitePerskaitytiPsl = perskaitytiPslSavaitesDienomis.reduce(add);

let kiekSavaiciuReiktuSkaityti = (knyguSkaiciusSarase * vidutinisPuslapiuSkaiciusKnygose) / perSavaitePerskaitytiPsl;

if (kiekSavaiciuReiktuSkaityti > kiekSavaiciuSkaite) {
    console.log("Jonas knygu perskaityti nespes");
} else {
    console.log("Jonas knygas perskaityti spes.");
}

// Ninth Task

let arSaziningaiSprendeNd = 1;
let arUzrasaiTvarkingi = 1;
let arNepraleidoPamoku = 1;

let mokinioIvertinimas = arSaziningaiSprendeNd + arUzrasaiTvarkingi + arNepraleidoPamoku == 3 ? true : false;

switch(mokinioIvertinimas){
    case true:
        console.log("Mokinys desimtuka gaus.");
        break;
    case false:
        console.log("Mokinys desimtuko negaus");
        break;
}

// Tenth task

let kiekGaliSkirtiKelionei = 4500;

if (kiekGaliSkirtiKelionei >= 4000) {
    console.log("Jolantai geriausiai tiktu pirmos grupes kelione.");
} else if (kiekGaliSkirtiKelionei <= 3999 && kiekGaliSkirtiKelionei >= 3000) {
    console.log("Jolantai geriausiai tiktu antros grupes kelione.");
} else if (kiekGaliSkirtiKelionei <= 2999 && kiekGaliSkirtiKelionei >= 1000) {
    console.log("Jolantai geriausiai tiktu trecios grupes kelione.");
} else {
    console.log("Jolantai geriausiai tiktu ketvirtos grupes kelione.");
}
