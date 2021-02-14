'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'office',
      {
        id_office: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
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
        id_office_niv_2: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: 'office_niv_2', // name of Target model
            key: 'id_office_niv_2', // key in Target model that we're referencing
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
      
        id_office_niv_3: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: 'office_niv_3', // name of Target model
            key: 'id_office_niv_3', // key in Target model that we're referencing
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
      
        id_office_niv_4: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: 'office_niv_4', // name of Target model
            key: 'id_office_niv_4', // key in Target model that we're referencing
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
      schema: 'public'
    })
  }
}