import User from "../models/User";

class UserController {

  // retorna municipio por geocodes
  async index(req, res) {
    try {
      const data = await User.findAll();
      return res.json(data) ;
    } catch (error) {
      res.status(400).json({ message: `Erro ao retornar os dados. ${error}` });
    }
  }
}

export default new UserController();
