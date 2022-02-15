let url = "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json";
let studentsUrl = "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";

// this is only with callbacks using the names resolve and reject as callbacks
function getDocumentsCallback(resolve, reject) {
    $.ajax({
        url: url,
        success: function (response) {
            resolve(JSON.parse(response));
        },
        error: function (error) {
            reject(error);
        }
    })
}

function getDocuments(url) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            success: function (response) {
                resolve(JSON.parse(response));
            },
            error: function (error) {
                reject(error);
            }
        })
    })
}

function showDocuments(documents) {
    if (!document && typeof (documents) !== 'object') {
        console.log("Problems with documents");
    } else if (documents.length === 0) {
        console.log("There is no documents");
    } else {
        documents.forEach(doc => {
            console.log(`${doc.name}.${doc.type} (${doc.size}mb)`);
        })
    } 
}

// getDocumentsCallback(data => {
//     console.log('We got the documents callback');
//     showDocuments(data);
// }, error => {
//     console.log(error);
// });

// getDocuments(url)
//     .then(data => {
//         console.log("Resolved promise");
//         showDocuments(data);
//     })
//     .catch(error => console.log(error));

let documents = getDocuments(url);

// lots of code ...
// lots of code ...
// lots of code ...
// lots of code ...
// lots of code ...
// lots of code ...
// lots of code ...
// lots of code ...
// lots of code ...
// lots of code ...
// lots of code ...
// lots of code ...
// lots of code ...
// lots of code ...
// lots of code ...
// lots of code ...
// lots of code ...
// lots of code ...
// lots of code ...

// documents
//     .then(data => showDocuments(data))
//     .catch(error => console.log(error));


// getDocuments(studentsUrl)
//     .then(data => {
//         console.log(data);
//     });


// let delay = function (ms, text) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let isResolved = Math.random() < 0.9;
//             return isResolved ? resolve(text) : reject('You have bad luck');
//         }, ms);
//     });
// }
// let promises = [];

// for (let i = 0; i < 11; i++) {
//     promises.push(delay(1000, `This is ${i} turn!`));
// }

// Promise.all(promises).then(data => {
//     console.log(data);
// })