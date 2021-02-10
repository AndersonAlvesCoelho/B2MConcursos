import OfficeNiv01Controller from "../models/office/OfficeNiv01";

class OfficeController {

    // retorna dados sobre o termômetro
    async index(req, res) {
        try {
            const data = await OfficeNiv01Controller.findAll({
                attributes: { exclude: ['createdAt', 'updatedAt'] },

                include: {
                    // Tabela about_topic se relaciona com tabela Languages
                    association: "office_niv_2",
                    // attributes: [['id', 'id_topic'], 'title', 'text_topic'],
                    attributes: { exclude: ['createdAt', 'updatedAt'] },
                    // attributes: { exclude: ['id_languages'] },

                    // Tabela about_topic_caption se relaciona com tabela about_topic
                    include: {
                        association: "office_niv_3",
                        // attributes: { exclude: ['id', 'id_about_topic'] },
                        attributes: { exclude: ['createdAt', 'updatedAt'] },

                        // Tabela about_caption_item se relaciona com tabela about_topic_caption
                        include: {
                            association: "office_niv_4",
                            // attributes: { exclude: ['id', 'id_about_topic_caption'] },
                            attributes: { exclude: ['createdAt', 'updatedAt'] },
                        },
                    },
                },

                order: [['id_office_niv_1'],],
                // attributes: ['id', 'logo_version', 'logo_content_type', 'name', 'updated_at']
            });
            return res.json(data);
        } catch (error) {
            res.status(400).json({ message: `Erro ao retornar os dados. ${error}` });
        }
    }
}

export default new OfficeController();
