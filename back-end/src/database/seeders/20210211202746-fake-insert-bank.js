'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('bank', [
      { name_bank: 'Consulplan', created_at: new Date(), updated_at: new Date()},
      { name_bank: 'Vunesp', created_at: new Date(), updated_at: new Date()},
      { name_bank: 'IESES', created_at: new Date(), updated_at: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('bank', null, {});
  }
};