import { Model, DataTypes } from "sequelize";

class Bank extends Model {
    static init(sequelize) {
        super.init(
            {
            
                name_bank: {
                    type: DataTypes.STRING,
                },
         
            },
            {
                sequelize,
                // schema: "public",
                // freezeTableName: true, // mantém o nome da tabela singular
                // tableName: "bank", // nome da tabela
                // timestamps: true,
            }
        );

        return this;
    }
}

export default Bank;