/* Generating arrays
1. Generate an array that has all the numbers that are divisible by 3 from 1 to 1000
2. Generate an array that has all the even numbers that are divisible by 4 from 1 to 1000
3. Generate an array that has all the numbers that end with the digit 1 from 1 to 1000 */

//1. First way
function divisibleByThree () {
    let arr = [];
    for (let element = 1; element <= 1000; element++) {
        if (element % 3 === 0) {
            arr.push(element);
        }
    }
    console.log(arr);
    return arr;
}

divisibleByThree();

//1. Second way
function divisibleByThree1 () {
    let element = 3;
    let arr = [];
    while (element <= 1000) {
        arr.push(element);
        element += 3;
    }
    console.log(arr);
    return arr;
}

divisibleByThree1 ()


//2. First way / I use % 4 because all the elements that are divisible by 4 are divisible by 2 too
function evenNumbers () {
    let arr = [];
    for (let element = 2; element <= 1000; element++) {
        if (element % 4 === 0) {
            arr.push(element);
        }
    }
    console.log(arr);
    return arr;
}

evenNumbers();

//2. Second way
function evenNumbers1 () {
    let element = 4;
    let arr = [];
    while (element <= 1000) {
        arr.push(element);
        element += 4;
    }
    console.log(arr);
    return arr;
}

evenNumbers1();

//3. 
function endsWithOne () {
    let element = 1;
    let arr = [];
    while (element <= 1000) {
        arr.push(element);
        element += 10;
    }
    console.log(arr);
    return arr;
}

endsWithOne();