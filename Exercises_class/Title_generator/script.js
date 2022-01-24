/* Title Generator
Create 3 inputs:
Color
FontSize
Text
Create a button for generating titles
When the button is clicked generate a new h1 element with the color, font size, and text from the inputs */

let buttonElement = document.getElementsByTagName("button")[0];
let colorInput = document.getElementById("color");
let fontSizeInput = document.getElementById("font-size");
let textInput = document.getElementById("text");
let containerDiv = document.getElementById("container");

buttonElement.addEventListener('click', function () {
    let color = colorInput.value;
    let fontSize = fontSizeInput.value;
    let text = textInput.value;
    containerDiv.innerHTML += `<h1 style ="color: ${color}; font-size: ${fontSize}px"> ${text} </h1>`;
    // containerDiv.getElementsByTagName("h1")[0].style["color"] = color;
    // containerDiv.getElementsByTagName("h1")[0].style["font-size"] = `${fontSize}px`;
    

})