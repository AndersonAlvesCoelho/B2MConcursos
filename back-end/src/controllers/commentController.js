import Comment from "../models/Comment";
import CommentAnswer from "../models/CommentAnswer";

class CommentController {

    async index(req, res) {
        try {
            const data = await Comment.findAll({
                attributes: { exclude: ['id_comment', 'id_user', 'createdAt', 'created_at'] },

                include: [
                    {
                        association: "comment_answer",
                        attributes: { exclude: ['id_comment_answer', 'id_user', 'id_comment', 'createdAt'] },
                        include: [
                            {
                                association: "user",
                                attributes: { exclude: ['id_user', 'password', 'nivel', 'email', 'createdAt'] },
                            },
                        ],
                    },
                    {
                        association: "user",
                        attributes: { exclude: ['id_user', 'password', 'nivel', 'email', 'createdAt'] },
                    },
                ],
            });
            return res.json(data);
        } catch (error) {
            res.status(400).json({ message: `Erro ao retornar os dados. ${error}` });
        }
    }

    async store(req, res) {
        try {

            const { type, comment, answer, idQuestion, idComment, idUser } = req.body;

            const lastIdComment = await Comment.findOne({ order: [['id_comment', 'DESC']] })
            const lastIdCommentAnswer = await CommentAnswer.findOne({ order: [['id_comment_answer', 'DESC']] })

            switch (type) {
                case 'comment':
                    await Comment.create({
                        id_comment: lastIdComment ? lastIdComment.id_comment + 1 : 1,
                        comment: comment,
                        id_user: idUser,
                        id_question: idQuestion,
                        created_at: new Date(),
                        updated_at: new Date()
                    }).then(function (result) {
                        if (result) return result
                        else res.status(400).send('Erro ao fazer comentário!')
                    })

                    const dataComment = await Comment.findOne({
                        attributes: { exclude: [ 'createdAt'] },
                        order: [['id_comment', 'DESC']]
                    })
                    return res.json(dataComment);
                case 'comment answer':
                    await CommentAnswer.create({
                        id_comment_answer: lastIdCommentAnswer ? lastIdCommentAnswer.id_comment_answer + 1 : 1,
                        answer: answer,
                        id_user: idUser,
                        id_comment: idComment,
                        created_at: new Date(),
                        updated_at: new Date()
                    }).then(function (result) {
                        if (result) return result
                        else res.status(400).send('Erro ao fazer comentário!')
                    })

                    const dataCommentAnswer = await CommentAnswer.findOne({
                        attributes: { exclude: ['id_comment_answer', 'createdAt'] },
                        order: [['id_comment_answer', 'DESC']]
                    })
                    return res.json(dataCommentAnswer);
                default:
                    break;
            }

        } catch (error) {
            res.status(400).json({ message: `Erro ao retornar os dados. ${error}` });
        }
    }
}

export default new CommentController();
