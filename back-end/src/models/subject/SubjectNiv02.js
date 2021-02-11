import { Model, DataTypes } from "sequelize";

class SubjectNiv02 extends Model {
    static init(sequelize) {
        super.init(
            {
                id_subject_niv_2: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                },
                name_subject: {
                    type: DataTypes.STRING,
                },
            },
            {
                sequelize,
                schema: "public",
                freezeTableName: true, // mantém o nome da tabela singular
                tableName: "subject_niv_2", // nome da tabela
                timestamps: true,
            }
        );
        return this;
    }

    static associate(models) {
        this.hasMany(models.SubjectNiv03, {
            foreignKey: "id_subject_niv_2",
            as: "subject_niv_3",
        });
    }
}


export default SubjectNiv02;
