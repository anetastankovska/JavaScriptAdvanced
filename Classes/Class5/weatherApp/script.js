let wrapperDiv = document.getElementById("wrapper");
let homeData = null;
let hourlyData = null;
let apiKey = "27b16354546e74859d91cf9829740711";
let city = "skopje";
let baseUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
let hourlyUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
let homeSearchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchButton");
let searchLi = document.getElementById("search");

$(document).ready (() => {
    document.getElementById("homeNav").click();
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
    element.innerHTML = `<h3>Location:</h3><p class="centered">${location}</p>
    <h3>Temperature:</h3><p class="centered">The temperatire is ${temperature} degrees celsius</p>
    <p class="centered">The highest temperature is ${highestTemperature} degrees celsius</p>
    <p class="centered">The lowest temperature is ${lowestTemperature} degrees celsius</p>
    <p class="centered">The average temperature is ${average} degrees celsius</p>
    <h3>Humidity:</h3><p class="centered">The humidity is ${humidity}</p><h3>Pressure:</h3><p class="centered">The pressure is ${pressure} hpa</P>`;
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
    <p class="centered">Weather application information</p>
    <h3>Creator information</h3><p class="centered">Aneta Stankovska<br>
    <small>All rights reserved <span class="centered">&#169</span></small></p>
    <h3>Contact info</h3>
    <p class="centered">Text about the contact information</p>`
}


// Functions for handlng the custom report page - units, languages and cities are included in the objects.js script


// Async function for getting the data
async function fetchHomeDataAsync (url) {
    let data = await fetch(url).then(response => response.json());
    homeData = data;
    return homeData;
}


// Async function for the hourly weather data
async function fetchHourlyDataAsync (url) {
    let data = await fetch(url).then(response => response.json());
    let hourlyData = data;
    return hourlyData;
}


// EVENTS


// Event handler for the HOME link
document.getElementById("homeNav").addEventListener('click', async () => {
    searchLi.style.display = "none";
    let data = await fetchHomeDataAsync(baseUrl);

    renderHomePage(wrapperDiv, data);
});



// Event handler for the HOURLY WEATHER link
document.getElementById("hourlyNav").addEventListener('click', async () => {
    searchLi.style.display = "block";
    wrapperDiv.innerHTML = "";
    let data = await fetchHourlyDataAsync(hourlyUrl);
    renderHourlyWeather(wrapperDiv, data);
});



// Event handler for the ABOUT link
document.getElementById("aboutNav").addEventListener('click', () => {
    searchLi.style.display = "none";
    renderAbout(wrapperDiv, homeData);
});

// Event for handling the search input
homeSearchInput.addEventListener('keyup', async () => {
    let inputValue = homeSearchInput.value;
    let list = await fetchHourlyDataAsync(hourlyUrl);
    let descriptionList = list.list;
    let filteredList = descriptionList.filter(e => {return e.weather[0].description.toLowerCase().includes(inputValue.toLowerCase())});
    console.log(filteredList);
    filteredFinal = {}
    filteredFinal.list = filteredList;
    wrapperDiv.innerHTML = "";
    renderHourlyWeather(wrapperDiv, filteredFinal);
});

// Event for handling the custom report page
document.getElementById("customNav").addEventListener('click', () => {
    $(".active").toggleClass("active",false);
    $("#customNav").toggleClass("active",true);
    wrapperDiv.innerHTML = "";
    let unitsData = unitsObj.generateDropDown();
    wrapperDiv.innerHTML += unitsData;

    let languageData = languagesObj.generateDropDown();
    wrapperDiv.innerHTML += languageData;

    let citiesData = citiesObj.autocompleteFunction();
    wrapperDiv.innerHTML += citiesData;
    $("#tags").autocomplete({
        source: citiesObj.cities.data
      });
})




