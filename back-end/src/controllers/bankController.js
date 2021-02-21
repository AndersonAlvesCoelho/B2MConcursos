import Bank from "../models/Bank";

class BankController {

  async index(req, res) {
    try {
      const data = await Bank.findAll({

        attributes: { exclude: ['id_bank', 'created_at', 'updated_at'] },
      });
      return res.json(data) ;
    } catch (error) {
      res.status(400).json({ message: `Erro ao retornar os dados. ${error}` });
    }
  }
}

export default new BankController();
