/* Clean arrays
1. Create a function that cleans an array of any values and leaves only STRINGS
2. Create a function that cleans an array of any values and leaves only NUMBERS
3. Create a function that cleans undefined, null, NaN, and "" and leaves all other values
Test arrays: 
let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22]; */

//1. By creating new array
function cleanAllButString (array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof(array[i]) === "string") {
            newArray.push(array[i]);
        }
    }
    console.log(newArray);
    return newArray;
}

cleanAllButString ([true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22])

//2. By creating new array
function cleanAllButNumbers (array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof(array[i]) === "number" ) {
            newArray.push(array[i]);
        }
    }
    console.log(newArray);
    return newArray;
}

cleanAllButNumbers ([true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22])


//3. First way
function cleanAll1 (array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        console.log(typeof(array[i]));
        if (isNaN(array[i])) {
            continue
        }
        if (array[i] === null) {
            continue;
        }
        if (array[i] === undefined) {
            continue;
        }
        newArray.push(array[i]);
    }
    console.log(newArray);
    return newArray;
}

cleanAll1 ([true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22])

//3. Second way
function cleanAll (array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] || array[i] === false) {
            newArray.push(array[i])
        }
    }
    console.log(newArray);
    return newArray;
}

cleanAll ([true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22])