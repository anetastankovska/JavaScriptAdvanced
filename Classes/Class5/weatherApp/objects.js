let unitsObj = {
        units: {
        standard: "Standard",
        metric: "Metric",
        imperial: "Imperial",
    },

    generateDropDown: () => {
        let str = "";
        str += "<p>Select measurement unit</p><select name='units' id='units'>";
        for (key in unitsObj.units) {
            str += `<option value=${key}>${unitsObj.units[key]}</option>`
        }
        str += "</select>"
        return str;
    }
};


let languagesObj = {
    languages: {
        en: "English",
        af: "Afrikaans",
        al: "Albanian",
        ar: "Arabic",
        az: "Azerbaijani",
        bg: "Bulgarian",
        ca: "Catalan",
        cz: "Chech",
        da: "Danish",
        de: "German",
        el: "Greek",
        eu: "Basque",
        fa: "Persian",
        fi: "Finnish",
        fr: "French",
        gl: "Galician",
        he: "Hebrew",
        hi: "Hindi",
        hr: "Croatian",
        hu: "Hungarian",
        id: "Indonesian",
        it: "Italian",
        jp: "Japanese",
        kr: "Korean",
        la: "Latvian",
        lt: "Lithuanian",
        mk: "Macedonian",
        no: "Norwegian",
        nl: "Dutch",
        pl: "Polish",
        pt: "Portuguese",
        ro: "Romanian",
        ru: "Russian",
        sv: "Swedish",
        sk: "Slovak",
        sl: "Slovenian",
        es: "Spanish",
        sr: "Serbian",
        th: "Thai",
        tr: "Turkish",
        uk: "Ukrainian",
        vi: "Vietnamese",
        zh_cn: "Chinese Simplified",
        zh_tw: "Chinese Traditional",
        zu: "Zulu"
    },
    

    generateDropDown: () => {
        let str = "";
        str += "<p>Select language</p><select name='language' id='languages'>";
        for (key in languagesObj.languages) {
            str += `<option value="${key}">${languagesObj.languages[key]}</option>`
        }
        str += '</select>';
        return str;
    }
}



let citiesObj = {
    
    cities: {},  

    autocompleteFunction: () => {
        $.getJSON("city.list.json", a => {
            let cityNames = a.map(element => element.name);
            citiesObj.cities.data = cityNames
            return cityNames;
        }).then(()=>{
            let str = '<div class="ui-widget"><label for="tags" id="cityLabel">Select city:</label><br><input id="tags"></div>';
            document.getElementById("customLeft").innerHTML += str;
            $("#tags").autocomplete({
                source: citiesObj.cities.data,
                minLength: 3
            });
            let button = createCustomPageBtn();
            document.getElementById("customLeft").appendChild(button);


            document.getElementById("customPageBtn").addEventListener('click', async () => {
         
                let language = document.getElementById("languages").value;
                let unit = document.getElementById("units").value;
                let city = document.getElementById("tags").value;
                let customUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&language=${language}&appid=${apiKey}`;
                let data = await generateCustomReportAsync (customUrl); 
                let resultDiv = document.getElementById("customRight");
                renderCustomResult(resultDiv, data);   
            })
        });
    }
}


function createCustomPageBtn () {
    let btn = document.createElement("button");
    let btnContent = document.createTextNode("Generate report");
    btn.appendChild(btnContent);
    btn.setAttribute("id", "customPageBtn");
    return btn;

}

