import { Model, DataTypes } from "sequelize";

class Comment extends Model {
    static init(sequelize) {
        super.init(
            {
                id_comment: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                comment: {
                    type: DataTypes.TEXT,
                },
                id_user: {
                    type: DataTypes.INTEGER,
                },
                id_question: {
                    type: DataTypes.INTEGER,
                },
            },
            {
                sequelize,
                schema: "public",
                freezeTableName: true, // mantém o nome da tabela singular
                tableName: "comment", // nome da tabela
                timestamps: true,
            }
        );

        return this;
    }
    static associate(models) {
        this.hasMany(models.CommentAnswer, {
            foreignKey: "id_comment",
            as: "comment_answer",
        });
        this.belongsTo(models.User, {
            foreignKey: "id_user",
            as: "user",
        });
    }
}

export default Comment;