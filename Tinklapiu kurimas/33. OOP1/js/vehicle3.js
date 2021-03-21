// naudojant visus 3 būdus (atskirai, pirma per kontruktoriaus funkciją, tuomet per ES6 klases, galiausiai per object.create):

// 1. sukurti klasę 'Vehicle', kuri turi 2 parametrus: wheelCount, speed(km/h), 
// 2. sukurti metodą addSpeed kuris prideda prie esamo speed greičio 10km/h
// 3. sukurti metodą break kuris nuima nuo esamo greičio 5(km/h)

const Vehicle = {
    addSpeed() {
        this.speed += 10;
    },
    break() {
        this.speed -= 5;
    }
}



// 4. sukurti klases 'car' ir 'bicycle' kurios paveldi esamus 'vehile' metodus ir parametrus

const Car = Object.create(Vehicle);

Car.par = function(wheelCount, speed) {
    Vehicle.par.call(this, wheelCount, speed);
}

Car.blink = function() {
    console.log("blink blink");
}
const Bicycle = Object.create(Vehicle);

Bicycle.par = function(wheelCount, speed) {
    Vehicle.par.call(this, wheelCount, speed);
}

Bicycle.beep = function() {
    console.log("beep beep");
}

// 5. 'car' pridėti metodą 'blink' kuris konsolėje atspausdina 'blink blink'
// 6. 'bicycle' pridėti metodą 'beep' kuris konsolėje atsapaudina 'beep beep'

const firstVehicle = Object.create(Vehicle);
firstVehicle.wheelCount = 4;
firstVehicle.speed = 100;
console.log(firstVehicle);
firstVehicle.addSpeed();
console.log(firstVehicle);
firstVehicle.break();
console.log(firstVehicle);

const firstCar = Object.create(Car);
firstCar.wheelCount = 4;
firstCar.speed = 60;
console.log(firstCar);
firstCar.addSpeed();
console.log(firstCar);
firstCar.break();
console.log(firstCar);
firstCar.blink();

const firstBike = Object.create(Bicycle);
firstBike.wheelCount = 2;
firstBike.speed = 15;
console.log(firstBike);
firstBike.addSpeed();
console.log(firstBike);
firstBike.break();
console.log(firstBike);
firstBike.beep();
