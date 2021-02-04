import { Model, DataTypes } from "sequelize";

class InstitutionController extends Model {
    static init(sequelize) {
        super.init(
            {
                id_office_niv_1: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                },
                name_office: {
                    type: DataTypes.STRING,
                },
            },
            {
                sequelize,
                schema: "public",
                freezeTableName: true, // mantém o nome da tabela singular
                tableName: "office_niv_1", // nome da tabela
                timestamps: true,
            }
        );

        return this;
    }
}

export default InstitutionController;
