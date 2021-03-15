import { Op } from "sequelize";
import UserAnswersQuestion from "../models/UserAnswersQuestion";

class UserAnswersQuestionController {

    async index(req, res) {
        try {
            const data = await UserAnswersQuestion.findAll();
            return res.json(data);
        } catch (error) {
            res.status(400).json({ message: `Erro ao retornar os dados. ${error}` });
        }
    }


    /** CREATE OR UPDATE
     * Cadastrar resposta do usuario
     * ou
     * atualizar resposta do usuario
     */
    async store(req, res) {
        try {

            const { idUser, idQuestion, answer } = req.body;

            const data = await UserAnswersQuestion.findAll({ where: { [Op.and]: [{ id_user: idUser }, { id_question: idQuestion }] } });
            const lastId = await UserAnswersQuestion.findOne({ order: [['id_user_answers_question', 'DESC']] })

            // CREATE
            if (data.length === 0) {
                await UserAnswersQuestion.create({
                    id_user_answers_question: lastId ? lastId.id_user_answers_question + 1 : 1,
                    id_user: idUser,
                    id_question: idQuestion,
                    answer: answer,
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
                    { id_user: idUser, id_question: idQuestion, answer: answer, updated_at: new Date() },
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
