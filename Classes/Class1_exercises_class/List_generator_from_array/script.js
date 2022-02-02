/* List generator from an array
Create an array of 5 names
Create an HTML page with:
A header
An empty unordered list
A button
When the button is clicked it should fill in the empty unordered list with the names of the array */

let buttonElement = document.getElementsByTagName("button")[0];
let orderedListElement = document.getElementsByTagName("ol")[0];
console.log(buttonElement);

function generateArray (array, element) {
    for (let i = 0; i < array.length; i++) {
        element.innerHTML += `<li> ${array[i]} </li>`
    }
    return element;
}

buttonElement.addEventListener('click', function () {
    generateArray(["Aneta", "Trajan", "Nikola", "Bob", "Jill"], orderedListElement)
})