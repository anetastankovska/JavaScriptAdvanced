// function Vehicle1(id, name, batch, price) {
//     this.id = id;
//     this.name = name;
//     this.batch = batch;
//     this.price = price;

//     this.printVehicle = function () {
//         console.log(`${this.id}. ${this.name}`);
//     }
// }

// let vehicle1 = new Vehicle1(1, 'Yugo', '1A2D', 100);

// function WheeledVehicle1(id, name, batch, price, wheels) {
//     Object.setPrototypeOf(this, new Vehicle1(id, name, batch, price));
//     this.wheels = wheels;
// }

// let wheeledVehicle1 = new WheeledVehicle1(2, '101', 'ABC2', 200, 4);

// console.log(vehicle1);
// console.log(wheeledVehicle1);

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
}

let car = new Car(3, 'Fico', 'AZ1', 200, 4, 2, true);
console.log(car);

// class BaseService {
//     constructor() { }
    
//     printArray(array) {
//         array.forEach(element => {
//             console.log(element);
//         });
//     }
// }

// class BookService extends BaseService {
//     constructor() {
//         super();
//      }

//     method() {

//     }

//     method1() {

//     }

//     method2() {

//     }
// }

// let bookService = new BookService();
// bookService.printArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);


class BookDatabase {
    constructor() {
        this.books = [];
    }

    generateBooks() {
        for (let index = 0; index < 10; index += 1) {
            this.addBook(new Book(`Book${index}`, `${index % 2 === 0 ? 'B': 'A'}uthor${index}`, 1990 + (index * 2)));
        }
    }

    getBooks() {
        return this.books;
    }

    getBookById(id) {
        for (let index = 0; index < this.books.length; index += 1){
            let book = this.books[index];
            if (book.id === id) {
                return book;
            }
        }
        return null;
    }

    addBook(book) {
        let oldLength = this.books.length; // 10
        this.books.push(book); // 11
        return oldLength !== this.books.length; // 10 !== 11
    }

    deleteBook(id) {
        let indexForRemoval = -1;
        
        let index = 0;
        while (index < this.books.length) {
            let book = this.books[index];
            if (book.id === id) {
                indexForRemoval = index;
                break;
            }

            index++;
        }

        if (indexForRemoval === -1) {
            return null;
        }
        let deletedBooks = this.books.splice(indexForRemoval, 1);
        return deletedBooks[0];
    }
}

let bookDatabaseEnglish = new BookDatabase();
let bookDatabaseJapan = new BookDatabase();


class Calculator {
    constructor() { }

    start() {
        // the whole logic for the calculator;
    }
    // all the methods needed for the calculator
}

let calculator = new Calculator();
calculator.start();