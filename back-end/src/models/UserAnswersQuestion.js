import { Model, DataTypes } from "sequelize";

class UserAnswersQuestion extends Model {
    static init(sequelize) {
        super.init(
            {
                id_user_answers_question: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                id_user: {
                    type: DataTypes.INTEGER
                },
                id_question: {
                    type: DataTypes.INTEGER
                },
                answer: {
                    type: DataTypes.BOOLEAN
                },

            },
            {
                sequelize,
                schema: "public",
                freezeTableName: true, // mantém o nome da tabela singular
                tableName: "user_answers_question", // nome da tabela
                timestamps: true,
            },
        );
        return this;
    }

    static associate(models) {
        this.belongsTo(models.User, {
            foreignKey: "id_user",
            as: "user",
        });
        this.belongsTo(models.Question, {
            foreignKey: "id_question",
            as: "question",
        });
    }
}

export default UserAnswersQuestion;
