import Bank from "../models/Bank";

class BankController {

  // retorna municipio por geocodes
  async index(req, res) {
    try {
      const data = await Bank.findAll();
      return res.json(data) ;
    } catch (error) {
      res.status(400).json({ message: `Erro ao retornar os dados. ${error}` });
    }
  }
}

export default new BankController();
