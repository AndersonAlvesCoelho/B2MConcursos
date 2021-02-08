import { Sequelize } from "sequelize";
import dbConfig from "../config/database";

//BD b2mconcursos
import BankController from "../models/bankController";
// import InstitutionController from "../models/institutionController";

// import OfficeNiv01Controller from "../models/office/officeNiv01Controller";
// import OfficeNiv02Controller from "../models/office/officeNiv02Controller";
// import OfficeNiv03Controller from "../models/office/officeNiv03Controller";
// import OfficeNiv04Controller from "../models/office/officeNiv04Controller";

const modelsDbB2mconcursos = [
    BankController,
    // InstitutionController,

    // OfficeNiv01Controller,
    // OfficeNiv02Controller,
    // OfficeNiv03Controller,
    // OfficeNiv04Controller,
];

class Database {
    constructor() {
        this.init();
    }
    init() {
        // models para o banco b2mconcursos
        const dbB2mconcursos = new Sequelize(dbConfig["b2mconcursos"]);
        modelsDbB2mconcursos
            .map((model) => model.init(dbB2mconcursos))
            .map((model) => {
                if (model.associate) model.associate(dbB2mconcursos.models);
                return model;
            });
    }
}
export default new Database();
