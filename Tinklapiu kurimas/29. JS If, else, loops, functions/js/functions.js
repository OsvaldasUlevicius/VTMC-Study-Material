// 
// FUNCTIONS
// 

// First Task

function countTotalWeight (camperWeights, costPerKg) {
    let totalWeight = 0;
    let numberOfCampersWithUnder10kg = 0;
    for (let weight of camperWeights) {
        totalWeight += weight;
        if (weight < 10) {
            numberOfCampersWithUnder10kg++;
        }
    }
    let cost = totalWeight * costPerKg;
    let averageWeightPerPerson = totalWeight / camperWeights.length;
    console.log(`
    Visi draugai vezasi is viso ${totalWeight} kg. 
    Jie tures sumoketi ${cost} eur. uz bagaza. 
    Kiekvienas stovyklautojas vidutiniskai turejo ${averageWeightPerPerson} kg.
    ${numberOfCampersWithUnder10kg} stovyklautojai vezesi maziau nei 10kg.
    `)
    return {
        totalWeight: totalWeight,
        cost: cost,
        averageWeightPerPerson: averageWeightPerPerson,
        numberOfCampersWithUnder10kg: numberOfCampersWithUnder10kg,
    };
}

let bagazoMokestis = 5;
let bendrasSvoris = countTotalWeight([11, 5, 9, 15, 25], bagazoMokestis);
console.log(bendrasSvoris);

// Second Task

function countTotalTasks (tasks) {
    return tasks.reduce((a, b) => a + b, 0);
}

let solvedTasks = [7, 6, 6];
let totalTasks = countTotalTasks(solvedTasks);

console.log(`${solvedTasks.length} olimpiadoje dalyvave programuotojai issprende ${totalTasks} uzdaviniu`);

// Third Task

function findDoctorStatistics (pacientMinutes) {
    let totalMinutesPacients = 0;
    let numberOfVisitsOver20Min = 0;
    for (let pacientVisit of pacientMinutes) {
        totalMinutesPacients += pacientVisit;
        if (pacientVisit > 20) {
            numberOfVisitsOver20Min++;
        }
    }
    let averageMinutesPerPacient = totalMinutesPacients / pacientMinutes.length
    console.log(`
    Gydytojas vidutiniskai skiria vienam pacientui ${averageMinutesPerPacient}.
    Buvo ${numberOfVisitsOver20Min} pacientai, kuriu vizitai buvo ilgesni kaip 20 minuciu.
    `);
    return {
        averageMinutesPerPacient: averageMinutesPerPacient,
        numberOfVisitsOver20Min: numberOfVisitsOver20Min,
    };
}

findDoctorStatistics([18, 10, 10, 21]);

// Fourth Task

function findBusStatistics(busStatistics) {
    let totalPassengers = 0;
    let totalTravelTime = 0;
    let numberOfBussessUnder10Passangers = 0;
    for (let bus of busStatistics) {
        totalPassengers += bus["keleiviai"];
        totalTravelTime += bus["kelionesTrukmeVal"] * 60;
        totalTravelTime += bus["kelionesTrukmeMin"];
        if (bus["keleiviai"] < 10) {
            numberOfBussessUnder10Passangers++;
        }
    }
    let averageTravelTime = Math.round(totalTravelTime / busStatistics.length);
    console.log(`
    Is Vilniaus i Panevezi buvo pervezta ${totalPassengers} keleiviai.
    Kelioneje vienas autobusas vidutiniskai sugaista ${averageTravelTime}.
    ${numberOfBussessUnder10Passangers} autobusai su maziau nei 10 keleiviu.
    `);
    return {
        totalPassengers: totalPassengers,
        averageTravelTime: averageTravelTime,
        numberOfBussessUnder10Passangers: numberOfBussessUnder10Passangers,
    } 
}

let busStatistics = [
    {
        kelionesTrukmeVal: 1,
        kelionesTrukmeMin: 50,
        keleiviai: 17,
    },
    {
        kelionesTrukmeVal: 2,
        kelionesTrukmeMin: 5,
        keleiviai: 25,
    },
    {
        kelionesTrukmeVal: 1,
        kelionesTrukmeMin: 55,
        keleiviai: 20,
    },
]

console.log(findBusStatistics(busStatistics));

// Fifth Task

function countStrawberies(countOnFirstDay, dailyIncrease, numberOfDays) {
    let totalStrawberries = countOnFirstDay;

    for (let i = 0; i < numberOfDays; i++) {
        totalStrawberries += totalStrawberries + dailyIncrease;
    }
    return totalStrawberries;
}
console.log(`Prinko braskiu: ${countStrawberies(4, 5, 3)}`);

// Sixth Task

function countIcecream(startOfInterval, endOfInterval) {
    let countIcecream = 0;
    for (let i = startOfInterval; i <= endOfInterval; i++) {
        if (i % 6 == 0) {
            countIcecream++;
        }
    }
    return countIcecream;
}

console.log(`Reikalingas porciju skaicius: ${countIcecream(31, 62)}`);

// Seventh Task

function countDaysToReadBook (bookLength) {
    let days = 0;
    for (let i = bookLength; i > 0; i -= days) {
        days++;
    }
    let averagePerDay = bookLength / days;
    return {
        days: days,
        averagePerDay: averagePerDay,
    };
}

let tadasReading = countDaysToReadBook(17);
console.log(`
Tadas visa knyga perskaitys per ${tadasReading["days"]} dienas.
Tadas vidutiniskai per diena perskaite ${tadasReading["averagePerDay"]} skyrius (-iu)
`);
