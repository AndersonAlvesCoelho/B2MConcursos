const knexBase = require("../database");

module.exports = {

    async index(req, res) {
        try {

            const result01 = await knexBase('office_niv_1')
                .select('id_office_niv_1', 'name_office as name_1')
                .orderBy('id_office_niv_1');

            const result02 = await knexBase('office_niv_2')
                .select('id_office_niv_2', 'id_office_niv_1', 'name_office as name_2')
                .orderBy('id_office_niv_2');

            const result03 = await knexBase('office_niv_3')
                .select('id_office_niv_3', 'id_office_niv_2', 'name_office as name_3')
                .orderBy('id_office_niv_3');

            const result04 = await knexBase('office_niv_4')
                .select('id_office_niv_4', 'id_office_niv_3', 'name_office as name_4')
                .orderBy('id_office_niv_4');

            const formatOffice = result01.map((office1, x) => ({
                office_01: office1.name_1,
                value: `0-${x}`,
                key: `0-${x}`,
                children: [
                    result02.map((office2, y) => {
                        if (office2.name_2) {
                            if (result01[x].id_office_niv_1 === office2.id_office_niv_1) {
                                return ({
                                    office_02: office2.name_2,
                                    value: `0-${x}-${y}`,
                                    key: `0-${x}-${y}`,
                                    children: [
                                        result03.map((office3, z) => {
                                            if (result02[y].id_office_niv_2 === office3.id_office_niv_2) {
                                                return ({
                                                    office_03: office3.name_3,
                                                    value: `0-${x}-${y}-${z}`,
                                                    key: `0-${x}-${y}-${z}`,
                                                    children: [
                                                        result04.map((office4, w) => {
                                                            if (result03[z].id_office_niv_3 === office4.id_office_niv_3) {
                                                                return ({
                                                                    office_04: office4.name_4,
                                                                    value: `0-${z}-${y}-${z}-${w}`,
                                                                    key: `0-${x}-${y}-${z}-${w}`,
                                                                })
                                                            }
                                                        })
                                                    ]
                                                })
                                            }
                                        })
                                    ]
                                })
                            }
                        }
                    }),
                ]
            }))

            return res.json(formatOffice);
        } catch (error) {
            // res.status(400).json({ message: `Erro ao retornar os dados. ${error}` });
            next(error);
        }
    }
}

