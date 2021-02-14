import {regexPDF} from '../functions/pdfParse';
const fs = require('fs')
const pdfFile = fs.readFileSync('src/PDF/TG MG teste 1 questao.pdf')

class RegisterQuestionsController {

    async index(req, res) {
        try {

            return regexPDF(pdfFile)


            if (!req.files) {
                return res.status(500).send({ msg: "file is not found" })
            }

            // accessing the file
            const myFile = req.files.file;

            console.log(req)

            //  mv() method places the file inside public directory
            myFile.mv(`${__dirname}/public/${myFile.name}`, function (err) {
                if (err) {
                    console.log(err)
                    return res.status(500).send({ msg: "Error occured" });
                }
                // returing the response with file path and name
                return res.send({name: myFile.name, path: `/${myFile.name}`});
            });

        } catch (error) {
            res.status(400).json({ message: `Erro ao retornar os dados. ${error}` })
        }
    }
}

export default new RegisterQuestionsController();
