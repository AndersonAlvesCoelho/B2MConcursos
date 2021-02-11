'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'alternative',
      {
        id_alternative: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        name_alternative: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        answer: {
          type: Sequelize.BOOLEAN,
          allowNull: false
        },
        id_question: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'question', // name of Target model
            key: 'id_question', // key in Target model that we're referencing
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
    await queryInterface.dropTable('alternative', {
      schema: 'public'
    })
  }
}