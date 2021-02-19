'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'discipline_subject',
      {
        id_discipline_subject: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
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
        id_subject_niv_1: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: 'subject_niv_1', // name of Target model
            key: 'id_subject_niv_1', // key in Target model that we're referencing
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
      
        id_subject_niv_2: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: 'subject_niv_2', // name of Target model
            key: 'id_subject_niv_2', // key in Target model that we're referencing
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
      
        id_subject_niv_3: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: 'subject_niv_3', // name of Target model
            key: 'id_subject_niv_3', // key in Target model that we're referencing
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        id_subject_niv_4: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: 'subject_niv_4', // name of Target model
            key: 'id_subject_niv_4', // key in Target model that we're referencing
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        id_subject_niv_5: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: 'subject_niv_5', // name of Target model
            key: 'id_subject_niv_5', // key in Target model that we're referencing
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        id_subject_niv_6: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: 'subject_niv_6', // name of Target model
            key: 'id_subject_niv_6', // key in Target model that we're referencing
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        id_subject_niv_7: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: 'subject_niv_7', // name of Target model
            key: 'id_subject_niv_7', // key in Target model that we're referencing
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
    await queryInterface.dropTable('office', {
      schema: 'discipline_subject'
    })
  }
}