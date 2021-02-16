import { Sequelize, Op } from "sequelize";
import Question from "../models/Question";

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
            attributes: { exclude: ['id_office_niv_1', 'id_office_niv_2', 'id_office_niv_3', 'id_office_niv_4', 'createdAt', 'updatedAt'] },
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
            attributes: { exclude: ['id_dicipline', 'id_subject_niv_1', 'id_subject_niv_2', 'id_subject_niv_3', 'id_subject_niv_4', 'id_subject_niv_5', 'id_subject_niv_6', 'id_subject_niv_7', 'createdAt', 'updatedAt'] },

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
              {
                association: "subject_niv_4",
                attributes: { exclude: ['id_subject_niv_3', 'id_subject_niv_4', 'createdAt', 'updatedAt'] },
              },
              {
                association: "subject_niv_5",
                attributes: { exclude: ['id_subject_niv_4', 'id_subject_niv_5', 'createdAt', 'updatedAt'] },
              },
              {
                association: "subject_niv_6",
                attributes: { exclude: ['id_subject_niv_6', 'id_subject_niv_5', 'createdAt', 'updatedAt'] },
              },
              {
                association: "subject_niv_7",
                attributes: { exclude: ['createdAt', 'updatedAt'] },
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
                attributes: { exclude: ['createdAt', 'updatedAt'] },
                attributes: { exclude: ['id_user', 'password', 'nivel', 'createdAt', 'updatedAt'] },
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