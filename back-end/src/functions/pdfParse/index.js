const fs = require('fs')
const pdfparse = require('pdf-parse')

const pdffile = fs.readFileSync('sample.pdf')

//get information

pdfparse(pdffile).then(function (data){
    console.log(data.numpages)


    console.log(data.info)
})