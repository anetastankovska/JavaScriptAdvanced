// function sayHello(name) {
//     console.log(`Hello ${name}`);
// }

// sayHello('Trajan');
// console.log(document); // not defined


// const say = require('./say');
// console.log(say.sayHello('Trajan'));
// console.log(say.sayBye('Nikola'));

// const { sayHello, sayBye } = require('./say'); //using destructuring
// console.log(sayHello('Trajan'));
// console.log(sayBye('Nikola'));


const txtService = require('./textService');

//txtService.addText('This is our first text added thru javascript.');
// txtService.addText('This is our first text added thru javascript123.');
// txtService.addText('This is our first text added thru javascript1234.');
// txtService.addText('This is our first text added thru javascript12345.');
// txtService.appendText('\nWe want to append this text to an existing txt file');
// txtService.appendText('\nWe want to append this text to an existing txt file');
// txtService.appendText('\nWe want to append this text to an existing txt file');


// console.log(txtService.readFile());

const jsonService = require('./readJsonFile');

let obj = {
    students: [
        {
            firstName: 'Trajan',
            lastName: 'Stevkovski'
        },
        {
            firstName: 'Nikola',
            lastName: 'Dalchevski'
        }
    ]
};

// jsonService.addData(obj);

// jsonService.appendData({
//     grades: [1, 2, 4, 5, 6]
// });


let studentsDB = jsonService.readData();
console.log(studentsDB);