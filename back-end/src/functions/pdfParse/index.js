const pdf = require('pdf-parse')

export const regexPDF = (pdfFile) => {


    pdf(pdfFile).then(function (data){

        //regex
        var AtoB = /A\)(.*?)B\)/g
        var BtoC = /B\)(.*?)C\)/g
        var DtoNext = /A\)(.*)B\)/g

        //transformando em uma única String
        var linhas = data.text.split("\n")
        var pdfData = linhas.join()



        //TODO: descobrir uma forma melhor de pegar todas as ocorrências de um regex em uma string que não seja essa gambiarra
        //gambiarra = excluir ocorrencias da variavel para que o app não pare de novo na mesma string
       do{

           var questionsA = pdfData.match(AtoB);
           var questionsB = pdfData.match(BtoC);

           const search = 'Atenção';
           const replaceWith = '';

           const result = pdfData.split(search).join(replaceWith);

           console.log(result)
       }while(result !== "")



        console.log(pdfData)
        console.log(questionsA)
        console.log(questionsB)
        // console.log(data.numpages)

    })
};