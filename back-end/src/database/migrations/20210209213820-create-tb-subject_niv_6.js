'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'subject_niv_6',
      {
        id_subject_niv_6: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        name_subject: {
          type: Sequelize.STRING,
          allowNull: false
        },

        id_subject_niv_5: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'subject_niv_5', // name of Target model
            key: 'id_subject_niv_5', // key in Target model that we're referencing
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
    await queryInterface.dropTable('subject_niv_6', {
      schema: 'public'
    })
  }
}