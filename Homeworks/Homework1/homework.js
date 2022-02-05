/* Task 1
Create an html page with a table and a button. When the button is clicked show results for the first 10 planets from the Star Wars api. The information in the table are:

Planet Name
Population
Climate
Gravity
There should be a function that makes the call to the api for the planets ( should have URL for a parameter ) There should be a function that prints planets in to the table **API URL: ** https://swapi.dev/api/planets/?page=1

Task 2
After the user clicks the button to get the first 10 planets, a button should be shown below the table that says: NEXT 10. When the button is clicked you should make another call and get the next 10 planets and change the table contents with information about the next 10 planets. After the next 10 planets are shown the button NEXT 10 should disapear and a new button PREVIOUS 10 should appear. The previous button should return the first 10 planets in the table and hide the PREVIOUS 10 button and show the NEXT 10 button.

**API URL: ** https://swapi.dev/api/planets/?page=2
*/


$(document).ready (() => {
    // let baseUrl = 'https://swapi.dev/api/planets/?page=1'
    let prevPage = document.getElementById("prev");
    let nextPage = document.getElementById("next");
    let tableElement = document.querySelector("table");
    let currentPage;

    prevPage.style.display = "none";
    nextPage.style.display = "none";
    
    
    // Function for getting the planets
    function getPlanets (currentPage) {
        $.ajax({
            method: 'GET',
            url: `https://swapi.dev/api/planets/?page=${currentPage}`,
            success: (response) => {
                let tableStr = "";
                
                console.log(response);
                let arr = response.results;
                
                for (let item of arr) {
                    tableStr += `<tr>
                    <td>${item.name}</td>
                    <td>${item.population}</td>
                    <td>${item.climate}</td>
                    <td>${item.gravity}</td>
                    </tr>`; 
                }

                tableElement.innerHTML = `<tr>
                <th>Planet Name</th>
                <th>Population</th>
                <th>Climate</th>
                <th>Gravity</th>
                </tr>${tableStr}`;
                if (response.next) {
                    nextPage.style.display = "block";
                } else {
                    nextPage.style.display = "none";
                }

                if (response.previous) {
                    prevPage.style.display = "block";
                } else {
                    prevPage.style.display = "none";
                }
                document.querySelector("span").innerText = `Page: ${currentPage}`;

            },
            error: (error) => {
                console.log(error);
            },
        })

    }

    // Event for showing the planets (page 1)
    document.querySelector("button").addEventListener('click', () => {
        currentPage = 1
        getPlanets(currentPage);

    });


    // Event for showing next page
    document.getElementById("next").addEventListener('click', () => {
        currentPage++;
        getPlanets (currentPage);
    })


    // Event for showing the previous page
    document.getElementById("prev").addEventListener('click', () => {
        currentPage--;
        getPlanets(currentPage);
    });

})

