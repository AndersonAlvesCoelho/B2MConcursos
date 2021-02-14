import { Model, DataTypes } from "sequelize";

class Question extends Model {
    static init(sequelize) {
        super.init(

            {
                id_question: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                },
                id_office: {
                    type: DataTypes.INTEGER,
                },
                id_discipline_subject: {
                    type: DataTypes.INTEGER,
                },
                year: {
                    type: DataTypes.INTEGER,
                },
                issue_resolution: {
                    type: DataTypes.TEXT,
                },
                enunciated: {
                    type: DataTypes.TEXT,
                },
                id_bank: {
                    type: DataTypes.INTEGER,
                },
                id_institution: {
                    type: DataTypes.INTEGER,
                },
                id_user: {
                    type: DataTypes.INTEGER,
                },
            },
            {
                sequelize,
                schema: "public",
                freezeTableName: true, // mantém o nome da tabela singular
                tableName: "question", // nome da tabela
                timestamps: true,
            },
        );
        return this;
    }

    static associate(models) {
        this.belongsTo(models.Office, {
            foreignKey: "id_office",
            as: "office",
        });
        this.belongsTo(models.DisciplineSubject, {
            foreignKey: "id_discipline_subject",
            as: "discipline_subject",
        });
        this.belongsTo(models.Bank, {
            foreignKey: "id_bank",
            as: "bank",
        });
        this.belongsTo(models.Institution, {
            foreignKey: "id_institution",
            as: "institution",
        });
        this.belongsTo(models.User, {
            foreignKey: "id_user",
            as: "user",
        });
        this.hasMany(models.Alternative, {
            foreignKey: "id_question",
            as: "alternative",
        });

        this.hasMany(models.Comment, {
            foreignKey: "id_question",
            as: "comment",
        });
    }
}

export default Question;
