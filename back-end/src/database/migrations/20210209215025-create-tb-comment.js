'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'comment',
      {
        id_comment: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        comment: {
          type: Sequelize.STRING,
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
    await queryInterface.dropTable('comment', {
      schema: 'public'
    })
  }
}