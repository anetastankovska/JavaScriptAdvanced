/* Exercise 2
Create 2 variables with arrow functions.
1.	First arrow function will accept two parameters, one for element and one for color. The function should change the given element text color with the color given from the second color parameter. If no parameter is passed for color, the default value is black.
2.	Second arrow function will accept two parameters, one for element and one for textSize. The function should change the given element text size to the number given from the second textSize parameter. If no parameter is passed for textSize, the default value is 24.
Create an HTML document with two inputs, a button and an h1 header with some text. The first input should be for text size and the second for color. When the button is clicked the h1 header should change according to the input values ( change size as the first input value and color as the second input value ). Use the functions that we declared earlier and use arrow function for the event listener of the button.
Ex:
**Input1: ** Person enters 28 **Input2: ** Person enters red **Result: ** The h1 text should change to size 28 and color red
*/

let color = (element, color = "green") => {
    return element.style.color = color;
}

let font = (element, fontSize = "24px") => {
    return element.style.fontSize = fontSize;
}


let h1Element = document.querySelector("h1");
let btnElement = document.querySelector("button");
let colorInput = document.getElementById("color");
let fontInput = document.getElementById("font-size");
let statusElement = document.querySelector("p");

// REGULAR FUNCTIONS
// btnElement.addEventListener('click', () => {
//     color(h1Element, "red");
//     font(h1Element, "50px");

// });


//ANONIMOUS FUNCTION WITH GIVEN PARAMETERS
let anonimousFunction =  (element, textColor = "green", fontSize = "24px") => {
    color (element, textColor);
    font (element, fontSize);
};

// btnElement.addEventListener('click', () => {
//     anonimousFunction (h1Element, undefined, "60px");
// });

function showMessage (msg) {
    return msg;
}

btnElement.addEventListener('click', () => {
    statusElement.innerText = "";
    let textColor = colorInput.value;
    if (textColor === "") {
        textColor = "green"
    }
    let fontSize = fontInput.value;
    if (fontSize === "") {
        fontSize = "24px"
    }
    anonimousFunction (h1Element, textColor, fontSize);

    if (h1Element.style.color != textColor) {
        statusElement.innerText += showMessage("Wrong color input!")
    } 
    if (h1Element.style.fontSize != fontSize) {
        statusElement.innerText += showMessage("Wrong font size input!")
    }

});





