import { Model, DataTypes } from "sequelize";

class OfficeNiv02 extends Model {
    static init(sequelize) {
        super.init(
            {
                id_office_niv_2: {
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
                tableName: "office_niv_2", // nome da tabela
                timestamps: true,
            }
        );

        return this;
    }

    static associate(models) {
        this.hasMany(models.OfficeNiv03, {
            foreignKey: "id_office_niv_2",
            as: "office_niv_3",
        });
    }
}

export default OfficeNiv02;
