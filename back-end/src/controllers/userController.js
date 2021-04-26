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

  async store(req, res) {
    try {
      const {
        name,
        email,
        password
      } = req.body

      const emailExist = await User.findAll({ where: { email: email } });
      
      if (emailExist.length === 0) {
        await User.create({
          email: email,
          name: name,
          password: password,
          nivel: 1,
        }).then(function (result) {
          if (result) {
            return res.status(201).send('auth/create-user');
          } else {
            return res.status(401).send('auth/erro-register-user')
          }
        })

      } else {
        return res.status(401).send('auth/invalid-exist-email');
      }
    } catch (error) {
      res.status(400).json({ message: `Erro ao retornar os dados. ${error}` });
    }
  }

}

export default new UserController();
