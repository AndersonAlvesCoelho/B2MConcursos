import { Sequelize, Op } from "sequelize";
import Question from "../models/Question"
import {regexPDF} from "../functions/pdfParse"
import Office from "../models/Office";
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

  register(req, res) {
    try {
      console.log(req);

       return Office.create({
        id_office: req.body.id_office,
        id_office_niv_1: req.body.id_office_niv_1,
        id_office_niv_2: req.body.id_office_niv_2,
        id_office_niv_3: req.body.id_office_niv_3,
        id_office_niv_4: req.body.id_office_niv_4,
      }).then(function (office) {
        if (office) {
          res.send(office);
        } else {
          res.status(400).send('Erro ao inserir cargo');
        }
      });


    //   Question.create({
    //     id: request.body.id,
    //     name: request.body.name,
    //     role: request.body.role,
    //     email: request.body.email
    //   }).then(function (users) {
    //     if (users) {
    //       response.send(users);
    //     } else {
    //       response.status(400).send('Error in insert new record');
    //     }
    //   });
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