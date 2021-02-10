'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('office_niv_3', [
      {id_office_niv_3: 1, name_office: 'Bacharel em direito', id_office_niv_2: 19, created_at: new Date(), updated_at: new Date()},
      {id_office_niv_3: 2, name_office: 'curso superior completo', id_office_niv_2: 20, created_at: new Date(), updated_at: new Date()},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('office_niv_3', null, {});
  }
};
