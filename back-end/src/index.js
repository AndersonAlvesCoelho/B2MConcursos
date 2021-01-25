const fs = require('fs')
const pdf = require('pdf-parse')
const pdfFile = fs.readFileSync('src/PDF/TJ MG.pdf')

var methods = {};

methods.timestamp = function() {
    var string = "a) Casa com a palavra exemplo ",
        regexp = /a\)/;

    pattern = new RegExp(regexp);


    pdf(pdfFile).then(function (data){
        // var AlternativeA = new RegExp(/.*(?= a )/)
        // var myArray = AlternativeA.exec("aacdbbdbsbz");

        console.log(data.numpages)
        console.log(data.text)
        console.log(pattern.exec(string))

    })
};

methods.currentDate = function() {
    console.log('Current Date is: ' + new Date().toISOString().slice(0, 10))
};

exports.data = methods;