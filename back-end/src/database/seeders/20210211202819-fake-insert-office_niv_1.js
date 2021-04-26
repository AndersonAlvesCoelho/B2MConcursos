'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('office_niv_1', [
      { id_office_niv_1: 1, name_office: 'Provimento', created_at: new Date(), updated_at: new Date() },
      { id_office_niv_1: 2, name_office: 'Remoção', created_at: new Date(), updated_at: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('office_niv_1', null, {});
  }
};