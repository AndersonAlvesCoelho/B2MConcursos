import { Model, DataTypes } from "sequelize";

class Alternative extends Model {
    static init(sequelize) {
        super.init(
            {
                id_alternative: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                name_alternative: {
                    type: DataTypes.TEXT,
                },
                answer: {
                    type: DataTypes.BOOLEAN,
                },
                id_question: {
                    type: DataTypes.INTEGER,
                },
            },
            {
                sequelize,
                schema: "public",
                freezeTableName: true, // mantém o nome da tabela singular
                tableName: "alternative", // nome da tabela
                timestamps: true,
            }
        );

        return this;
    }
}

export default Alternative;



