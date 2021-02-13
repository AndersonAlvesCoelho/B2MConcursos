
class RegisterQuestionsController {

    async index(req, res) {
        try {

            return res.json(data);
        } catch (error) {
            res.status(400).json({ message: `Erro ao retornar os dados. ${error}` });
        }
    }
}

export default new RegisterQuestionsController();
