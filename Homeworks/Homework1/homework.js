$(document).ready (() => {
    let baseUrl = 'https://swapi.dev/api/planets/?page=1'
    let prevPageUrl = null;
    let nextPageUrl = null;
    let prevTen = null;
    let nextTen = null;

    function getPlanets (url) {
        $.ajax({
            method: 'GET',
            url: url,
            success: (response) => {
                console.log(response);
                prevTen = response;
            },
            error: (error) => {
                console.log(error)
            },
        })
    }

    document.querySelector("button").addEventListener('click', () => {
        getPlanets(baseUrl);
    })



})

