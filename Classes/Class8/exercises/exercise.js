let baseUrl = "https://restcountries.com/v2/alpha/"
let wrapperDiv = document.getElementById("wrapper");
let btn = document.getElementById("get-data");
let input = document.getElementById("country-code");

async function getNeighbours (countryCode) {
    let response = await fetch (`${baseUrl}${countryCode}`);
    console.log(`${baseUrl}${countryCode}`);
    let data = await response.json();
    console.log(data);
    return data.borders;
}

async function getCountryInformation (countryCode) {
    let response = await fetch (`${baseUrl}${countryCode}`);
    let data = await response.json();
    wrapperDiv.innerHTML += `<p>${data.name}</p>`;
    return data;
}


async function showNeighbours (countryCode) {
    let data = await getNeighbours(countryCode);
    wrapperDiv.innerHTML = "";
    wrapperDiv.innerHTML += `<h3>Showing neighbours of ${countryCode}:</h3>`
    console.log(data);
    for (let element of data) {
        getCountryInformation(element);
    }
}


btn.addEventListener('click', () => {
    let inputValue = input.value;
    showNeighbours(inputValue);
});

