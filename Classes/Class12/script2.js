class Vehicle {
    constructor(id, name, batch, price, showLog = false) {
        this.id = id;
        this.name = name;
        this.batch = batch;
        this.price = price;
        this.company = 'Move.Inc';
        if (showLog) {
            console.log("Im the constructor of Vehicle!");
        }
    }

    printVehicle() {
        console.log(`${this.id}. ${this.name}`);
    }    
}

let vehicle = new Vehicle(1, 'Yugo', '1A2D', 100);
console.log(vehicle);
vehicle.printVehicle();

class WheeledVehicle extends Vehicle {
    constructor(id, name, batch, price, wheels) {
        super(id, name, batch, price, true);
        console.log("Im the constructor of WheeledVehicle!");
        this.wheels = wheels;
    }
}

let wheeledVehicle = new WheeledVehicle(2, '101', 'ABC1', 200, 4);
console.log(wheeledVehicle);

class Car extends WheeledVehicle {
    constructor(id, name, batch, price, wheels, doors, ac) {
        super(id, name, batch, price, wheels);
        console.log("Im the constructor of Car!");
        this.doors = doors;
        this.ac = ac;
        if (ac) {
            this.price += 400;
        }
    }

    static addAc(car) {
        if (!car.ac) {
            car.ac = true;
            car.price += 400;
            console.log(`The car has AC now and it costs ${car.price}`);
        } else {
            console.log('The car already has AC');
        }
    }
}

let car = new Car(3, 'Fico', 'AZ1', 200, 4, 2, true);
console.log(car);
console.log('=--------------------------')
Car.addAc(car);
console.log('=--------------------------')


class ElectricCar extends Car {
    constructor(id, name, batch, price, wheels, doors, owner) {
        super(id, name, batch, price, wheels, doors, true);
        this.owner = owner;
        this.something = 'a';
    }

    get owner() {
        console.log("We are getting the name of the owner. Please wait....");
        return 'The car is owned by: ' + this._owner;
    }

    set owner(ownerName) {
        console.log("We are setting the name of the owner. Please wait....");
        ownerName.length > 1 ? this._owner = ownerName : this._owner = null;
    }

    get something() {
        return 'Always returning something';
    }

    set something(value) {
        this._something = 'I dont care about the value';
    }

    // // default getter and setter
    // get owner() {
    //     return this._owner;
    // }

    // set owner(ownerName) {
    //     this._owner = ownerName
    // }
}

let electricCar = new ElectricCar(5, 'Tesla', 'AS12', 150, 4, 3, 'Trajan');
console.log(electricCar);

electricCar.owner = 'Nikola';
console.log(electricCar.owner);
let carOwner = electricCar.owner;
console.log(carOwner);

electricCar.owner = 'a';
console.log(electricCar.owner);

console.log(electricCar.something);



class Helpers {
    static printArray(arr) {
        arr.forEach(element => {
            console.log(element);
        });
    }

    static printString(str) {
        console.log(str);
    }

    static countAllVowelsInString(str) {
        let strArr = str.split('');
        let vowels = ['a', 'e', 'i', 'o', 'u'];
        
        return strArr.filter(char => vowels.includes(char.toLowerCase())).length;
    }
}

Helpers.printArray([1, 2, 3, 4]);
Helpers.printString('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
console.log(Helpers.countAllVowelsInString('abcedgipoasdu'));

function checkIfElectric(input) {
    if (input instanceof ElectricCar) {
        // do something
    }
    return true;
}