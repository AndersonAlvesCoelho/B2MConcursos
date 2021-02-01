const knexBase = require("../database");

module.exports = {

    async index(req, res) {
        try {
            const results = await knexBase('bank').select(['name_bank'])

            return res.json(results);
        } catch (error) {
            // res.status(400).json({ message: `Erro ao retornar os dados. ${error}` });
            next(error);
        }
    }
}

