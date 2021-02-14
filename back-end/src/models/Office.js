import { Model, DataTypes } from "sequelize";

class Office extends Model {
    static init(sequelize) {
        super.init(
            {
                id_office: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                },
                id_office_niv_1: {
                    type: DataTypes.INTEGER,
                },
                id_office_niv_2: {
                    type: DataTypes.INTEGER,
                },
                id_office_niv_3: {
                    type: DataTypes.INTEGER,
                },
                id_office_niv_4: {
                    type: DataTypes.INTEGER,
                },
              
            },
            {
                sequelize,
                schema: "public",
                freezeTableName: true, // mantém o nome da tabela singular
                tableName: "office", // nome da tabela
                timestamps: true,
            }
        );
        return this;
    }


    static associate(models) {
        this.belongsTo(models.OfficeNiv01, {
            foreignKey: "id_office_niv_1",
            as: "office_niv_1",
        });
        this.belongsTo(models.OfficeNiv02, {
            foreignKey: "id_office_niv_2",
            as: "office_niv_2",
        });
        this.belongsTo(models.OfficeNiv03, {
            foreignKey: "id_office_niv_3",
            as: "office_niv_3",
        });
        this.belongsTo(models.OfficeNiv04, {
            foreignKey: "id_office_niv_4",
            as: "office_niv_4",
        });
    }
}

export default Office;
