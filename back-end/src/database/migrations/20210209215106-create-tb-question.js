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
        id_office_niv_1: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'office_niv_1', // name of Target model
            key: 'id_office_niv_1', // key in Target model that we're referencing
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
          type: Sequelize.STRING,
          allowNull: false
        },
        id_dicipline: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'dicipline', // name of Target model
            key: 'id_dicipline', // key in Target model that we're referencing
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
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
        id_comment: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'comment', // name of Target model
            key: 'id_comment', // key in Target model that we're referencing
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },

        enunciated: {
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