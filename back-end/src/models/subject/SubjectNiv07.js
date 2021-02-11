import { Model, DataTypes } from "sequelize";

class SubjectNiv07 extends Model {
    static init(sequelize) {
        super.init(
            {
                id_subject_niv_7: {
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
                tableName: "subject_niv_7", // nome da tabela
                timestamps: true,
            }
        );
        return this;
    }

}


export default SubjectNiv07;
