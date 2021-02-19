'use strict'

module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
        'bank',
        {
          id_bank: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          },
          name_bank: {
            type: Sequelize.STRING,
            allowNull: false
          },

          // Timestamps
          created_at: Sequelize.DATE,
          updated_at: Sequelize.DATE,
        }
    )
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('bank', {
      schema: 'public'
    })
  }

}