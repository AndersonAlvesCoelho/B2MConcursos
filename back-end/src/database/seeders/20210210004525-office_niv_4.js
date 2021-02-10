'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('office_niv_4', [
      { id_office_niv_4: 1, name_office: 'Lero lero', id_office_niv_3: 2, created_at: new Date(), updated_at: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('office_niv_4', null, {});
  }
};
