let func = function (num) {
    return num + 10;
};

let funcArrow = num => num + 10;

// console.log(func(10));
// console.log(funcArrow(10));

let funcArrow2 = (num1, num2) => num1 + num2;
// console.log(funcArrow2(10, 5));

let multiply = (num1, num2) => {
    let result = num1 * num2;
    return result;
};

// console.log(multiply(10, 5));

let basicArithmeticOperations = function (num1, num2, calculation) {
    return calculation(num1, num2);
};

basicArithmeticOperations(10, 5, function (num1, num2) {
    return num1 + num2;
});

basicArithmeticOperations(10, 5, (num1, num2) => num1 + num2);

let randomFunc = () => console.log("Hello from arrow function");
// randomFunc();

let a = (a, b) => a + b; 

// document.getElementById().addEventListener('click', () => {
    
// });

// arrow function definitions

// without params
let m = () => console.log("Without params");

// with one param
let n = param1 => console.log("Param1", param1);

// with more then one param
let b = (a, b, c) => console.log("Mulitiple params", a, b, c);

// with more then one line of code
let v = () => {
    // lots of code
    console.log("More that one line");
}

let abc = () => console.log(this);
let obj = {
    arrow: () => console.log(this)
}

// console.log('In object');
// obj.arrow();
// console.log('on gobal scope')
// abc();