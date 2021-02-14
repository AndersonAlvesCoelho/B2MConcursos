'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('discipline_subject', [
      { id_discipline_subject: 1, id_dicipline: 1, id_subject_niv_1: 2, id_subject_niv_2: null, id_subject_niv_3: null, id_subject_niv_4: null, id_subject_niv_5: null, id_subject_niv_6: null, id_subject_niv_7: null, created_at: new Date(), updated_at: new Date() },
      { id_discipline_subject: 2, id_dicipline: 2, id_subject_niv_1: 3, id_subject_niv_2: null, id_subject_niv_3: null, id_subject_niv_4: null, id_subject_niv_5: null, id_subject_niv_6: null, id_subject_niv_7: null, created_at: new Date(), updated_at: new Date() },
      { id_discipline_subject: 3, id_dicipline: 5, id_subject_niv_1: 8, id_subject_niv_2: 15, id_subject_niv_3: null, id_subject_niv_4: null, id_subject_niv_5: null, id_subject_niv_6: null, id_subject_niv_7: null, created_at: new Date(), updated_at: new Date() },
      { id_discipline_subject: 4, id_dicipline: 7, id_subject_niv_1: 11, id_subject_niv_2: null, id_subject_niv_3: null, id_subject_niv_4: null, id_subject_niv_5: null, id_subject_niv_6: null, id_subject_niv_7: null, created_at: new Date(), updated_at: new Date() },
      { id_discipline_subject: 5, id_dicipline: 7, id_subject_niv_1: 12, id_subject_niv_2: 20, id_subject_niv_3: null, id_subject_niv_4: null, id_subject_niv_5: null, id_subject_niv_6: null, id_subject_niv_7: null, created_at: new Date(), updated_at: new Date() },
      { id_discipline_subject: 6, id_dicipline: 11, id_subject_niv_1: 22, id_subject_niv_2: null, id_subject_niv_3: null, id_subject_niv_4: null, id_subject_niv_5: null, id_subject_niv_6: null, id_subject_niv_7: null, created_at: new Date(), updated_at: new Date() },
      { id_discipline_subject: 7, id_dicipline: 10, id_subject_niv_1: 20, id_subject_niv_2: null, id_subject_niv_3: null, id_subject_niv_4: null, id_subject_niv_5: null, id_subject_niv_6: null, id_subject_niv_7: null, created_at: new Date(), updated_at: new Date() },
      { id_discipline_subject: 8, id_dicipline: 15, id_subject_niv_1: 29, id_subject_niv_2: null, id_subject_niv_3: null, id_subject_niv_4: null, id_subject_niv_5: null, id_subject_niv_6: null, id_subject_niv_7: null, created_at: new Date(), updated_at: new Date() },
      { id_discipline_subject: 9, id_dicipline: 8, id_subject_niv_1: 15, id_subject_niv_2: null, id_subject_niv_3: null, id_subject_niv_4: null, id_subject_niv_5: null, id_subject_niv_6: null, id_subject_niv_7: null, created_at: new Date(), updated_at: new Date() },
      { id_discipline_subject: 10, id_dicipline: 4, id_subject_niv_1: 7, id_subject_niv_2: 13, id_subject_niv_3: null, id_subject_niv_4: null, id_subject_niv_5: null, id_subject_niv_6: null, id_subject_niv_7: null, created_at: new Date(), updated_at: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('discipline_subject', null, {});
  }
};
