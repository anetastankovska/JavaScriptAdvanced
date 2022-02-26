const storageName = 'dataSet';

// session storge
function setDataInStorage(value) {
    let data = sessionStorage.getItem(storageName);
    console.log(data);
    if (data) {
        let parsedData = JSON.parse(data);
        parsedData.push(value);
        let strData = JSON.stringify(parsedData);
        sessionStorage.setItem(storageName, strData);
    } else {
        let parsedData = [value];
        let strData = JSON.stringify(parsedData);
        sessionStorage.setItem(storageName, strData);
    }
}

// session storge
function getDataFromStorage(storageName) {
    let data = sessionStorage.getItem(storageName);
    if (data) {
        return JSON.parse(data);
    }
    return [];
}

function setDataInLocalStorage(value) {
    let data = localStorage.getItem(storageName);
    console.log(data);
    if (data) {
        let parsedData = JSON.parse(data);
        parsedData.push(value);
        let strData = JSON.stringify(parsedData);
        localStorage.setItem(storageName, strData);
    } else {
        let parsedData = [value];
        let strData = JSON.stringify(parsedData);
        localStorage.setItem(storageName, strData);
    }
}

function getDataFromLocalStorage(storageName) {
    let data = localStorage.getItem(storageName);
    if (data) {
        return JSON.parse(data);
    }
    return [];
}


document
    .getElementById('save')
    .addEventListener('click', function () {
        let value = document.getElementById('text-input').value;
        setDataInStorage(value);
        setDataInLocalStorage(value);
    });


        
document
    .getElementById('show-data')
    .addEventListener('click', function () {
        let data = getDataFromStorage(storageName);
        let data1 = getDataFromLocalStorage(storageName);
        console.log("Local storage data", data1);
        let element = document.getElementById('result');
        for (const item of data) {
            element.innerHTML += `<p>${item}</p>`; 
        }
    })