const fs = require('fs')
const pdf = require('pdf-parse')
const pdfFile = fs.readFileSync('src/PDF/TG MG teste 1 questao.pdf')

var methods = {};

methods.timestamp = function() {
    var string = "A) Casa com a palavra exemplo. B) DSSD ";
        // regex = /a\)/;
        var regex = /(01)(.*)(A\))/;

    pattern = new RegExp(regex);


    pdf(pdfFile).then(function (data){
        // var AlternativeA = new RegExp(/.*(?= a )/)
        // var myArray = AlternativeA.exec("aacdbbdbsbz");

        // console.log(data.numpages)
        // var teste = String(data.text)
        // console.log(typeof  data.text)

        // var pdfData = pattern.exec(data.text)

        var linhas = data.text.split("\n")
        var pdfData = linhas.join()
        // elements.join()
        return pattern.exec(pdfData)

        // linhas.forEach(function(linha, i) {
        //     // pdfData.concat(linha);
        //     var res = `${pdfData} ${linha}`;
        //     console.log(stringe)
        // })

    })
};

methods.currentDate = function() {
    console.log('Current Date is: ' + new Date().toISOString().slice(0, 10))
};

exports.data = methods;