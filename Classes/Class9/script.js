let input = document.getElementById('country-code');
let btn = document.getElementById('get-data');

let baseUrl = "https://restcountries.com/v2/alpha/";

function getData(url) {
    return fetch(url).then(response => response.json());
}

async function getBorderingCountries(codes) {
    for (let code of codes) {
        let url = `${baseUrl}${code}`;
        let country = await getData(url);
        console.log(country);
    }
}

btn.addEventListener('click', async (e) => {
    e.preventDefault();
    let countryCode = input.value;
    let countryUrl = `${baseUrl}${countryCode}`;
    // getData(countryUrl).then(data => {
    //     console.log(data);
    //     getBorderingCountries(data.borders);
    // });
    let country = await getData(countryUrl);
    console.log(country);
    getBorderingCountries(country.borders);
});

//let a = async code => console.log("Something");