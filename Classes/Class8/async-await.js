let url = "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json";
let studentsUrl = "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";


function getDataFromUrl(url) {
    let promise = fetch(url);
    promise
        .then(response => response.json())
        .then(data => console.log(data));
    // console.log(data);
}

async function getDataFromUrlAsync(url) {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
}

// getDataFromUrlAsync(url);
// getDataFromUrlAsync(studentsUrl);

function showDocuments(documents) {
    documents.forEach(doc => {
        console.log(`${doc.name}.${doc.type} (${doc.size}mb)`);
    });
}

async function getDataFromUrlAsync1(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

async function showData() {
    let data = await getDataFromUrlAsync1(url);
    showDocuments(data);
}

// showData();


function getDataFromFetch(url) {
    return fetch(url);
}

async function showStudents(url) {
    let response = await getDataFromFetch(url);
    let data = await response.json();
    let allFemaleStudents = data.filter(student => student.gender === 'Female')
    //console.log(allFemaleStudents);
    allFemaleStudents.forEach(student => console.log(`${student.firstName} ${student.lastName}`));
}

showStudents(studentsUrl);