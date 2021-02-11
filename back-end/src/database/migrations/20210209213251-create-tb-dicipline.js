'use strict';

module.exports = {

    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable(
            'dicipline',
            {
                id_dicipline: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                    allowNull: false
                },
                name_dicipline: {
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
        await queryInterface.dropTable('bank', {
            schema: 'public'
        })
    }
}