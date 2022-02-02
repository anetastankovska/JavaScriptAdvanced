/* Exercise 1
Make 3 functions:
1.	Function that takes a number through a parameter and returns how many digits that number has
2.	Function that takes a number through a parameter and returns if its even or odd
3.	Function that takes a number through a parameter and returns if its positive or negative
Create a function that takes a number through a parameter and calls all three functions for the number that was passed. It should show the results in the console.
Ex:
Code: getNumberStats(-25); Console: 2 Digits, Odd, Negative
*/

// 1.
function countDigits (number) {
    let counter = 1;
    if (number < 0) {
        number = - number;
    }
    while (number / 10 >= 1) {
        let temp = number / 10;
        number = temp;
        counter +=1;
    }
    console.log(counter);
    return counter;
}

// countDigits (-12309);

//2.
function oddOrEven (number) {
    if (number % 1 != 0) {
        number = Math.floor(number);
    }
    if (number % 2 === 0) {
        console.log("even")
        return `The number ${number} is even`;
    } else {
        console.log("odd");
        return `The number ${number} is odd`
    }
}

// oddOrEven(-33);

//3.
function positiveOrNegative (number) {
    if (number > 0) {
        console.log(`The number ${number} is positive`);
        return `The number ${number} is positive`;
    } else if (number < 0) {
        console.log(`The number ${number} is negative`);
        return `The number ${number} is negative`;
    } else {
        console.log(`The number ${number} is neither positive or negative`);
        return `The number ${number} is neither positive or negative`;
    }
}

// positiveOrNegative(-100);
// positiveOrNegative(0);


// First way
let finalFunction = function (number) {
    console.log(`${countDigits(number)}, ${oddOrEven(number)}, ${positiveOrNegative(number)}`);
}

finalFunction (4321);


// Second way (by wrapping all the function into anonimous functions so that we can add additional logic if needed)
let anonimousFunction1 = function (number) {

    let result = countDigits(number);
    return result;
}

let anonimousFunction2 = function (number) {
    let result = oddOrEven(number);
    return result;
}

let anonimousFunction3 = function (number) {
    let result = positiveOrNegative(number);
    return result;
}

let finalFunction1 = function (number) {
    console.log(`${anonimousFunction1(number)}, ${anonimousFunction2(number)}, ${anonimousFunction3(number)}`);
}

finalFunction1 (1234);








