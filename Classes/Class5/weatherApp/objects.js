let unitsObj = {
        units: {
        standard: "Standard",
        metric: "Metric",
        imperial: "Imperial",
    },

    generateDropDown: () => {
        let str = "";
        str += "<p>Select measurement unit</p><select> name='units' id='units'><option value='' selected disabled>Select unit</option>";
        for (key in unitsObj.units) {
            str += `<option value=${unitsObj.units[key]}>${unitsObj.units[key]}</option>`
        }
        str += "</select>"
        return str;
    }
};


let languagesObj = {
    languages: {
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
        en: "English",
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
        str += "<p>Select language</p><select name='language' id='languages'><option value='' selected disabled>Select language</option>";
        for (key in languagesObj.languages) {
            str += `<option value="${languagesObj.languages[key]}">${languagesObj.languages[key]}</option>`
        }
        str += '</select>';
        return str;
    }
}

let citiesObj = {
    cities: {
        data: [
            "ActionScript",
            "AppleScript",
            "Asp",
            "BASIC",
            "C",
            "C++",
        ]
    },  

    autocompleteFunction: () => {
        let str = '<div class="ui-widget"><label for="tags" id="cityLabel">Select city:</label><br><input id="tags"></div';
        // $("#tags").autocomplete({
        //     source: citiesObj.cities.data
        //   });
        return str;
    }

}

// $.getJSON("city.list.json", a => {
//         citiesObj.cities.data = a.map(element => element.name);
// });



