import { Op } from "sequelize";
import UserAnswersQuestion from "../models/UserAnswersQuestion";

//GET USER QANSWER QUESTION
class UserAnswersQuestionController {

    async index(req, res) {
        const { idUser, idQuestion } = req.body;

        try {
            const data = await UserAnswersQuestion.findAll({
                attributes: { exclude: ['id_user_answers_question', 'id_user', 'createdAt', 'updatedAt'] },

                where: {
                    [Op.and]: [
                        { id_user: idUser },
                        (idQuestion && { id_question: { [Op.or]: idQuestion } }),
                    ]
                },
                order: [['id_user_answers_question']]
            });
            return res.json(data);
        } catch (error) {
            res.status(400).json({ message: `Erro ao retornar os dados. ${error}` });
        }
    }


    /** CREATE OR UPDATE 
     * create answer user
     * ou
     * update answer user
     */
    async store(req, res) {
        try {

            const { idUser, idQuestion, answer, check } = req.body;

            console.log(req.body)
            const data = await UserAnswersQuestion.findAll({ where: { [Op.and]: [{ id_user: idUser }, { id_question: idQuestion }] } });
            const lastId = await UserAnswersQuestion.findOne({ order: [['id_user_answers_question', 'DESC']] })

            // CREATE
            if (data.length === 0) {
                await UserAnswersQuestion.create({
                    id_user_answers_question: lastId ? lastId.id_user_answers_question + 1 : 1,
                    id_user: idUser,
                    id_question: idQuestion,
                    answer: answer,
                    check: check,
                    created_at: new Date(),
                    updated_at: new Date()
                }).then(function (result) {
                    if (result) return result
                    else res.status(400).send('Erro ao responder a pergunta!')
                })
                return res.send('Pergunta respondida com sucesso!')

                // UPDATE
            } else {
                await UserAnswersQuestion.update(
                    {
                        id_user: idUser,
                        id_question: idQuestion,
                        answer: answer,
                        check: check,
                        updated_at: new Date()
                    },
                    {
                        where:
                        {
                            [Op.and]: [
                                { id_user: idUser },
                                { id_question: idQuestion }
                            ]
                        }
                    }
                ).then(function (result) {
                    if (result) return result
                    else res.status(400).send('Erro ao responder a pergunta!')
                })
                return res.send('Pergunta respondida com sucesso!')
            }

        } catch (error) {
            res.status(400).json({ message: `Erro ao retornar os dados. ${error}` });
        }
    }

}

export default new UserAnswersQuestionController();
