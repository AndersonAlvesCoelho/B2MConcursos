'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
          'user',
          'name',
          {
            type: Sequelize.STRING,
            allowNull: true,
          },
      ),
      queryInterface.addColumn(
          'user',
          'email',
          {
            type: Sequelize.STRING,
            allowNull: true,
          },
      ),
      queryInterface.removeColumn(
          'user',
          'login',
      ),

    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('user', 'name'),
      queryInterface.removeColumn('user', 'login'),
    ]);
  }
};
