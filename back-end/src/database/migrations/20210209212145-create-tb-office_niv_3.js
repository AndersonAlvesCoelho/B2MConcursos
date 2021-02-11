'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'office_niv_3',
      {
        id_office_niv_3: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        name_office: {
          type: Sequelize.STRING,
          allowNull: false
        },

        id_office_niv_2: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'office_niv_2', // name of Target model
            key: 'id_office_niv_2', // key in Target model that we're referencing
          },
          onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
    await queryInterface.dropTable('office_niv_3', {
      schema: 'public'
    })
  }
}