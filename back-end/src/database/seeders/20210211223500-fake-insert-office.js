'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('office', [
      { id_office: 1, id_office_niv_1: 1, id_office_niv_2: null, id_office_niv_3: null, id_office_niv_4: null, created_at: new Date(), updated_at: new Date() },
      { id_office: 2, id_office_niv_1: 2, id_office_niv_2: null, id_office_niv_3: null, id_office_niv_4: null, created_at: new Date(), updated_at: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('office', null, {});
  }
};
