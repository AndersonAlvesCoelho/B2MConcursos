import User from "../models/User";

class UserController {

  async index(req, res) {
    try {
      const data = await User.findAll();
      return res.json(data);
    } catch (error) {
      res.status(400).json({message: `Erro ao retornar os dados. ${error}`});
    }
  }

  async login(req, res) {
    try {
      const {email, password} = req.body;
      console.log(email)

      const data = await User.findAll({
        where: {
          login: email,
          password: password
        }
      })

      res.status(200).json({message: `Login aprovado`});
    } catch (error) {
      res.status(400).json({message: `Erro ao retornar os dados. ${error}`});
    }

  }
}

export default new UserController();
