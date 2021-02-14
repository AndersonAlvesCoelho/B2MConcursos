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

        id_office: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'office', // name of Target model
            key: 'id_office', // key in Target model that we're referencing
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },

        id_discipline_subject: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'discipline_subject', // name of Target model
            key: 'id_discipline_subject', // key in Target model that we're referencing
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
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