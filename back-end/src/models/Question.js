import {DataTypes} from "sequelize";

const { Model } = require('sequelize')

class Question extends Model {
    static init(sequelize) {
        super.init({
                id_question: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                },

                year: {
                    type: DataTypes.INTEGER(4),
                },

                issue_resolution: {
                    type: DataTypes.TEXT,
                },

                enunciated: {
                    type: DataTypes.TEXT,
                },
        },
            {
                sequelize,
                schema: "public",
                freezeTableName: true, // mantém o nome da tabela singular
                tableName: "dicipline", // nome da tabela
                timestamps: true,
            })
    }

    static associate(models) {
        this.hasMany(models.Bank, {
            foreignKey: "id_bank",
            as: "bank",
        });

        this.hasMany(models.office.OfficeNiv01, {
            foreignKey: "id_office_niv_1",
            as: "office_niv_1",
        });

        this.hasMany(models.Institution, {
            foreignKey: "id_institution",
            as: "institution",
        });

        this.hasMany(models.Dicipline, {
            foreignKey: "id_dicipline",
            as: "dicipline",
        });

    }
}

module.exports = Question;