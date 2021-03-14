import { Model, DataTypes } from "sequelize";

class User extends Model {
    static init(sequelize) {
        super.init(
            {
                id_user: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                name: {
                    type: DataTypes.STRING,
                },
                email: {
                    type: DataTypes.STRING,
                },
                password: {
                    type: DataTypes.STRING,
                },
                nivel: {
                    type: DataTypes.STRING,
                },
            },
            {
                sequelize,
                schema: "public",
                freezeTableName: true, // mantém o nome da tabela singular
                tableName: "user", // nome da tabela
                timestamps: true,
            }

        );
        return this;
    }
}

export default User;
