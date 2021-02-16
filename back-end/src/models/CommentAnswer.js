import { Model, DataTypes } from "sequelize";

class CommentAnswer extends Model {
    static init(sequelize) {
        super.init(
            {
                id_comment_answer: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                },
                answer: {
                    type: DataTypes.TEXT,
                },
                id_user: {
                    type: DataTypes.INTEGER,
                },
                id_comment: {
                    type: DataTypes.INTEGER,
                },
            },
            {
                sequelize,
                schema: "public",
                freezeTableName: true, // mantém o nome da tabela singular
                tableName: "comment_answer", // nome da tabela
                timestamps: true,
            }
        );

        return this;
    }
    static associate(models) {
        this.belongsTo(models.User, {
            foreignKey: "id_user",
            as: "user",
        });
    }
}

export default CommentAnswer;