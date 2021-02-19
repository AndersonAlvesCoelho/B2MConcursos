// import { Sequelize, Op } from "sequelize";
import Question from "../models/Question"
import {regexPDF} from "../functions/pdfParse"
// import Office from "../models/Office";
import Alternative from "../models/Alternative";
// import Institution from "../models/Institution";
// import Bank from "../models/Bank";
// import DisciplineSubject from "../models/DisciplineSubject";
const fs = require('fs')
const pdfFile = fs.readFileSync('src/PDF/TJ MG.pdf')

class QuestionController {

  // retorna municipio por geocodes
  async index(req, res) {
    try {
      const data = await Question.findAll({
        attributes: {
          exclude: [
            // 'id_question',
            'id_office',
            'id_discipline_subject',
            'id_bank',
            'id_institution',
            'id_user',
            'created_at',
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
            attributes: { exclude: ['id_office_niv_1', 'id_office_niv_2', 'id_office_niv_3', 'id_office_niv_4', 'created_at', 'updated_at'] },
            include: [
              {
                association: "office_niv_1",
                attributes: { exclude: ['id_office_niv_1', 'created_at', 'updated_at'] },
              },
              {
                association: "office_niv_2",
                attributes: { exclude: ['id_office_niv_1', 'id_office_niv_2', 'created_at', 'updated_at'] },
              },
              {
                association: "office_niv_3",
                attributes: { exclude: ['id_office_niv_2', 'id_office_niv_3', 'created_at', 'updated_at'] },
              },
              {
                association: "office_niv_4",
                attributes: { exclude: ['id_office_niv_3', 'id_office_niv_4', 'created_at', 'updated_at'] },
              }
            ],
          },
          {
            //  A mesma coisa que acontece para os dados office aocntece para os dados de subject
            association: "discipline_subject",
            attributes: { exclude: ['id_dicipline', 'id_subject_niv_1', 'id_subject_niv_2', 'id_subject_niv_3', 'id_subject_niv_4', 'id_subject_niv_5', 'id_subject_niv_6', 'id_subject_niv_7', 'created_at', 'updated_at'] },

            include: [
              {
                association: "dicipline",
                attributes: { exclude: ['id_dicipline', 'created_at', 'updated_at'] },
              },
              {
                association: "subject_niv_1",
                attributes: { exclude: ['id_dicipline', 'id_subject_niv_1', 'created_at', 'updated_at'] },
              },
              {
                association: "subject_niv_2",
                attributes: { exclude: ['id_subject_niv_1', 'id_subject_niv_2', 'created_at', 'updated_at'] },
              },
              {
                association: "subject_niv_3",
                attributes: { exclude: ['id_subject_niv_2', 'id_subject_niv_3', 'created_at', 'updated_at'] },
              },
              {
                association: "subject_niv_4",
                attributes: { exclude: ['id_subject_niv_3', 'id_subject_niv_4', 'created_at', 'updated_at'] },
              },
              {
                association: "subject_niv_5",
                attributes: { exclude: ['id_subject_niv_4', 'id_subject_niv_5', 'created_at', 'updated_at'] },
              },
              {
                association: "subject_niv_6",
                attributes: { exclude: ['id_subject_niv_6', 'id_subject_niv_5', 'created_at', 'updated_at'] },
              },
              {
                association: "subject_niv_7",
                attributes: { exclude: ['created_at', 'updated_at'] },
              },

            ],

          },
          {
            association: "bank",
            attributes: { exclude: ['id_bank', 'created_at', 'updated_at'] },
          },
          {
            association: "institution",
            attributes: { exclude: ['id_institution', 'created_at', 'updated_at'] },
          },
          {
            association: "user",
            attributes: { exclude: ['id_user', 'password', 'nivel', 'created_at', 'updated_at'] },
          },
          {
            association: "alternative",
            attributes: { exclude: ['id_alternative', 'id_question', 'created_at', 'updated_at'] },
          },
          {
            association: "comment",
            attributes: { exclude: ['id_comment', 'id_user', 'id_question', 'created_at'] },
            include: [
              {
                association: "comment_answer",
                attributes: { exclude: ['id_comment_answer', 'id_user', 'id_comment', 'created_at'] },
                include: [
                  {
                    association: "user",
                    attributes: { exclude: ['id_user', 'password', 'nivel', 'created_at', 'updated_at'] },
                  },
                ],
              },
              {
                association: "user",
                attributes: { exclude: ['id_user', 'password', 'nivel', 'created_at', 'updated_at'] },
              },
            ],
          },
        ],

        offset: req.params.offset, limit: req.params.limit,
        // order: [['updated_at']]
      });
      return res.json(data);
    } catch (error) {
      res.status(400).json({ message: `Erro ao retornar os dados. ${error}` });
    }
  }



  async store(req, res) {
    try {
      const {
        // Office
        // idOffice,
        // idOfice1,
        // idOfice2,
        // idOfice3,
        // idOfice4,

        // Discipline
        // idDiscipline,
        // idSubject1,
        // idSubject2,
        // idSubject3,
        // idSubject4,
        // idSubject5,
        // idSubject6,
        // idSubject7,

        // bank
        // idBank,
        // nameBank,

        //institution
        // nameInstitution,

        // Question
        idQuestion,
        idOffice,
        idDisciplineSubject,
        idBank,
        idInstitution,
        year,
        issueResolution,
        idUser,
        enunciated,

        // Alternative
        idAlternative,
        nameAlternative,
        answer,

      } = req.body

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


      const question = await Question.create({
        id_question: idQuestion,
        id_office: idOffice,
        id_discipline_subject: idDisciplineSubject,
        id_bank: idBank,
        id_institution: idInstitution,
        year: year,
        issue_resolution: issueResolution,
        id_user: idUser,
        enunciated: enunciated,
      }).then(function (result) {
        if (result) {
          return result
        } else {
          res.status(400).send('Erro ao inserir instituição');
        }
      })

      for(let i = 0; i < nameAlternative.length; i++) {
        await Alternative.create({
          id_alternative: idAlternative[i],
          name_alternative: nameAlternative[i],
          answer: answer[i],
          id_question: question.id_question,
        }).then(function (result) {
          if (result) {
            res.send(result);
          } else {
            res.status(400).send('Erro ao inserir alternativas');
          }
        });
      }

      return res.json(question)
    } catch (error) {
      res.status(400).json({ message: `Erro ao retornar os dados. ${error}` })
    }
  }

  upload(req, res) {
    try {
      return regexPDF(pdfFile)


      // if (!req.files) {
      //     return res.status(500).send({ msg: "file is not found" })
      // }
      //
      // // accessing the file
      // const myFile = req.files.file;
      //
      // console.log(req)
      //
      // //  mv() method places the file inside public directory
      // myFile.mv(`${__dirname}/public/${myFile.name}`, function (err) {
      //     if (err) {
      //         console.log(err)
      //         return res.status(500).send({ msg: "Error occured" });
      //     }
      //     // returing the response with file path and name
      //     return res.send({name: myFile.name, path: `/${myFile.name}`});
      // });

    } catch (error) {
      res.status(400).json({ message: `Erro ao retornar os dados. ${error}` })
    }
  }

  async qtdQuestions(req, res) {
    try {
      const data = await Question.count();
      return res.json(data);
    } catch (error) {
      res.status(400).json({ message: `Erro ao retornar os dados. ${error}` });
    }
  }
}

export default new QuestionController();