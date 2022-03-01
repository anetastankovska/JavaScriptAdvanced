const fs = require('fs');

const fileName = 'test.txt';

const service = {
    addText: function (text) {
        fs.writeFile(fileName, text, function (err) {
            if (err) {
                console.log(err);
            }
            console.log("The file was saved!");
        });
    },
    appendText: function (text) {
        fs.appendFile(fileName, text, function (err) {
            if (err) {
                console.log(err);
            }
            console.log('The text is successfuly apendet to the file.');
        });
    },
    readFile: function () {
        return fs.readFileSync(fileName, { encoding: 'utf-8' });
    }
}

module.exports = service;