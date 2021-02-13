const fs = require('fs')
const pdfparse = require('pdf-parse')

const pdffile = fs.readFileSync('TJ MG teste.pdf')

//get information

pdfparse(pdffile).then(function (data){
    console.log(data.numpages)

    console.log(data.info)
})