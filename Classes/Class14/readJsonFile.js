const fs = require('fs');

const fileName = 'jsonDatabase.txt';

const service = {
    addData: function (data) {
        let strData = JSON.stringify(data);
        fs.writeFile(fileName, strData, function (err) {
            if (err) {
                console.log(err);
            }
            console.log("The data was saved!");
        });
    },
    appendData: function (data) {
        let readData = this.readData();
        let newData = { ...readData, ...data };
        let strData = JSON.stringify(newData);
        fs.writeFile(fileName, strData, function (err) {
            if (err) {
                console.log(err);
            }
            console.log('The data is successfuly appended to the file.');
        });
    },
    readData: function () {
        let strData = fs.readFileSync(fileName, { encoding: 'utf-8' });
        return JSON.parse(strData);
    }
}

module.exports = service;