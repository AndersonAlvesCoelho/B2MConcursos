import { Op } from "sequelize";
import Question from "../models/Question"
import { regexPDF } from "../functions/pdfParse"
// import Office from "../models/Office";
import Alternative from "../models/Alternative";
import { Console } from "console";
const fs = require('fs');
const pdfFile = fs.readFileSync('src/PDF/TJ MG.pdf');


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

      console.log(gabaritoComentado);
      console.log(comentarios);
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
            // 'updatedAt'
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
            attributes: { exclude: ['id_office', 'createdAt', 'updatedAt'] },
            // where: {
            //   // ...(office01 && { id_office_niv_1: { [Op.in]: office01 } }),
            //   //   // ...(office02 && { id_office_niv_2: { [Op.in]: office02 } }),
            //   //   // ...(office03 && { id_office_niv_3: { [Op.in]: office03 } }),
            //   //   // ...(office04 && { id_office_niv_4: { [Op.in]: office04 } }),

            //   id_office_niv_1: 1
            // },
            include: [
              {
                association: "office_niv_1",
                attributes: { exclude: ['id_office_niv_1', 'createdAt', 'updatedAt'] },
              },
              {
                association: "office_niv_2",
                attributes: { exclude: ['id_office_niv_1', 'id_office_niv_2', 'createdAt', 'updatedAt'] },
              },
              {
                association: "office_niv_3",
                attributes: { exclude: ['id_office_niv_2', 'id_office_niv_3', 'createdAt', 'updatedAt'] },
              },
              {
                association: "office_niv_4",
                attributes: { exclude: ['id_office_niv_3', 'id_office_niv_4', 'createdAt', 'updatedAt'] },
              }
            ],

          },
          {
            //  A mesma coisa que acontece para os dados office aocntece para os dados de subject
            association: "discipline_subject",
            attributes: { exclude: ['id_subject_niv_4', 'id_subject_niv_5', 'id_subject_niv_6', 'id_subject_niv_7', 'createdAt', 'updatedAt'] },

            // where: {
            //   ...(dicipline00 && { id_dicipline: { [Op.in]: dicipline00 } }),
            //   ...(dicipline01 && { id_subject_niv_1: { [Op.in]: dicipline01 } }),
            //   ...(dicipline02 && { id_subject_niv_2: { [Op.in]: dicipline02 } }),
            //   ...(dicipline03 && { id_subject_niv_3: { [Op.in]: dicipline03 } }),
            // },

            include: [
              {
                association: "dicipline",
                attributes: { exclude: ['id_dicipline', 'createdAt', 'updatedAt'] },
              },
              {
                association: "subject_niv_1",
                attributes: { exclude: ['id_dicipline', 'id_subject_niv_1', 'createdAt', 'updatedAt'] },
              },
              {
                association: "subject_niv_2",
                attributes: { exclude: ['id_subject_niv_1', 'id_subject_niv_2', 'createdAt', 'updatedAt'] },
              },
              {
                association: "subject_niv_3",
                attributes: { exclude: ['id_subject_niv_2', 'id_subject_niv_3', 'createdAt', 'updatedAt'] },
              },

            ],
          },
          {
            association: "bank",
            attributes: { exclude: ['id_bank', 'createdAt', 'updatedAt'] },
          },
          {
            association: "institution",
            attributes: { exclude: ['id_institution', 'createdAt', 'updatedAt'] },
          },
          {
            association: "user",
            attributes: { exclude: ['id_user', 'password', 'nivel', 'createdAt', 'updatedAt'] },
          },
          {
            association: "alternative",
            attributes: { exclude: ['id_alternative', 'id_question', 'createdAt', 'updatedAt'] },
          },
          {
            association: "comment",
            attributes: { exclude: ['id_comment', 'id_user', 'id_question', 'createdAt'] },
            include: [
              {
                association: "comment_answer",
                attributes: { exclude: ['id_comment_answer', 'id_user', 'id_comment', 'createdAt'] },
                include: [
                  {
                    association: "user",
                    attributes: { exclude: ['id_user', 'password', 'nivel', 'createdAt', 'updatedAt'] },
                  },
                ],
              },
              {
                association: "user",
                attributes: { exclude: ['id_user', 'password', 'nivel', 'createdAt', 'updatedAt'] },
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
            // 'updatedAt'
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

      for (let i = 0; i < nameAlternative.length; i++) {
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


}

export default new QuestionController();