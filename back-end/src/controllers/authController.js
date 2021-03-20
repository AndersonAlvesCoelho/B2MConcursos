import User from "../models/User";

class UserController {

  async index(req, res) {
    try {
      const data = await User.findAll();
      return res.json(data);
    } catch (error) {
      res.status(400).json({ message: `Erro ao retornar os dados. ${error}` });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const data = await User.findAll({
        where: {
          email: email,
          password: password
        }
      })  

      if (data.length !== 0) {
        res.status(201).json({ message: 'auth/access', user: data });
      } else {
        res.status(401).json({ message: 'auth/erro-auth-user', user: null });
      }
    } catch (error) {
      res.status(400).json({ message: `Erro ao retornar os dados. ${error}` });
    }

  }
}

export default new UserController();
