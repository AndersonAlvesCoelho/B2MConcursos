import { Model, DataTypes } from "sequelize";

class SubjectNiv05 extends Model {
    static init(sequelize) {
        super.init(
            {
                id_subject_niv_5: {
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
                tableName: "subject_niv_5", // nome da tabela
                timestamps: true,
            }
        );
        return this;
    }

    static associate(models) {
        this.hasMany(models.SubjectNiv06, {
            foreignKey: "id_subject_niv_5",
            as: "subject_niv_6",
        });
    }
}


export default SubjectNiv05;
