$(document).ready(function () {
    let baseUrl = 'https://swapi.dev/api/';
    let nextPageUrl = null;
    let prevPageUrl = null;

    function showStarWarsCharacters(characters, nextPage, prevPage) {
        let ul = $('#people').html('');
        for (let character of characters) {
            let li = $('<li></li>');
            let liHtml = $(`
                <p>Name: ${character.name}</p>
                <button class='btn-more-info' value='${character.url}'>Show more info</button>
            `);
            li.html(liHtml);
            ul.append(li);
        }

        if (nextPage) {
            $('#next').show();
        } else {
            $('#next').hide();
        }

        if (prevPage) {
            $('#prev').show();
        } else {
            $('#prev').hide();
        }
    }

    function getStarwarsCharacters(url) {
        $.ajax({
            url: url,
            method: 'GET',
            success: function (response) {
                console.log(response);
                showStarWarsCharacters(response.results, response.next, response.previous);
                nextPageUrl = response.next;
                prevPageUrl = response.previous;
            },
            error: function (error) {
                console.log(error);
            }
        })
    }

    function showStarWarsCharacter(character) {
        console.log(character);
        let result = $('#char-info').html('');
        let html = `
            <h1>${character.name}</h1>
            <h3>${character.birth_year}</h3>
            <p>Eye color: ${character.eye_color}, Height: ${character.height}, Mass: ${character.mass}</p>
        `;
        result.html(html);
    }

    function getStarWarsCharacter(url) {
        $.ajax({
            url: url,
            method: 'GET',
            success: function (response) {
                //console.log(response);
                showStarWarsCharacter(response);
            },
            error: function (error) {
                console.log(error);
            }
        })
    }

    $('#get-data').on('click', function () {
        $.ajax({
            url: `${baseUrl}people/`,
            method: 'GET',
            success: function (response) {
                console.log(response);
                //let responseObj = JSON.parse(response);
                showStarWarsCharacters(response.results, response.next, response.previous);
                nextPageUrl = response.next;
                prevPageUrl = response.previous;
            },
            error: function (error) {
                console.log(error);
            }
        });
    });

    $('#next').on('click', function () {
        console.log('NEXT');
        getStarwarsCharacters(nextPageUrl);
    });

    $('#prev').on('click', function () {
        console.log("PREV");
        getStarwarsCharacters(prevPageUrl);
    });

    $('#people').on('click', function (event) {
        console.log(event);
        if (event.target.nodeName === "BUTTON") {
            let targetUrl = event.target.value;
            getStarWarsCharacter(targetUrl);
        }
    })

});


// let people = [];

// $.ajax({
//     url: 'https://swapi.dev/api/people/',
//     method: 'GET',
//     success: function (response) {
//         console.log("FIRST");
//         // show data
//         people = response.results;
//         console.log(people); // -> [{},{},{}] 
//     }
// });

// $.ajax({
//     url: 'https://swapi.dev/api/people/1',
//     method: 'GET',
//     success: function (response) {
//         console.log("SECOND");

//         console.log(response);
//     }
// });

// $.ajax({
//     url: 'https://swapi.dev/api/people/2',
//     method: 'GET',
//     success: function (response) {
//         console.log("THIRD");

//         console.log(response);
//     }
// });

// $.ajax({
//     url: 'https://swapi.dev/api/starships/',
//     method: 'GET',
//     success: function (response) {
//         console.log("FOURTH");

//         console.log(response);
//     }
// });

// console.log(people); // -> []

// // lots of code that will not wait for the ajax calls to be executed

// $('#char-info').append('<div style="height: 200px; width: 400px; background-color: red;"></div>');