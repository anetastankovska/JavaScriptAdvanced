/* List Generator dynamically from inputs
Create 3 inputs:
Color
FontSize
Items
Create a button for generating unordered lists
When the button is clicked generate a new ul element with the color, font size, and items from the inputs
Items should be added separated by, in the input */

let buttonElement = document.getElementsByTagName("button")[0];
colorElement = document.getElementById("color");
fontElement = document.getElementById("font-size");
containerElement = document.getElementById("container");
let itemsValue = document.getElementById("items");

buttonElement.addEventListener('click', function () {
    let colorValue = colorElement.value;
    let fontSize = fontElement.value;
    let textValue = itemsValue.value.split(",");
    containerElement.innerHTML += `<ul style ="color: ${colorValue}; font-size: ${fontSize} px">`;
    for (let i = 0; i < textValue.length; i++) {
        containerElement.getElementsByTagName("ul")[0].innerHTML += `<li> ${textValue[i]} </li>`  
    }
    containerElement.innerHTML += "</ul>"

})