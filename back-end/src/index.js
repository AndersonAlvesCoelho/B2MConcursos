const fs = require('fs')
const pdf = require('pdf-parse')
const pdfFile = fs.readFileSync('sample.pdf')

var methods = {};

methods.timestamp = function() {
    pdf(pdfFile).then(function (data){
        console.log(data.numpages)


        console.log(data.info)
    })
};
methods.currentDate = function() {
    console.log('Current Date is: ' + new Date().toISOString().slice(0, 10))
};

exports.data = methods;