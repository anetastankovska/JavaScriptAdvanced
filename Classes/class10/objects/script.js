const apiSecrets = {
    apiKey: 'old value',
    userToken: '',
    userSecrets: '',
    encoding: '',
    font: ''
}

Object.freeze(apiSecrets);

apiSecrets.apiKey = 'new value';
delete apiSecrets.font;
//console.log(apiSecrets);


let obj = {
    firstName: 'Trajan',
    lastName: 'Stevkovski',
    age: 33,
    academy: 'Web Development',
    courses: ['javascript basic', 'javascript advanced', 'html', 'css']
}

// for (let val of obj.courses) {
//     console.log(val);
// }

// for (let key in obj) {
//     console.log(key);
//     console.log(obj[key]);
// }

let { firstName, lastName } = obj; // destructuring object;
let [first, second] = obj.courses; // destructuring array;

// Object.entries(); // -> [ ['firstName', 'Trajan'], ['lastName', 'Stevkovski'] ];

// for (let [key, value] of Object.entries(obj)) {
//     console.log(`Key: ${key}, Value: ${value}`);
// }

// for (let key of Object.keys(obj)) {
//     console.log(key);
// }

// for (let value of Object.values(obj)) {
//     console.log(value);
// }

// console.log('=======================');
// // this will not work
// for (let a of obj) {
//     console.log(a);
// }


function fibonacci(number) {
    
    if (number <= 1) {
        return 1;
    }

    return fibonacci(number - 1) + fibonacci(number - 2);
}

// console.log(new Date());
// let firstResult = fibonacci(45);
// console.log(firstResult);
// console.log(new Date());

let results = {
    0: 1,
    1: 1
};

function fibonacci1(number) {
    
    if (results[number]) {
        return results[number];
    }

    let result = fibonacci1(number - 1) + fibonacci1(number - 2);
    results[number] = result;
    return result;
}

// console.log(new Date());
// let secondResult = fibonacci1(45);
// console.log(secondResult);
// console.log(results);
// console.log(new Date());