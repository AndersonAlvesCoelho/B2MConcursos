import { Model, DataTypes } from "sequelize";

class Institution extends Model {
    static init(sequelize) {
        super.init(
            {
                id_institution: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                name_institution: {
                    type: DataTypes.STRING,
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

export default Institution;
