// naudojant visus 3 būdus (atskirai, pirma per kontruktoriaus funkciją, tuomet per ES6 klases, galiausiai per object.create):

// 1. sukurti klasę 'Vehicle', kuri turi 2 parametrus: wheelCount, speed(km/h), 
// 2. sukurti metodą addSpeed kuris prideda prie esamo speed greičio 10km/h
// 3. sukurti metodą break kuris nuima nuo esamo greičio 5(km/h)

function Vehicle(wheelCount, speed) {
    this.wheelCount = wheelCount;
    this.speed = speed;
}

Vehicle.prototype.addSpeed = function() {
    this.speed += 10;
}

Vehicle.prototype.break = function() {
    this.speed -= 5;
}

// 4. sukurti klases 'car' ir 'bicycle' kurios paveldi esamus 'vehile' metodus ir parametrus

function Car(wheelCount, speed) {
    Vehicle.call(this, wheelCount, speed);
}

function Bicycle(wheelCount, speed) {
    Vehicle.call(this, wheelCount, speed);
}

Car.prototype = Object.create(Vehicle.prototype);
Bicycle.prototype = Object.create(Vehicle.prototype);

Car.prototype.blink = function() {
    console.log("blink blink");
}

Bicycle.prototype.beep = function() {
    console.log("beep beep");
}

// 5. 'car' pridėti metodą 'blink' kuris konsolėje atspausdina 'blink blink'
// 6. 'bicycle' pridėti metodą 'beep' kuris konsolėje atsapaudina 'beep beep'


const firstVehicle = new Vehicle(4, 100);
console.log(firstVehicle);
firstVehicle.addSpeed();
console.log(firstVehicle);
firstVehicle.break();
console.log(firstVehicle);

const firstCar = new Car(4, 60);
console.log(firstCar);
firstCar.addSpeed();
console.log(firstCar);
firstCar.break();
console.log(firstCar);
firstCar.blink();

const firstBike = new Bicycle(2, 15);
console.log(firstBike);
firstBike.addSpeed();
console.log(firstBike);
firstBike.break();
console.log(firstBike);
firstBike.beep();
