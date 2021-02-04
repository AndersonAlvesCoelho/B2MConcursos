import  Sequelize from "sequelize";
import dbConfig from "../config/database";

//BD b2mconcursos
// import BankController from "../models/BankController";
// import OfficeController from "../models/OfficeController";
// import Institution from "../models/Institution";
//
// const modelsDbB2mconcursos = [
//     BankController,
//     OfficeController,
//     Institution,
// ];


class Database {
    constructor() {
        this.init();
    }

    init() {
        // models para o banco b2mconcursos
        // const dbB2mconcursos = new Sequelize(dbConfig["b2mconcursos"]);
        // modelsDbB2mconcursos
        //     .map((model) => model.init(dbB2mconcursos))
        //     .map((model) => {
        //         if (model.associate) model.associate(dbB2mconcursos.models);
        //         return model;
        //     });
    }
}

export default new Database();
