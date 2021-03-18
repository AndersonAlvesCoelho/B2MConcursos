import { Op } from "sequelize";
import Question from "../models/Question"
import { regexPDF } from "../functions/pdfParse"
const pdf = require('pdf-parse')
// import Office from "../models/Office";
import Alternative from "../models/Alternative";
import { Console } from "console";
import OfficeController from "./officeController";
import dbConfig from "../config/database";
import Bank from "../models/Bank";
const fs = require('fs');
const pdfFile = fs.readFileSync('src/PDF/TJ MG.pdf');
const { QueryTypes } = require('sequelize');
var Sequelize = require('sequelize');
var sequelize = new Sequelize(dbConfig["development"]);
class QuestionController {

  // Retornar o registro das questões
  async index(req, res) {
    try {

      var enunciated = false;
      var bank = false;
      var institution = false;
      var year = false;
      var office = false;
      var office01 = false;
      var office02 = false;
      var office03 = false;
      var office04 = false;
      var dicipline = false;
      var dicipline00 = false;
      var dicipline01 = false;
      var dicipline02 = false;
      var dicipline03 = false;
      var gabaritoComentado = false;
      var comentarios = false;

      //pegando dados para filtragem
      if (req.body.data) {
        if (req.body.data.enunciated) enunciated = req.body.data.enunciated;
        if (req.body.data.bank.length !== 0) bank = req.body.data.bank;
        if (req.body.data.institution.length !== 0) institution = req.body.data.institution;
        if (req.body.data.year.length !== 0) year = req.body.data.year;
        if (req.body.data.office.length !== 0) office = req.body.data.office;
        if (req.body.data.dicipline.length !== 0) dicipline = req.body.data.dicipline;
        if (req.body.data.gabaritoComentado) gabaritoComentado = req.body.data.gabaritoComentado;
        if (req.body.data.comentarios) comentarios = req.body.data.comentarios;
      }

      if (office) {
        if (office[0].length !== 0) office01 = office[0];
        if (office[1].length !== 0) office02 = office[1];
        if (office[2].length !== 0) office03 = office[2];
        if (office[3].length !== 0) office04 = office[3];
      }

      if (dicipline) {
        if (dicipline[0].length !== 0) dicipline00 = dicipline[0];
        if (dicipline[1].length !== 0) dicipline01 = dicipline[1];
        if (dicipline[2].length !== 0) dicipline02 = dicipline[2];
        if (dicipline[3].length !== 0) dicipline03 = dicipline[3];
      }

      const data = await Question.findAll({
        attributes: {
          exclude: [
            // 'id_question',
            'id_office',
            'id_discipline_subject',
            // 'id_bank',
            // 'id_institution',
            'id_user',
            'createdAt',
            // 'updated_at'
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
            // attributes: { exclude: ['id_office', 'createdAt', 'updated_at'] },
            // where: {
            //   //   // ...(office01 && { id_office_niv_1: { [Op.in]: office01 } }),
            //   //   //   // ...(office02 && { id_office_niv_2: { [Op.in]: office02 } }),
            //   //   //   // ...(office03 && { id_office_niv_3: { [Op.in]: office03 } }),
            //   //   //   // ...(office04 && { id_office_niv_4: { [Op.in]: office04 } }),

            // id_office: 1
            // },
            include: [
              {
                association: "office_niv_1",
                attributes: { exclude: ['id_office_niv_1', 'createdAt', 'updated_at'] },
              },
              {
                association: "office_niv_2",
                attributes: { exclude: ['id_office_niv_1', 'id_office_niv_2', 'createdAt', 'updated_at'] },
              },
              {
                association: "office_niv_3",
                attributes: { exclude: ['id_office_niv_2', 'id_office_niv_3', 'createdAt', 'updated_at'] },
              },
              {
                association: "office_niv_4",
                attributes: { exclude: ['id_office_niv_3', 'id_office_niv_4', 'createdAt', 'updated_at'] },
              }
            ],
          },
          {
            // A mesma coisa que acontece para os dados office aocntece para os dados de subject
            association: "discipline_subject",
            attributes: { exclude: ['id_subject_niv_4', 'id_subject_niv_5', 'id_subject_niv_6', 'id_subject_niv_7', 'createdAt', 'updated_at'] },

            // where: {
            // ...(dicipline00 && { id_dicipline: { [Op.in]: dicipline00 } }),
            // ...(dicipline01 && { id_subject_niv_1: { [Op.in]: dicipline01 } }),
            // ...(dicipline02 && { id_subject_niv_2: { [Op.in]: dicipline02 } }),
            // ...(dicipline03 && { id_subject_niv_3: { [Op.in]: dicipline03 } }),
            // },

            include: [
              {
                association: "dicipline",
                attributes: { exclude: ['id_dicipline', 'createdAt', 'updated_at'] },
              },
              {
                association: "subject_niv_1",
                attributes: { exclude: ['id_dicipline', 'id_subject_niv_1', 'createdAt', 'updated_at'] },
              },
              {
                association: "subject_niv_2",
                attributes: { exclude: ['id_subject_niv_1', 'id_subject_niv_2', 'createdAt', 'updated_at'] },
              },
              {
                association: "subject_niv_3",
                attributes: { exclude: ['id_subject_niv_2', 'id_subject_niv_3', 'createdAt', 'updated_at'] },
              },

            ],
          },
          {
            association: "bank",
            attributes: { exclude: ['id_bank', 'createdAt', 'updated_at'] },
          },
          {
            association: "institution",
            attributes: { exclude: ['id_institution', 'createdAt', 'updated_at'] },
          },
          {
            association: "user",
            attributes: { exclude: ['id_user', 'password', 'nivel', 'createdAt', 'updated_at'] },
          },
          {
            association: "alternative",
            attributes: { exclude: ['id_alternative', 'id_question', 'createdAt', 'updated_at'] },
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
                    attributes: { exclude: ['id_user', 'password', 'email', 'nivel', 'createdAt', 'updated_at'] },
                  },
                ],
              },
              {
                association: "user",
                attributes: { exclude: ['id_user', 'password', 'email', 'nivel', 'createdAt', 'updated_at'] },
              },
            ],
          },
        ],

        offset: req.body.offset, limit: req.body.limit,

        where: {
          // id_question: { [Op.in]: [1, 3] },
          ...(enunciated && { enunciated: { [Op.like]: `%${enunciated}%` } }),
          ...(bank && { id_bank: { [Op.in]: bank } }),
          ...(institution && { id_institution: { [Op.in]: institution } }),
          ...(year && { year: { [Op.in]: year } }),
          ...(gabaritoComentado && { issue_resolution: { [Op.not]: null } }),
          // ...(comentarios && { comment: { [Op.not]: null } }),
        },

        order: [['id_question']]

      });

      return res.json(data);
    } catch (error) {
      res.status(400).json({ message: `Erro ao retornar os dados. ${error}` });
    }
  }
  // retornar somente a quantidade toda de registro na tabela question
  async qtdQuestions(req, res) {

    var enunciated = false;
    var bank = false;
    var institution = false;
    var year = false;
    var office = false;
    var dicipline = false;
    var gabaritoComentado = false;

    //pegando dados para filtragem
    if (req.body.data) {
      if (req.body.data.enunciated) enunciated = req.body.data.enunciated;
      if (req.body.data.bank.length !== 0) bank = req.body.data.bank;
      if (req.body.data.institution.length !== 0) institution = req.body.data.institution;
      if (req.body.data.year.length !== 0) year = req.body.data.year;
      // if (req.body.data.office.length !== 0) office = req.body.data.office;
      // if (req.body.data.dicipline.length !== 0) dicipline = req.body.data.dicipline;
      if (req.body.data.gabaritoComentado) gabaritoComentado = req.body.data.gabaritoComentado;
    }

    try {
      const data = await Question.count({
        attributes: {
          exclude: [
            // 'id_question',
            'id_office',
            'id_discipline_subject',
            // 'id_bank',
            // 'id_institution',
            'id_user',
            'createdAt',
            // 'updated_at'
          ]
        },
        where: {
          ...(gabaritoComentado && { issue_resolution: { [Op.not]: null } }),
          ...(enunciated && { enunciated: { [Op.like]: `%${enunciated}%` } }),
          ...(bank && { id_bank: { [Op.in]: bank } }),
          ...(institution && { id_institution: { [Op.in]: institution } }),
          ...(year && { year: { [Op.in]: year } }),
        },
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

      console.log('idOffice',idOffice)
      console.log('idDicipline',idDicipline)

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
        id_question: idQuestion.toJSON().id_alternative + 1,
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

      if(!req.files){
        res.send({
          status: false,
          message: "No files"
        })
      } else {
        const {file} = req.files

        //TODO:TRANSFORMAR EM FUNCAO ESSA LOGICA DO PDF PARSER
        // const questions = regexPDF(file)

        pdf(file).then(function (data){

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

          res.send({
            qtdQuestion: Object.keys(questionsInfo[0]).length,
            questions: questionsInfo,
            message: "File is uploaded"
          })
        })

      }

    } catch (error) {
      res.status(500).json({ message: `Erro ao retornar os dados. ${error}` })
    }
  }


}

export default new QuestionController();