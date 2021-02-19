import Institution from "../models/Institution";

class InstitutionController {

  // retorna municipio por geocodes
  async index(req, res) {
    try {
      const data = await Institution.findAll({
        attributes: { exclude: ['id_institution', 'created_at', 'updated_at'] },
      });
      return res.json(data) ;
    } catch (error) {
      res.status(400).json({ message: `Erro ao retornar os dados. ${error}` });
    }
  }
}

export default new InstitutionController();
