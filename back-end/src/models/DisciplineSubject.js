import { Model, DataTypes } from "sequelize";

class DisciplineSubject extends Model {
    static init(sequelize) {
        super.init(
            {
                id_discipline_subject: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                id_dicipline: {
                    type: DataTypes.INTEGER,
                },
                id_subject_niv_1: {
                    type: DataTypes.INTEGER,
                },
                id_subject_niv_2: {
                    type: DataTypes.INTEGER,
                },
                id_subject_niv_3: {
                    type: DataTypes.INTEGER,
                },
                id_subject_niv_4: {
                    type: DataTypes.INTEGER,
                },
                id_subject_niv_5: {
                    type: DataTypes.INTEGER,
                },
                id_subject_niv_6: {
                    type: DataTypes.INTEGER,
                },
                id_subject_niv_7: {
                    type: DataTypes.INTEGER,
                },
            },
            {
                sequelize,
                schema: "public",
                freezeTableName: true, // mantém o nome da tabela singular
                tableName: "discipline_subject", // nome da tabela
                timestamps: true,
            }
        );
        return this;
    }


    static associate(models) {
        this.belongsTo(models.Dicipline, {
            foreignKey: "id_dicipline",
            as: "dicipline",
        });
        this.belongsTo(models.SubjectNiv01, {
            foreignKey: "id_subject_niv_1",
            as: "subject_niv_1",
        });
        this.belongsTo(models.SubjectNiv02, {
            foreignKey: "id_subject_niv_2",
            as: "subject_niv_2",
        });
        this.belongsTo(models.SubjectNiv03, {
            foreignKey: "id_subject_niv_3",
            as: "subject_niv_3",
        });
        this.belongsTo(models.SubjectNiv04, {
            foreignKey: "id_subject_niv_4",
            as: "subject_niv_4",
        });
        this.belongsTo(models.SubjectNiv05, {
            foreignKey: "id_subject_niv_5",
            as: "subject_niv_5",
        });
        this.belongsTo(models.SubjectNiv06, {
            foreignKey: "id_subject_niv_6",
            as: "subject_niv_6",
        });
        this.belongsTo(models.SubjectNiv07, {
            foreignKey: "id_subject_niv_7",
            as: "subject_niv_7",
        });
    }
}

export default DisciplineSubject;
