import { Model, DataTypes } from "sequelize";

class SubjectNiv06 extends Model {
    static init(sequelize) {
        super.init(
            {
                id_subject_niv_6: {
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
                tableName: "subject_niv_6", // nome da tabela
                timestamps: true,
            }
        );
        return this;
    }

    static associate(models) {
        this.hasMany(models.SubjectNiv07, {
            foreignKey: "id_subject_niv_6",
            as: "subject_niv_7",
        });
    }
}


export default SubjectNiv06;
