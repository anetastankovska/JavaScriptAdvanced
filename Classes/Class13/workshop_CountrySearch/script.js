let inputText = document.getElementById("inputCountry");
let btn = document.getElementById("generateData");
let wrapperDiv = document.getElementById("wrapper");
let filterDiv = document.getElementById("filters");



class Country {
    constructor (restCountriesObj) {
        this.flag = restCountriesObj.flags.png;
        this.name = restCountriesObj.name.common;
        this.capital = restCountriesObj.capital != undefined ? restCountriesObj.capital.join(", ") : "None";
        this.population = restCountriesObj.population;
        this.area = restCountriesObj.area;
        this.languages = Object.values(restCountriesObj.languages).join(", ");
        this.currencies = Object.values(restCountriesObj.currencies).map(currency => {return currency.name}).join(", ");
    }

    toTableRow () {
        return `<tr><td><img src="${this.flag}" alt="flag"></td>
        <td>${this.name}</td>
        <td>${this.capital}</td>
        <td>${this.population}</td>
        <td>${this.area}</td>
        <td>${this.languages}</td>
        <td>${this.currencies}</td></tr>`;
    }
}


class CountryService {
    constructor () { 
        this.countriesData = []; 
        this.filteredData = [];
    }

    
    async getDataAsync (url) {
        try {
        let responseCountries = await fetch(url).then(response => response.json());
        this.countriesData = responseCountries.map(x => {
            return new Country(x);
        })
        return responseCountries;
        } catch {
            return [];
        }
    }

    renderFilters () {
        let str = "";
        str += `<input type="text" id="filterByNameInput" >
        <button id="filterByNameBtn">Filter by name</button><br>
        <input type="number" id="minArea" placeholder="min">
        <input type="number" id="maxArea" placeholder="max">
        <button id="filterByArea">Filter by area</button><br>
        <input type="number" id="minPopulation" placeholder="min">
        <input type="number" id="maxPopulation" placeholder="max">
        <button id="filterByPopulation">Filter by population</button><br>`
        return str;
    }

    renderData (data) {
        console.log(data);
        let str ="";
        str += `<div id="tableDiv"><table>
        <tr><td></td>
        <td><select id="nameDropDown"><option value="ascending">Ascending</option><option value="descending">Descending</option></td>
        <td></td>
        <td><select id="populationDropDown"><option value="ascending">Ascending</option><option value="descending">Descending</option></td>
        <td><select id="areaDropDown"><option value="ascending">Ascending</option><option value="descending">Descending</option></td>
        <td></td>
        <td></td>
        <tr><th>Flag</th>
        <th>Name</th>
        <th>Capital</th>
        <th>Population</th>
        <th>Area</th>
        <th>Languages</th>
        <th>Currencies</th></tr>`;
        str += data.map(x => {
            return x.toTableRow()
        }).join("");
        str += `</table></div>`
        return str;
    }

    
    filterByName(nameValue) {
        let filteredByName = this.countriesData.filter(country => {
            return country.name.toLowerCase().startsWith(nameValue.toLowerCase());
        });
        this.filteredData = filteredByName;
        return filteredByName;
    }
    
    filterByArea(minValue, maxVaue) {
        let filteredByArea = this.countriesData.filter(country => {
            return country.area >= minValue && country.area <= maxVaue
        });
        this.filteredData = filteredByArea;
        return filteredByArea;
    }
    
    filterByPopulation(minValue, maxVaue) {
        let filteredByPopulation = this.countriesData.filter(country => {
            return country.population >= minValue && country.population <= maxVaue;
        });
        this.filteredData = filteredByPopulation;
        return filteredByPopulation;
    }

    sortalphabeticallyAsc() {
        let sorted = this.filteredData.sort((a, b) => (a.name.localeCompare(b.name)));
        return sorted;
    }

    sortalphabeticallyDesc() {
        let sorted = this.filteredData.sort((a, b) => b.name.localeCompare(a.name));
        return sorted;
    }

    sortByNumberAsc(field) {
        if (field === "area") {
            let sorted = this.filteredData.sort((a, b) => a.area - b.area);
            return sorted;
        }
        if (field === "population") {
            let sorted = this.filteredData.sort((a, b) => a.population - b.population);
            return sorted;
        }
    }

    sortByNumberDesc(field) {
        if (field === "area") {
            let sorted = this.filteredData.sort((a, b) => b.area - a.area);
            return sorted;
        }
        if (field === "population") {
            let sorted = this.filteredData.sort((a, b) => b.population - a.population);
            return sorted;
        }
    }


    handleEventListeners () {
        document.getElementById("filterByNameBtn").addEventListener('click', () => {
            let input = document.getElementById("filterByNameInput").value;
            let filtered = this.filterByName(input);
            document.getElementById("wrapper").innerHTML = this.renderData(filtered);
        });

        document.getElementById("filterByArea").addEventListener('click', () => {
            let min = document.getElementById("minArea").value;
            let max = document.getElementById("maxArea").value;
            let filtered = this.filterByArea(min, max);
            document.getElementById("wrapper").innerHTML = this.renderData(filtered);
        });

        document.getElementById("filterByPopulation").addEventListener('click', () => {
            let min = document.getElementById("minPopulation").value;
            let max = document.getElementById("maxPopulation").value;
            let filtered = this.filterByPopulation(min, max);
            document.getElementById("wrapper").innerHTML = this.renderData(filtered);
        });

        document.getElementById("nameDropDown").addEventListener('change', (e) => {
            let value = e.target.value;
            if (this.filteredData.length === 0) {
                this.filteredData = this.countriesData;
            }
            if (value === "ascending") {
                this.sortalphabeticallyAsc();
            }
            if (value === "descending") {
                this.sortalphabeticallyDesc();
            }
            wrapperDiv.innerHTML = this.renderData(this.filteredData);
            document.getElementById("nameDropDown").value = value;
            this.handleEventListeners();
        });

        document.getElementById("populationDropDown").addEventListener('change', (e) => {
            let value = e.target.value;
            if (this.filteredData.length === 0) {
                this.filteredData = this.countriesData;
            }
            if (value === "ascending") {
                this.sortByNumberAsc("population");
            }
            if (value === "descending") {
                this.sortByNumberDesc("population")
            };
            wrapperDiv.innerHTML = this.renderData(this.filteredData);
            document.getElementById("populationDropDown").value = value;
            this.handleEventListeners();
        });

        document.getElementById("areaDropDown").addEventListener('change', (e) => {
            let value = e.target.value;
            if (this.filteredData.length === 0) {
                this.filteredData = this.countriesData;
            }
            if (value === "ascending") {
                this.sortByNumberAsc("area");
            }
            if (value === "descending") {
                this.sortByNumberDesc("area")
            };
            wrapperDiv.innerHTML = this.renderData(this.filteredData);
            document.getElementById("areaDropDown").value = value;
            this.handleEventListeners();
        });
    }
}



btn.addEventListener('click', async () => {
    wrapperDiv.innerHTML = "";
    let inputValue = inputText.value;
    let countryName =  inputValue.toLowerCase(); 
    let countryUrl = `https://restcountries.com/v3.1/name/${countryName}`

    wrapperDiv.innerHTML = `<img id="loading" src="https://upload.wikimedia.org/wikipedia/commons/5/54/Ajux_loader.gif">`;
    let service = new CountryService();
    let data = await service.getDataAsync(countryUrl);
    let countries = data.map(country => {
        return new Country(country);
    });
    console.log(countries);
    filterDiv.innerHTML = service.renderFilters();
    wrapperDiv.innerHTML = service.renderData(countries);
    service.handleEventListeners();
});





