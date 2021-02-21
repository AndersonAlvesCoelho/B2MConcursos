import Institution from "../models/Institution";

class InstitutionController {

  async index(req, res) {
    try {
      const data = await Institution.findAll({
<<<<<<< HEAD
        attributes: { exclude: [ 'createdAt', 'updatedAt'] },
=======
        attributes: { exclude: ['id_institution', 'created_at', 'updated_at'] },
>>>>>>> dbc7435d2b36bc3f58f8366b7e5ddb7164e040d6
      });
      return res.json(data) ;
    } catch (error) {
      res.status(400).json({ message: `Erro ao retornar os dados. ${error}` });
    }
  }
}

export default new InstitutionController();
