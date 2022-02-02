let x = 5;
x = 10;

// var y = 10;
// var y = "Trajan";
// console.log(y);

let ten = 10; // global scope
function sumPlusOne(num1, num2) {
    let one = 1; // function scope variable
    console.log(num1 + num2 + one);

    function add5(number) {
        console.log(one);
        let insideFunc = 100;
        console.log(number + 5);
    }

    // console.log(insideFunc); // Will not work
    add5(one);

    function add10(number) {
        console.log(number + ten);
    }

    add10(ten);
}

sumPlusOne(1, 2);