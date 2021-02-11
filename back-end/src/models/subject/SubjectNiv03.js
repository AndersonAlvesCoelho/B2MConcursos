import { Model, DataTypes } from "sequelize";

class SubjectNiv03 extends Model {
    static init(sequelize) {
        super.init(
            {
                id_subject_niv_3: {
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
                tableName: "subject_niv_3", // nome da tabela
                timestamps: true,
            }
        );
        return this;
    }

    static associate(models) {
        this.hasMany(models.SubjectNiv04, {
            foreignKey: "id_subject_niv_3",
            as: "subject_niv_4",
        });
    }
}


export default SubjectNiv03;
