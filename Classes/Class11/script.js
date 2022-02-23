// let numbersArray = [1, 2, 3, 4, 5];

// console.log(numbersArray);


// let obj = {};

// console.log(obj);

// function Vehicle(id, name, batchNo, price) {
//     this.id = id;
//     this.name = name;
//     this.batchNo = batchNo;
//     this.price = price;
//     this.company = 'Move.Inc';
//     this.printVehicle = function () {
//         console.log(`${this.id}. ${this.name}, Batch: ${this.batchNo}, Price: ${this.price}`);
//     }
// }

// let wheeledVehicle = Object.create(new Vehicle(12, "Yugo", "43AB", 500));
// wheeledVehicle.drive = function () {
//     console.log("Wroom!");
// };

// let car = Object.create(wheeledVehicle);
// car.fuelTank = 32;
// console.log("======== " + car.name + " =============");
// car.drive();
// car.printVehicle();

// console.log("wheeledVehicle", wheeledVehicle);
// console.log("CAR", car)

// let wheeledVehicle1 = new Vehicle(13, "Stojadin", "12BDS", 600);
// let wheeledVehicle2 = {};
// wheeledVehicle2.__proto__ = new Vehicle(15, "Mazda", "331s", 1000);

// console.log(wheeledVehicle1);
// console.log(wheeledVehicle2);

// console.log(wheeledVehicle2.name);
// console.log(wheeledVehicle2.__proto__.name);


// function Vehicle(id, name, batchNo, price) {
//     this.id = id;
//     this.name = name;
//     this.batchNo = batchNo;
//     this.price = price;
//     this.company = 'Move.Inc';
//     this.printVehicle = function () {
//         console.log(`${this.id}. ${this.name}, Batch: ${this.batchNo}, Price: ${this.price}`);
//     }
// }

// function WheeledVehicle(wheels, name) {
//     this.wheels = wheels;
//     this.name = name;
//     this.drive = function () {
//         console.log(`Driving on ${this.wheels} wheels!`);
//     }
// }
// WheeledVehicle.prototype = new Vehicle();

// let car = new WheeledVehicle(4, 'Yugo');
// car.price = 1000;
// car.id = 1;
// car.batchNo = "111a";

// car.printVehicle();
// console.log(car);

// WheeledVehicle.prototype.stop = function () {
//     console.log(`The vehicle ${this.name} stopped`);
// }

// car.stop();
// car.__proto__.name = "Some name"; // changed the name of inherited constructor function



function Vehicle(id, name, batchNo, price) {
    this.id = id;
    this.name = name;
    this.batchNo = batchNo;
    this.price = price;
    this.company = 'Move.Inc';
    this.printVehicle = function () {
        console.log(`${this.id}. ${this.name}, Batch: ${this.batchNo}, Price: ${this.price}`);
    }
}

function WheeledVehicle(id, name, batchNo, price, wheels) {
    this.__proto__ = new Vehicle(id, name, batchNo, price);
    this.wheels = wheels;
    this.drive = function () {
        console.log(`Driving on ${this.wheels} wheels!`);
    }
}

function Motorcycle(id, name, batchNo, price, wheels, color) {
    Object.setPrototypeOf(this, new Vehicle(id, name, batchNo, price));
    this.wheels = wheels;
    this.color = color;
    this.driveOnOneWheel = function () {
        console.log("Zoom");
    }
}

function AirPlane(name, batchNo, price, wheels, color) {
    Object.setPrototypeOf(this, new Vehicle(5, name, batchNo, price));
    this.wheels = wheels;
    this.color = color;
}

Motorcycle.prototype.getMotorcycleType = function () {
    console.log("Racing");
}

let wheeledVehicle3 = new WheeledVehicle(1, 'Pezo', '123ABC', 200, 4);
console.log(wheeledVehicle3);

let motorcycle = new Motorcycle(1, 'Yamaha', "z222", 1000, 2, 'red');
console.log(motorcycle); 