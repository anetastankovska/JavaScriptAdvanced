// console.log("Hi");

// setTimeout(() => {
//     console.log("Hi from timeout");
// }, 2000);

// console.log("Bye");

function printName(name, callback) {
    console.log("Hello " + name);
    setTimeout(() => {
        callback();
    }, 2000);
}

// printName("Nikola", function () {
//     console.log("Im a simple callback");
// });


function first() {
    console.log("First")
}

function second() {
    console.log("Second");
    first();
}

function third() {
    console.log("Third");
    setTimeout(() => {
        second();
    }, 3000);
}

//third();

// 31 line
// after 3 seconds
// 26 line
// 22 line

function makeApiCall(callback) {
    let seconds = Math.floor(Math.random() * 10000);
    setTimeout(() => {
        console.log("Called after " + seconds + " seconds");
        callback();
    }, seconds);
}

// makeApiCall(() => {
//     console.log("CallBack from api call");
// });
// let i = 0;
// let interval = setInterval(() => {
//     i++;
//     console.log(i)
// }, 500);

document
    .getElementById('clear')
    .addEventListener('click', () => {
        clearInterval(interval);
    });

// let interval1 = setInterval(() => {
//     alert("Hello");
// }, 2000);

document
    .getElementById('clear-1')
    .addEventListener('click', () => {
        clearInterval(interval1);
    });




function makeCall(url, success, errorCallback) {
    $.ajax({
        url: url,
        success: function (response) {
            console.log('The reqeust was successfull');
            success(response);
        },
        error: function (error) {
            console.log('The reqeust was with error');
            errorCallback(error);
        }
    })
}


// makeCall("https://swapi.dev/api/people/1/", resposne => {
//     console.log(resposne.name);
//     console.log(resposne);
// }, error => console.log(error));

// makeCall("https://swapi.dev/api/people/2/", function (response) {
//     console.log(response.name);
//     console.log("Hello from starwars");
//     console.log(response.birth_year);
// }, function (error) {
//     console.log(error)
// });


function makeCall1(url, success, errorCallback, otherCallback) {
    $.ajax({
        url: url,
        success: function (response) {
            console.log('The reqeust was successfull');
            success(response, otherCallback);
        },
        error: function (error) {
            console.log('The reqeust was with error');
            errorCallback(error);
        }
    })
}

// seccess parameter
function print(result, callback) {
    console.log(result);
    callback();
}

// errorCallback parameter
function printError(error) {
    console.log(error);
}

// otherCallback parameter
function other() {
    console.log("The last jedi");
}

// makeCall1("https://swapi.dev/api/people/1/", print, printError, other);




// setTimeout(() => {
//     console.log("First");
//     setTimeout(() => {
//         console.log("Second");
//         setTimeout(() => {
//             console.log("Third");
//             setTimeout(() => {
//                 console.log("Fourth");
//                 setTimeout(() => {
//                     console.log("Fifth");
//                     setTimeout(() => {
//                         console.log("A");
//                     }, 2000);
//                     setTimeout(() => {
//                         console.log("B");
//                     }, 1800);
//                 }, 5000);
//             }, 500);
//         }, 1000);
//     }, 2000);
// }, 1000);



let div = document.getElementById('main');
let h3 = document.getElementById('h3');

let i = 20;
let intval = setInterval(() => {
    i += 5;
    // div.style.marginLeft = `${i}px`;    
    div.style.width = `${i}px`;    
}, 300);

let colorChange = false;
setInterval(() => {
    h3.style.color = colorChange ? "red" : "black";
    colorChange = !colorChange;
}, 100);