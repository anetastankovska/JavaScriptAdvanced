function callBackHell(showData) {
    let error = null;
    setTimeout(() => {
        console.log("one");
        if (error) {
            // do something
        }
        setTimeout(() => {
            console.log("two");
            if (error) {
                // do something
            }
            setTimeout(() => {
                console.log('three');
                if (error) {
                    // do something
                }
                setTimeout(() => {
                    console.log('four');
                    if (error) {
                        // do something
                    }
                    setTimeout(() => {
                        console.log('five');
                        if (error) {
                            // do something
                        }
                        setTimeout(function () {
                            console.log('six');
                            if (error) {
                                // d something
                            }
                            setTimeout(function () {
                                console.log('last');
                                if (error) {
                                    // do something
                                }
                                showData();
                            }, 1000);
                        }, 2000);
                    }, 1000);
                }, 2000);
            }, 1000);
        }, 2000);
    }, 1000);
}

function showData() {
    console.log("Hello")
}

// console.log('zero');
// callBackHell(showData);
// console.log("after callback");

let delay = function (ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let isResolved = Math.random() < 0.9;
            return isResolved ? resolve("resolved") : reject('You have bad luck');
            //resolve("resolved");
        }, ms);
    });
}

// console.log('zero');
// delay(1000)
//     .then(data => {
//         console.log('one', data);
//         return delay(2000);
//     })
//     .then(data => {
//         console.log('two', data);
//         return delay(1000);
//     })
//     .then(data => {
//         console.log('three', data);
//         return delay(1100);
//     })
//     .then(data => {
//         console.log('four', data);
//         return delay(2000);
//     })
//     .then(data => {
//         console.log('five', data);
//         return delay(1000);
//     })
//     .then(data => {
//         console.log('six', data);
//         return delay(1500);
//     })
//     .then(data => {
//         console.log('last', data);
//         showData();
//     })
//     .catch(error => console.log(error))
//     .finally(() => console.log("This will always be executed"));

// let delay1 = function (ms, text) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(text);
//         }, ms);
//     });
// }

// console.log('zero');
// delay1(1000, 'one')
//     .then(data => {
//         console.log(data);
//         return delay1(2000, 'two');
//     })
//     .then(data => {
//         console.log(data);
//         return delay1(1000, 'three');
//     })
//     .then(data => {
//         console.log(data);
//         return delay1(1100, 'four');
//     })
//     .then(data => {
//         console.log(data);
//         return delay1(2000, 'five');
//     })
//     .then(data => {
//         console.log(data);
//         return delay1(1000, 'six');
//     })
//     .then(data => {
//         console.log(data);
//         return delay1(1500, 'last');
//     })
//     .then(data => {
//         console.log(data);
//         showData();
//     })


// function abc(text) {
//     return new Promise((resolve, reject) => {
//         resolve(text);
//     })
// }

// abc('abc').then(data => console.log(data));

function getAllEvenNumberFromTo(from, to) {
    return new Promise((resolve, reject) => {
        if (from > to) {
            reject("Please enter valid numbers");
        }

        let evenNumbers = [];
        for (let i = from; i <= to; i++) {
            if (i % 2 === 0) {
                evenNumbers.push(i);
            }
        }
        resolve(evenNumbers);
    });
}

let allEvenNumbersPromise = getAllEvenNumberFromTo(10, 10000);

// lots of code
// lots of code
// lots of code
// lots of code
// lots of code
// lots of code
// lots of code
// lots of code
// lots of code
// lots of code
// lots of code
// lots of code
// lots of code
// lots of code
// lots of code
// lots of code
// lots of code
// lots of code
// lots of code
// lots of code
// lots of code
// lots of code
// lots of code
// lots of code
// lots of code
// lots of code
// lots of code
// lots of code
// lots of code
// lots of code
// lots of code
// lots of code
// lots of code
// lots of code
// lots of code
// lots of code
// lots of code
// lots of code
// lots of code
// lots of code
    

allEvenNumbersPromise
    .then(data => console.log(data))
    .catch(error => console.log(error));