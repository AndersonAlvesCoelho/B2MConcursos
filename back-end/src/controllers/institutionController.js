import Institution from "../models/Institution";

class InstitutionController {

  async index(req, res) {
    try {
      const data = await Institution.findAll({
        attributes: { exclude: [ 'createdAt', 'updatedAt'] },
      });
      return res.json(data) ;
    } catch (error) {
      res.status(400).json({ message: `Erro ao retornar os dados. ${error}` });
    }
  }
}

export default new InstitutionController();
