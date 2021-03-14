import User from "../models/User";

class UserController {

  async index(req, res) {
    try {
      const data = await User.findAll();
      return res.json(data) ;
    } catch (error) {
      res.status(400).json({ message: `Erro ao retornar os dados. ${error}` });
    }
  }

  async store(req, res) {
    try {
      const {
        //general info
        name,
        email,
        password
      } = req.body

      const user = await User.create({
        email: email,
        name: name,
        password: password,
        nivel: 1,
      }).then(function (result) {
        if (result) {
          return result
        } else {
          res.status(400).send('Erro ao inserir instituição')
        }
      })

      return res.json(user)
    } catch (error) {
      res.status(400).json({ message: `Erro ao retornar os dados. ${error}` });
    }
  }

}

export default new UserController();
