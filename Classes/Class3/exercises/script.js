// let obj = {};

// obj.name = "Trajan";
// obj["lastName"] = "Stevkovski";

// let propertyName = "age";

// obj[propertyName] = 33;

// console.log(obj);


let inputCounter = 1;
document.getElementById("btn").addEventListener('click', function () {
    let input = document.createElement('input');
    input.type = 'text';
    input.name = `dynamic-${inputCounter}`;
    inputCounter++;
    document.getElementById('dynamic-inputs').append(input);
});

// One way
// document.getElementById('save').addEventListener('click', function () {
//     let inputs = document
//         .getElementById('dynamic-inputs')
//         .querySelectorAll('input');
//     let inputValues = {};
//     for (let input of inputs) {
//         inputValues[input.name] = input.value;
//     }
//     console.log(inputValues);
// });

document.getElementById('save').addEventListener('click', function () {
    let inputs = document
        .getElementById('dynamic-inputs')
        .querySelectorAll('input');
    let inputValues = [];
    for (let input of inputs) {
        let obj = {};
        obj[input.name] = input.value;
        inputValues.push(obj);
    }

    for (let i = 0; i < inputValues.length; i++) {
        let element = inputValues[i];
        let li = document.createElement('li');
        li.innerText = element[`dynamic-${i + 1}`];
        document.getElementById('result').append(li);
    }
    console.log(inputValues);
});