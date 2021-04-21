import { Op } from "sequelize";
import Question from "../models/Question"
import { regexPDF } from "../functions/pdfParse"
const pdf = require('pdf-parse')
// import Office from "../models/Office";
import Alternative from "../models/Alternative";
import { Console, count } from "console";
import dbConfig from "../config/database";
import Bank from "../models/Bank";
import officeController from "./officeController";
const fs = require('fs');
const pdfFile = fs.readFileSync('src/PDF/TJ MG.pdf');
const { QueryTypes } = require('sequelize');
var Sequelize = require('sequelize');
var sequelize = new Sequelize(dbConfig["development"]);

class QuestionController {

  // Retornar o registro das questões
  async index(req, res) {

    var bank = false;
    var institution = false;
    var year = false;
    var office = false;
    var office01 = false;

    //pegando dados para filtragem
    if (req.body.data) {
      if (req.body.data.bank.length !== 0) bank = req.body.data.bank;
      if (req.body.data.institution.length !== 0) institution = req.body.data.institution;
      if (req.body.data.year.length !== 0) year = req.body.data.year;
      if (req.body.data.office.length !== 0) office = req.body.data.office;
    }
    if (office) { if (office[0].length !== 0) office01 = office[0]; }
    
    try {

      const data = await Question.findAll({
        attributes: {
          exclude: [
            'id_office',
            'id_discipline_subject',
            'id_user',
            'createdAt',
            'updatedAt',
          ]
        },

        include: [
          {
            /* Relacionamento com os dados de office
            * É relacionado id_question com id_office:
            * Apartici dessa associação, e relacionada as demais tabelas de office, 
            * conforme os ids que contem na tabela office
            */
            association: "office",
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            where: {
              ...(office01 && { id_office: { [Op.in]: office01 } }),
            },

            include: {
              association: "office_niv_1",
              attributes: { exclude: ['createdAt', 'updatedAt'] },

            },
          },
          {
            association: "bank",
            attributes: { exclude: ['id_bank', 'createdAt', 'updatedAt'] },
          },
          {
            association: "institution",
            attributes: { exclude: ['id_institution', 'createdAt', 'updatedAt'] },
          },
          // {
          //   association: "user",
          //   attributes: { exclude: ['id_user', 'password', 'nivel', 'createdAt', 'updatedAt'] },
          // },
          {
            association: "alternative",
            attributes: { exclude: ['id_alternative', 'id_question', 'createdAt', 'updatedAt'] },
          },
          {
            association: "comment",
            attributes: { exclude: ['id_user', 'id_question', 'createdAt'] },
            include: [
              {
                association: "comment_answer",
                attributes: { exclude: ['id_comment_answer', 'id_user', 'id_comment', 'createdAt'] },
                include: [
                  {
                    association: "user",
                    attributes: { exclude: ['id_user', 'password', 'email', 'nivel', 'createdAt', 'updatedAt'] },
                  },
                ],
              },
              {
                association: "user",
                attributes: { exclude: ['id_user', 'password', 'email', 'nivel', 'createdAt', 'updatedAt'] },
              },
            ],
          },
        ],

        offset: req.body.offset, limit: req.body.LIMIT,

        where: {
          ...(bank && { id_bank: { [Op.in]: bank } }),
          ...(institution && { id_institution: { [Op.in]: institution } }),
          ...(year && { year: { [Op.in]: year } }),
        },

        order: [['id_question']]
      }).then(async (data) => {
        // retornar somente a quantidade toda de registro na tabela question
        const count = await Question.count({

          include: [
            {
              association: "office",
              where: { ...(office01 && { id_office: { [Op.in]: office01 } }), },
            },
          ],
          where: {
            ...(bank && { id_bank: { [Op.in]: bank } }),
            ...(institution && { id_institution: { [Op.in]: institution } }),
            ...(year && { year: { [Op.in]: year } }),
          },
        });
        return res.json({ data, count: count });
      });
      return res.json(data);

    } catch (error) {
      res.status(400).json({ message: `Erro ao retornar os dados. ${error}` });
    }

  }

  async store(req, res) {

    //TODO: finish catch value discipline and office
    //TODO: inserir usuario
    //TODO: corrigir o erro validation error
    try {
      console.log(req.body)

      const {
        //general info
        idBank,
        idInstitution,
        idOffice,
        year,
        idDicipline,

        // Question
        enunciated,
        nameAlternative,
        answer,
        issueResolution,
        idUser,
      } = req.body

      console.log('idOffice', idOffice)
      console.log('idDicipline', idDicipline)

      //  const office = await Office.create({
      //   id_office: idOffice,
      //   id_office_niv_1: idOfice1,
      //   id_office_niv_2: idOfice2,
      //   id_office_niv_3: idOfice3,
      //   id_office_niv_4: idOfice4,
      // }).then(function (result) {
      //   if (result) {
      //     res.send(result);
      //   } else {
      //     res.status(400).send('Erro ao inserir cargo');
      //   }
      // });

      // const discipline = await DisciplineSubject.create({
      //   id_dicipline_subject: idDisciplineSubject,
      //   id_dicipline: idDiscipline,
      //   id_subject_niv_1: idSubject1,
      //   id_subject_niv_2: idSubject2,
      //   id_subject_niv_3: idSubject3,
      //   id_subject_niv_4: idSubject4,
      //   id_subject_niv_5: idSubject5,
      //   id_subject_niv_6: idSubject6,
      //   id_subject_niv_7: idSubject7,
      // }).then(function (result) {
      //   if (result) {
      //     res.send(result);
      //   } else {
      //     res.status(400).send('Erro ao inserir disciplina');
      //   }
      // })

      // const bank = await Bank.create({
      //   id_bank: idBank,
      //   name_bank: nameBank,
      // }).then(function (result) {
      //   if (result) {
      //     res.send(result);
      //   } else {
      //     res.status(400).send('Erro ao inserir banca');
      //   }
      // })

      // const institution = await Institution.create({
      //   id_institution: idInstitution,
      //   name_institution: nameInstitution,
      // }).then(function (result) {
      //   if (result) {
      //     res.send(result);
      //   } else {
      //     res.status(400).send('Erro ao inserir instituição');
      //   }
      // })
      const idQuestion = await Question.findOne({
        order: [
          ['id_question', 'DESC']
        ]
      })

      // TODO: resolver problema do auto increment postgres default value e sequelize
      const question = await Question.create({
        id_question: idQuestion.toJSON().id_question + 1,
        id_office: 1,
        id_discipline_subject: 1,
        id_bank: idBank,
        id_institution: idInstitution,
        year: year,
        issue_resolution: issueResolution,
        id_user: 1,
        enunciated: enunciated,
      }).then(function (result) {
        if (result) {
          return result
        } else {
          res.status(400).send('Erro ao inserir instituição');
        }
      })

      // const question = await sequelize.query(
      //     'INSERT INTO public.question VALUES((SELECT MAX(id_question)+1 FROM public.question), 1, 1, ' + idBank + ',' +  idInstitution + ',' + year + ',' + issueResolution + ', 1,' + enunciated + ') ',
      //     {
      //       type: QueryTypes.INSERT
      //     }
      // ).then(function (result) {
      //   if (result) {
      //     return result
      //   } else {
      //     res.status(400).send('Erro ao inserir instituição');
      //   }
      // });

      for (let i = 0; i < nameAlternative.length; i++) {
        //TODO: retirar essa gambiarra para pegar o ultimo ID
        const idQAlternative = await Alternative.findOne({
          order: [
            ['id_alternative', 'DESC']
          ]
        })
        await Alternative.create({
          id_alternative: idQAlternative.toJSON().id_alternative + 1,
          name_alternative: nameAlternative[i],
          answer: answer[i],
          id_question: question.id_question,
        }).then(function (result) {
          if (!result) {
            res.status(400).send('Erro ao inserir alternativas');
          }
        });
      }
      console.log('teste2')

      return res.json(question)
    } catch (error) {
      res.status(400).json({ message: `Erro ao retornar os dados. ${error}` })
    }
  }

  upload(req, res) {
    try {

      if (!req.files) {
        res.send({
          status: false,
          message: "No files"
        })
      } else {
        const { file } = req.files

        //TODO:TRANSFORMAR EM FUNCAO ESSA LOGICA DO PDF PARSER
        // const questions = regexPDF(file)

        pdf(file).then(function (data) {

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
          var enunciated = [];
          const questionsInfo = [];


          //catch question D (search everything between D) to number of question)
          for (let i = 1; i < questionsA.length; i = i + 1) {
            // cath algarisms with '0' ex: 01,02,03
            var regexD
            if (i < 9) {
              regexD = `D\\)(.*?)0${i}`
            } else {
              regexD = `D\\)(.*?)${i}`
            }
            var DtoNext = new RegExp(regexD, `g`)
            var matchsD = pdfData.match(DtoNext);
            if (matchsD) {
              questionsD.push(matchsD[0])
            }
          }

          //catch enuncidated
          for (let i = 1; i < questionsA.length; i = i + 1) {
            // cath algarisms with '0' ex: 01,02,03
            var regexEnum
            if (i < 9) {
              regexEnum = `0${i}(.*?)A\\)`
            } else {
              regexEnum = `${i}(.*?)A\\)`
            }
            var enun = new RegExp(regexEnum, `g`)
            var matchEnun = pdfData.match(enun);

            if (matchEnun) {
              enunciated.push(matchEnun[0])
            }
          }

          questionsA.forEach(function (a, i) {
            questionsInfo.push([enunciated[i], questionsA[i], questionsB[i], questionsC[i], questionsD[i]]);
          })

          res.send({
            qtdQuestion: questionsInfo.length,
            questions: questionsInfo,
            message: "PDF carregado com sucesso"
          })
        })

      }

    } catch (error) {
      res.status(500).json({ message: `Erro ao retornar os dados. ${error}` })
    }
  }


}

export default new QuestionController();