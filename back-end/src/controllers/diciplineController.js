import Dicipline from "../models/Dicipline";

class DiciplineController {

    async index(req, res) {
        try {
            const data = await Dicipline.findAll({
                attributes: { exclude: ['id_dicipline', 'createdAt', 'updatedAt'] },

                include: {
                    association: "subject_niv_1",
                    attributes: { exclude: ['id_subject_niv_1', 'id_dicipline', 'createdAt', 'updatedAt'] },
                    include: {
                        association: "subject_niv_2",
                        attributes: { exclude: ['id_subject_niv_2', 'id_subject_niv_1', 'createdAt', 'updatedAt'] },
                        include: {
                            association: "subject_niv_3",
                            attributes: { exclude: ['id_subject_niv_3', 'id_subject_niv_2', 'createdAt', 'updatedAt'] },
                            // include: {
                            //     association: "subject_niv_4",
                            //     attributes: { exclude: ['id_subject_niv_4', 'id_subject_niv_3', 'createdAt', 'updatedAt'] },
                            //     include: {
                            //         association: "subject_niv_5",
                            //         attributes: { exclude: ['id_subject_niv_5', 'id_subject_niv_4', 'createdAt', 'updatedAt'] },
                            //         // include: {
                            //         //     association: "subject_niv_6",
                            //         //     attributes: { exclude: ['id_subject_niv_6', 'id_subject_niv_5', 'createdAt', 'updatedAt'] },
                            //         //     // include: {
                            //         //     //     association: "subject_niv_7",
                            //         //     //     attributes: { exclude: ['id_subject_niv_7', 'id_subject_niv_6', 'createdAt', 'updatedAt'] },
                            //         //     // },
                            //         // },
                            //     },
                            // },
                        },
                    },
                },

                // order: [['id_office_niv_1']]
            });
            return res.json(data);
        } catch (error) {
            res.status(400).json({ message: `Erro ao retornar os dados. ${error}` });
        }
    }
}

export default new DiciplineController();
