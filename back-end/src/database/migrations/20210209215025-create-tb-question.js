'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'question',
      {
        id_question: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        office_coordinate:{
          type: Sequelize.STRING,
          allowNull: false
        },
        discipline_coordinate:{
          type: Sequelize.STRING,
          allowNull: false
        },
        id_bank: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'bank', // name of Target model
            key: 'id_bank', // key in Target model that we're referencing
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        id_institution: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'institution', // name of Target model
            key: 'id_institution', // key in Target model that we're referencing
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        year: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        issue_resolution: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        id_user: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'user', // name of Target model
            key: 'id_user', // key in Target model that we're referencing
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        enunciated: {
          type: Sequelize.TEXT,
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
    await queryInterface.dropTable('question', {
      schema: 'public'
    })
  }
}