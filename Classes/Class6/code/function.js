function basicArithmeticOperations(a, b, artihmeticOperaion) {
    return artihmeticOperaion(a, b);
}

let result = basicArithmeticOperations(10, 5, function (num1, num2) {
    return num1 + num2;
});

let result1 = basicArithmeticOperations(10, 5, (a, b) => a - b);


function one(a) {
    let result = 0;

    return function (b) {
        result = a + b;

        return function(c) {
            result = result + c;

            return function (d) {
                result = result + d;

                return function (e) {
                    return result + e;
                }
            }
        }
    }
}

let result2 = one(5)(4)(3)(2)(1);

console.log(result2);

function showMessage(element, gender) {
    let greetMessage = `Welcome ${gender === 'm' ? "mr." : "mrs."} `; 
    return function (name) {
        element.innerText = greetMessage + name;
    }
}

let greetWithName = showMessage(document.getElementById('name'), 'm');

//greetWithName('Trajan');
//greetWithName('Nikola');

greetWithName('Bob');

function setOfFunctions() {
    return {
        sum: function (a, b) {
            return a + b;
        },
        multiply: (a, b) => a * b
    }
}

let arithmeticOperations = setOfFunctions();

let fnc = function () {
    return 3;
}