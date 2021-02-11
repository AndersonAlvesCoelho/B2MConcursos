import { Model, DataTypes } from "sequelize";

class OfficeNiv01 extends Model {
    static init(sequelize) {
        super.init(
            {
                id_office_niv_1: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                },
                name_office: {
                    type: DataTypes.STRING,
                },
            },
            {
                sequelize,
                schema: "public",
                freezeTableName: true, // mantém o nome da tabela singular
                tableName: "office_niv_1", // nome da tabela
                timestamps: true,
            }
        );
        return this;
    }

    static associate(models) {
        this.hasMany(models.OfficeNiv02, {
            foreignKey: "id_office_niv_1",
            as: "office_niv_2",
        });
    }
}

export default OfficeNiv01;
