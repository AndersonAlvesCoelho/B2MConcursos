'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('office', [
      { id_office: 1, id_office_niv_1: 1, id_office_niv_2: 1, id_office_niv_3: null, id_office_niv_4: null, created_at: new Date(), updated_at: new Date() },
      { id_office: 2, id_office_niv_1: 2, id_office_niv_2: 7, id_office_niv_3: null, id_office_niv_4: null, created_at: new Date(), updated_at: new Date() },
      { id_office: 3, id_office_niv_1: 3, id_office_niv_2: 15, id_office_niv_3: null, id_office_niv_4: null, created_at: new Date(), updated_at: new Date() },
      { id_office: 4, id_office_niv_1: 2, id_office_niv_2: 8, id_office_niv_3: null, id_office_niv_4: null, created_at: new Date(), updated_at: new Date() },
      { id_office: 5, id_office_niv_1: 5, id_office_niv_2: null, id_office_niv_3: null, id_office_niv_4: null, created_at: new Date(), updated_at: new Date() },
      { id_office: 6, id_office_niv_1: 6, id_office_niv_2: null, id_office_niv_3: null, id_office_niv_4: null, created_at: new Date(), updated_at: new Date() },
      { id_office: 7, id_office_niv_1: 7, id_office_niv_2: 16, id_office_niv_3: null, id_office_niv_4: null, created_at: new Date(), updated_at: new Date() },
      { id_office: 8, id_office_niv_1: 8, id_office_niv_2: 17, id_office_niv_3: null, id_office_niv_4: null, created_at: new Date(), updated_at: new Date() },
      { id_office: 9, id_office_niv_1: 9, id_office_niv_2: 18, id_office_niv_3: null, id_office_niv_4: null, created_at: new Date(), updated_at: new Date() },
      { id_office: 10, id_office_niv_1: 10, id_office_niv_2: 20, id_office_niv_3: 2, id_office_niv_4: 1, created_at: new Date(), updated_at: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('office', null, {});
  }
};
