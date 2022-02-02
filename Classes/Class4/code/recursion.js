function sumTo(n) {
    let sum = 0;
    while (n >= 0) {
        sum += n;
        n -= 1;
    }

    return sum;
}

console.log(sumTo(10));

function sumToRecursion(n) {
    if (n === 0) {
        return 0;
    }

    return n + sumToRecursion(n - 1);
}

console.log(sumToRecursion(10));


function fibonacci(n) {
    let a = 1;
    let b = 0;
    let temp;

    while (n >= 0) {
        temp = a;
        //console.log("temp", temp);
        a = a + b;
        //console.log("a", a);
        b = temp;
        //console.log("b", b);
        n--;
        //console.log("n", n);
    }

    return b;
}

console.log(fibonacci(10));

function fibonacciRecursive(n) {
    if (n <= 1) {
        return 1;
    }

    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
console.log(fibonacciRecursive(10));

function factorial(n) {
    let sum = 1;
    
    while (n > 0) {
        sum *= n;
        n--;
    }

    return sum;
}

console.log(factorial(4));

function factorialRecursive(n) {
    if (n === 0) {
        return 1;
    }

    return n * factorialRecursive(n - 1);
}

console.log(factorialRecursive(4));