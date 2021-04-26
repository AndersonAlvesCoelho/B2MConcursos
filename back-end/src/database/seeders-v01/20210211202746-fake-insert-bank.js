'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('bank', [
      { id_bank: 1, name_bank: 'Consulplan', created_at: new Date(), updated_at: new Date() },
      { id_bank: 2, name_bank: 'Vunesp', created_at: new Date(), updated_at: new Date() },
      { id_bank: 3, name_bank: 'IESES', created_at: new Date(), updated_at: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('bank', null, {});
  }
};