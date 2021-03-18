'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
          'user_answers_question',
          'check',
          {
            type: Sequelize.DataTypes.BOOLEAN,
            allowNull: true,
          },
      ),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('user_answers_question', 'check'),
    ]);
  }
};
