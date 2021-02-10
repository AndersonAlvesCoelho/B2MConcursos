import { Sequelize } from "sequelize";
import dbConfig from "../config/database";

//BD b2mconcursos
import Bank from "../models/Bank";
import OfficeNiv01 from "../models/office/OfficeNiv01";
import OfficeNiv02 from "../models/office/OfficeNiv02";
import OfficeNiv03 from "../models/office/OfficeNiv03";
import OfficeNiv04 from "../models/office/OfficeNiv04";

const modelsDbB2mConcursos = [
    Bank,
    OfficeNiv01,
    OfficeNiv02,
    OfficeNiv03,
    OfficeNiv04,
];

class Database {
    constructor() {
        this.init();
    }
    init() {
        // models para o banco b2mconcursos
        const dbB2mConcursos = new Sequelize(dbConfig["development"]);
        modelsDbB2mConcursos
            .map((model) => model.init(dbB2mConcursos))
            .map((model) => {
                if (model.associate) model.associate(dbB2mConcursos.models);
                return model;
            });
    }
}
export default new Database();
