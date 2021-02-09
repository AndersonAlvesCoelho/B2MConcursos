import { Sequelize } from "sequelize";
import dbConfig from "../config/database";

//BD b2mconcursos
import Bank from "../models/Bank";

const modelsDbB2mConcursos = [
    Bank,
];

class Database {
    constructor() {
        this.init();
    }
    init() {
        // models para o banco b2mconcursos
        const dbB2mConcursos = new Sequelize(dbConfig["b2mconcursos"]);
        modelsDbB2mConcursos
            .map((model) => model.init(dbB2mConcursos))
            .map((model) => {
                if (model.associate) model.associate(dbB2mConcursos.models);
                return model;
            });
    }
}
export default new Database();
