let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

function flatMatrixToArray(array, currentElement) {
    array.push(...currentElement);
    return array;
}

function sumOfMatix(sum, currentElement) {
    return currentElement.reduce((prev, curr) => prev += curr, sum);
}

let sumaOfMatix = matrix.reduce(sumOfMatix, 0);
//console.log("Sum of matrix", sumaOfMatix);

let array = matrix.reduce(flatMatrixToArray, []);
//console.log(array);

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

 // 1, [2, 3, 4, 5, 6, 7, 8] in 2 variables

// let first = arr.shift();
// let rest = arr;

// console.log("FIRST", first);
// console.log("REST", rest);

// spread operator

let [firstElement, secondElement, ...tail] = arr;
let [a, b, c, d, e, f, g, h] = arr;
// console.log(a, b, c, d, e, f, g, h);

// console.log("firstElement", firstElement);
// console.log("secondElement", secondElement);
// console.log("tail", tail);

let arrA = [1, 2, 3, 4];
let arrB = [5, 6, 7, 8];
let arrC = arrA.concat(arrB);
let arrD = [...arrA, ...arrB];

// console.log("arr// D", arrD);

let obj = {
    firstName: "Trajan",
    lastName: "Stevkovski"
};

let person = {
    age: 33,
    gender: "Male"
}

let combined = {
    ...obj,
    ...person
}
// console.log("combined", combined);

// destructuring

let firstName1 = combined.firstName;
let lastName1 = combined.lastName;

let { firstName, lastName } = combined;
// console.log("FirstName", firstName);
// console.log("LastName", lastName);

let { firstName: ime, lastName: prezime } = combined;
// console.log("Ime: " + ime + " Prezime: " + prezime);



function reccursiveSumOfArray(array) {
    if (array.length === 0) {
        return 0;
    }

    let [first, ...rest] = array;

    return first + reccursiveSumOfArray(rest);
}

let result = reccursiveSumOfArray([1, 2, 3, 4, 5]);
//console.log(result);


function printName({ firstName, lastName }) {
    console.log(`Hello ${firstName} ${lastName}`);
}

//printName(combined);

// null coalescing operator
// let x = null ?? 3;
// let z = 5 ?? 3;