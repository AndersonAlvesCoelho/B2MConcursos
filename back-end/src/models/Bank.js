import { Model, DataTypes } from "sequelize";

class BankController extends Model {
    static init(sequelize) {
        super.init(
            {
                id_bank: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                },
                name_bank: {
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
                tableName: "bank", // nome da tabela
                timestamps: true,
            }
        );

        return this;
    }
}

export default BankController;
