const fs = require('fs')
const pdf = require('pdf-parse')
const pdfFile = fs.readFileSync('src/sample.pdf')

var methods = {};

methods.timestamp = function() {
    pdf(pdfFile).then(function (data){
        console.log(data.numpages)
        console.log(data.info)
        console.log(data.text)
    })
};

methods.currentDate = function() {
    console.log('Current Date is: ' + new Date().toISOString().slice(0, 10))
};

exports.data = methods;