/* Random color page
Create an HTML page
On every refresh the page should pick a random color and change the background of the page
The RGB values of the color should be shown in the center of the page on every restart */

// let bodyElement = document.getElementById("body");

window.addEventListener('load', function () {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    console.log("Color is changed");
    document.body.style["backgroundColor"] = `rgb(${red},${green},${blue})`;
})