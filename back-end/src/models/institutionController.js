import { Model, DataTypes } from "sequelize";

class InstitutionController extends Model {
    static init(sequelize) {
        super.init(
            {
                id_institution: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                },
                name_institution: {
                    type: DataTypes.STRING,
                },
                created_at: {
                    type: DataTypes.DATE,
                },
                updated_at: {
                    type: DataTypes.DATE,
                },
            },
            {
                sequelize,
                schema: "public",
                freezeTableName: true, // mantém o nome da tabela singular
                tableName: "institution", // nome da tabela
                timestamps: true,
            }
        );

        return this;
    }
}

export default InstitutionController;
