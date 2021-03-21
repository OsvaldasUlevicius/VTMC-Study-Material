// naudojant visus 3 būdus (atskirai, pirma per kontruktoriaus funkciją, tuomet per ES6 klases,
// galiausiai per object.create):

// 1. sukurti klasę 'Vehicle', kuri turi 2 parametrus: wheelCount, speed(km/h), 
// 2. sukurti metodą addSpeed kuris prideda prie esamo speed greičio 10km/h
// 3. sukurti metodą break kuris nuima nuo esamo greičio 5(km/h)

class Vehicle {

    constructor(wheelCount, speed) {
        this.wheelCount = wheelCount;
        this.speed = speed;
    }

    addSpeed() {
        this.speed += 10;
    }

    break() {
        this.speed -= 5;
    }
}

// 4. sukurti klases 'car' ir 'bicycle' kurios paveldi esamus 'vehile' metodus ir parametrus

class Car extends Vehicle {

    constructor(wheelCount, speed) {
        super(wheelCount, speed);
    }

    blink() {
        console.log("blink blink");
    }
}

class Bicycle extends Vehicle {

    constructor(wheelCount, speed) {
        super(wheelCount, speed);
    }

    beep() {
        console.log("beep beep");
    }
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
