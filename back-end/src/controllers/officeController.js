import OfficeNiv01 from "../models/office/OfficeNiv01";

class OfficeController {

    async index(req, res) {
        try {
            const data = await OfficeNiv01.findAll({
                attributes: { exclude: ['id_office_niv_1', 'createdAt', 'updatedAt'] },

                include: {
                    association: "office_niv_2",
                    attributes: { exclude: ['id_office_niv_2', 'id_office_niv_1', 'createdAt', 'updatedAt'] },

                    include: {
                        association: "office_niv_3",
                        attributes: { exclude: ['id_office_niv_3', 'id_office_niv_2', 'createdAt', 'updatedAt'] },

                        include: {
                            association: "office_niv_4",
                            attributes: { exclude: ['id_office_niv_4', 'id_office_niv_3', 'createdAt', 'updatedAt'] },
                        },
                    },
                },

                order: [['id_office_niv_1']]
            });
            return res.json(data);
        } catch (error) {
            res.status(400).json({ message: `Erro ao retornar os dados. ${error}` });
        }
    }
}

export default new OfficeController();
