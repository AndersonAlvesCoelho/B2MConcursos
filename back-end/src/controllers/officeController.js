const knexBase = require("../database");

module.exports = {

    async index(req, res) {
        try {
            const results = await knexBase('office_niv_1')
            .select('office_niv_1.name_office', 'office_2.name_office', 'office_3.name_office', 'office_4.name_office')
            .leftJoin('office_niv_2 as office_2', 'office_2.id_office_niv_1', 'office_niv_1.id_office_niv_1')
            .leftJoin('office_niv_3 as office_3', 'office_3.id_office_niv_2', 'office_2.id_office_niv_2')
            // .leftJoin('office_niv_4 as office_4', 'office_4.id_office_niv_3', 'office_3.id_office_niv_3')
            ;

            return res.json(results);
        } catch (error) {
            // res.status(400).json({ message: `Erro ao retornar os dados. ${error}` });
            next(error);
        }
    }
}

