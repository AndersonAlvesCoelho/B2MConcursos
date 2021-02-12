import { Model, DataTypes } from "sequelize";

class Question extends Model {
    static init(sequelize) {
        super.init(
            {
                id_dicipline: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                },
                name_dicipline: {
                    type: DataTypes.STRING,
                },
            },
            {
                sequelize,
                schema: "public",
                freezeTableName: true, // mantém o nome da tabela singular
                tableName: "question", // nome da tabela
                timestamps: true,
            }
        );
        return this;
    }

    static associate(models) {
        this.hasMany(models.SubjectNiv01, {
            foreignKey: "id_dicipline",
            as: "subject_niv_1",
        });
    }
}

export default Question;
