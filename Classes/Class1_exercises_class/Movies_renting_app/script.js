/* Movies renting App
•	Create a movie renting app
•	There should be an array of movie names
•	There should be an input and a search button
•	When the person enters a name of a movie it should search the array
•	If the name exists it should show an H1 element that says: "The movie can be rented" in green text
•	If the name does not exist it should show an H1 element that says: "The movie can't be rented" in red text
•	The input should not be case sensitive ( it should find the movie regardless of capital or small letters ) */

let movies = ["Interstellar", "The Matrix", "Terminator", "Ironman", "The Godfather", "Memento", "The Dark Knight", "American History X"];

let textInput = document.getElementById("movie");
let buttonElement = document.getElementsByTagName("button")[0];

function checkMovie (array, movie) {
    for (let element = 0; element < array.length; element++) {
        if (movie.toLowerCase() === array[element].toLowerCase()) {
            return true;
        } else {
            return false;
        }
    }
}

buttonElement.addEventListener('click', function () {
    if (document.getElementsByTagName("h1").length != 0) {
        document.body.removeChild(document.getElementsByTagName("h1")[0]);  
    }
    let movie = textInput.value;
    let displayElement = document.createElement("h1");
    if (checkMovie (movies, movie)) {
        displayElement.innerText += `The movie can be rented`;
        displayElement.style.color = "green";
        buttonElement.after(displayElement);
    } else {
        displayElement.innerText += `The movie can't be rented`;
        displayElement.style.color = "red";
        buttonElement.after(displayElement);
    }
})
