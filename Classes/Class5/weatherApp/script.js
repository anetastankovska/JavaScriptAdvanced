let wrapperDiv = document.getElementById("wrapper");
let resultData = null;
let hourlyData = null;
let apiKey = "27b16354546e74859d91cf9829740711";
let city = "skopje";
let baseUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
let hourlyUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

$(document).ready (() => {
    document.getElementById("homeNav").click();

        // $.ajax({
        //     method: 'GET',
        //     url: baseUrl,

        //     success: (response) => {
        //         console.log(response);
        //         resultData = response;
        //     },
        //     error: (error) => {
        //         console.log(error)
        //     },
        // });

});


// Funtion for handling the "home" page
function renderHomePage (element, response) {
    $(".active").toggleClass("active",false);
    $("#homeNav").toggleClass("active",true);
    let location = "Skopje";
    let temperature = (response.main.temp  - 273.15).toFixed(2);
    let highestTemperature = (response.main.temp_max - 273.15).toFixed(2);
    let lowestTemperature = (response.main.temp_min - 273.15).toFixed(2);
    let average = ((parseInt(highestTemperature) + parseInt(lowestTemperature)) / 2).toFixed(2);
    let humidity = `${response.main.humidity}%`;
    let pressure = response.main.pressure; 
    element.innerHTML = `<h3>Location:</h3><p>${location}</p>
    <h3>Temperature:</h3><p>The temperatire is ${temperature} degrees celsius</p>
    <p>The highest temperature is ${highestTemperature} degrees celsius</p>
    <p>The lowest temperature is ${lowestTemperature} degrees celsius</p>
    <p>The average temperature is ${average} degrees celsius</p>
    <h3>Humidity:</h3><p>The humidity is ${humidity}</p><h3>Pressure:</h3><p>The pressure is ${pressure} hpa</P>`;
}

// Function for handling the "Hourly Weather" page
function renderHourlyWeather (element, response) {
    $(".active").toggleClass("active",false);
    $("#hourlyNav").toggleClass("active",true);
    element.innerHTML += "<table><tr><th>Icon</th><th>Description</th><th>Date and Time</th><th>Temperature</th><th>Humidity</th><th>Wind speed</th></tr>";
    let arr = response.list;

    for (let item of arr) {
        element.getElementsByTagName("tbody")[0].innerHTML += `<tr>
        <td><img src='http://openweathermap.org/img/w/${item.weather[0].icon}.png'/></td>
        <td>${item.weather[0].description}</td>
        <td>${item.dt_txt}</td>
        <td>${item.main.temp}</td>
        <td>${item.main.humidity}%</td>
        <td>${item.wind.speed}</td>
        </tr>`
    }
    element.innerHTML += "</table>";
}

// Function for handling the "about" page
function renderAbout (element) {
    $(".active").toggleClass("active",false);
    $("#aboutNav").toggleClass("active",true);
    element.innerHTML = `<h3>About the application</h3>
    <p>Weather application information</p>
    <h3>Creator information</h3><p>Aneta Stankovska<br>
    <small>All rights reserved <span>&#169</span></small></p>
    <h3>Contact info</h3>
    <p>Text about the contact information</p>`
}



// EVENTS


// Event handler for the HOME link
document.getElementById("homeNav").addEventListener('click', () => {

    if (resultData === null) {
        $.ajax({
            method: 'GET',
            url: baseUrl,

            success: (response) => {
                console.log(response);
                resultData = response;
                renderHomePage(wrapperDiv, resultData);
            },
            error: (error) => {
                console.log(error)
            },
        });
    } else {
        renderHomePage(wrapperDiv, resultData);
    }
});


// Event handler for the HOURLY WEATHER link
document.getElementById("hourlyNav").addEventListener('click', () => {
    wrapperDiv.innerHTML = "";

    if (hourlyData === null) {
        $.ajax({
            method: 'GET',
            url: hourlyUrl,

            success: (response) => {
                console.log(response);
                hourlyData = response;
                renderHourlyWeather(wrapperDiv, hourlyData);
            },
            error: (error) => {
                console.log(error)
            },
        });
    } else {
        renderHourlyWeather(wrapperDiv, hourlyData);
    }
});


// Event handler for the ABOUT link
document.getElementById("aboutNav").addEventListener('click', () => {

    if (resultData === null) {
        $.ajax({
            method: 'GET',
            url: baseUrl,

            success: (response) => {
                console.log(response);
                resultData = response;
                renderAbout(wrapperDiv, resultData);
            },
            error: (error) => {
                console.log(error)
            },
        });
    } else {
        renderAbout(wrapperDiv, resultData);
    }
});



