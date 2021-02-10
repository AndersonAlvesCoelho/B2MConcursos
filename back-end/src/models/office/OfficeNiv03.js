import { Model, DataTypes } from "sequelize";

class OfficeNiv03 extends Model {
    static init(sequelize) {
        super.init(
            {
                id_office_niv_3: {
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
                tableName: "office_niv_3", // nome da tabela
                timestamps: true,
            }
        );

        return this;
    }

    static associate(models) {
        this.hasMany(models.OfficeNiv04, {
            foreignKey: "id_office_niv_3",
            as: "office_niv_4",
        });
    }
}

export default OfficeNiv03;
