let func = function () {
    console.log("Hello");
};

//console.log(func);
func();

let array = [1, 2, 3, function () { return 2 + 2 }, 5, 6, 7];
//console.log(array[3]());

let anonymousFunc = function (num1, num2, calculation) {
    
    // input parameters
    // num1 = 1;
    // num2 = 2;
    // calculation = function (num1, num2) {
    //     return num1 + num2;
    // };

    // console.log(num1); // -> number
    // console.log(num2); // -> number
    // console.log(calculation); // -> function
    let result = calculation(num1, num2);
    return result;
};

let result1 = anonymousFunc(1, 2, function (num1, num2) {
    return num1 + num2;
});
console.log(result1);

let num1 = 5;
let num2 = 3;
let calculation = function (num1, num2) {
    return num1 - num2;
}
let result2 = anonymousFunc(num1, num2, calculation);
console.log(result2);


let basicArithmeticOperations = function (num1, num2, calculation) {
    let result = calculation(num1, num2);
    return result;
    // return calculation(num1, num2);
}

basicArithmeticOperations(10, 5, function (num1, num2) {
    return num1 + num2;
});

basicArithmeticOperations(10, 5, function (num1, num2) {
    return num1 - num2;
});

basicArithmeticOperations(10, 5, function (num1, num2) {
    return num1 * num2;
});

basicArithmeticOperations(10, 5, function (num1, num2) {
    return num1 / num2;
});

basicArithmeticOperations(10, 5, function (num1, num2) {
    return num1 % num2;
});

basicArithmeticOperations(10, 5, function (a, b) {
    return (a + b + a + b + 3 + 8) / 2;
});

basicArithmeticOperations(10, 5, function (a, b) {
    return a < b;
});

basicArithmeticOperations(10, 5, function (a, b) {
    let obj = {
        name: "Trajan",
        age: 33
    };
    let array = [1, 2, 3, 44, 5, 6];
    let c = 10;
    return a + b + c + obj.name + array[4];
});

basicArithmeticOperations(10, 5, function (parametarEdenKojKeBideBroj, vtoriotParametar) {
    return parametarEdenKojKeBideBroj < vtoriotParametar;
});

function sum(num1, num2) {
    return num1 + num2;
}

basicArithmeticOperations(10, 5, sum);

// eden dva tri se plaholderi za vrednostite sto ke pristignat od nadvor
function a(eden, dva, tri) {

}