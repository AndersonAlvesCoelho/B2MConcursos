'use strict';

module.exports = {

    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable(
            'institution',
            {
                id_institution: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                    allowNull: false
                },
                name_institution: {
                    type: Sequelize.STRING,
                    allowNull: false
                },

                // Timestamps
                created_at: {
                    type: Sequelize.DATE,
                    allowNull: false
                },
                updated_at: {
                    type: Sequelize.DATE,
                    allowNull: false
                },
            }
        )
    },

    down: async (queryInterface) => {
        await queryInterface.dropTable('institution', {
            schema: 'public'
        })
    }
}