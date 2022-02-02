function func() {
    console.log("Hello from function");
};

// func();

(function a() {
    console.log("Hello from self invoked function");
})();

let result = (function sum(a, b) {
    return a + b;
})(10, 2);

//console.log(result); // -> 12

(() => {
    let a = 3;
    let b = 5;
    let c = a + b;
    console.log(`Result is: ${c}`);
})();

let multiply = (num1, num2) => num1 * num2;

let result1 = multiply((function (num1, num2) {
    return num1 + num2;
})(5, 5), 7);

//console.log(result1);
let result2 = multiply((function (num1, num2) {
    return num1 + num2;
})(), 7);
//console.log(result2);


let idGenerator = (function () {
    let id = 0;

    return function () {
        id++;
        return id;
    }
})();

console.log(idGenerator);

// for (let i = 0; i < 1000; i++) {
//     console.log(idGenerator());
// }