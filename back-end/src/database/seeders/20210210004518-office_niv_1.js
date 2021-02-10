'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('office_niv_1', [
      { id_office_niv_1: 1, name_office: 'Oficial judiciário', created_at: new Date(), updated_at: new Date() },
      { id_office_niv_1: 2, name_office: 'Técnico judiciário', created_at: new Date(), updated_at: new Date() },
      { id_office_niv_1: 3, name_office: 'Analista de sistemas', created_at: new Date(), updated_at: new Date() },
      { id_office_niv_1: 4, name_office: 'Auxiliar de comunicação',created_at: new Date(), updated_at: new Date()},
      { id_office_niv_1: 5, name_office: 'Escrevente', created_at: new Date(), updated_at: new Date() },
      { id_office_niv_1: 6, name_office: 'Oficial ajudante', created_at: new Date(), updated_at: new Date() },
      { id_office_niv_1: 7, name_office: 'Programador', created_at: new Date(), updated_at: new Date() },
      { id_office_niv_1: 8, name_office: 'Técnico em eletrônica', created_at: new Date(), updated_at: new Date() },
      { id_office_niv_1: 9, name_office: 'Técnico em informática', created_at: new Date(), updated_at: new Date() },
      { id_office_niv_1: 10, name_office: 'Analista judiciário', created_at: new Date(), updated_at: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('office_niv_1', null, {});
  }
};