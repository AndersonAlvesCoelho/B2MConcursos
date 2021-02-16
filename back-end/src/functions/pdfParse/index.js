const pdf = require('pdf-parse')

export const regexPDF = (pdfFile) => {


    pdf(pdfFile).then(function (data){

        //regex
        const AtoB = new RegExp("A\\)(.*?)B\\)", "g")
        const BtoC = new RegExp("B\\)(.*?)C\\)", "g")
        const CtoD = new RegExp("C\\)(.*?)D\\)", "g")

        //transformando em uma única String
        var linhas = data.text.split("\n")
        var pdfData = linhas.join()

        //catch questions
        const questionsA = pdfData.match(AtoB);
        const questionsB = pdfData.match(BtoC);
        const questionsC = pdfData.match(CtoD);
        var questionsD = [];

        //catch question D (search everything between D) to number of question)
        for(let i = 2 ; i < 4; i = i + 1) {
            var DtoNext = new RegExp(`D\\)(.*?)${i}`, `g`)
            var matchsD = pdfData.match(DtoNext);
            questionsD.push(matchsD[0])
        }

        const questionsInfo = [];
        questionsInfo.push(questionsA, questionsB, questionsC, questionsD);
        return questionsInfo

        // const search = 'Atenção';
        // const replaceWith = '';

        // const result = pdfData.split(search).join(replaceWith);

        // console.log(result)

        // console.log(data.numpages)

    })
};