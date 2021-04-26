'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('discipline_subject', [
      { id_discipline_subject: 1, id_dicipline: 1, id_subject_niv_1: null, id_subject_niv_2: null, id_subject_niv_3: null, id_subject_niv_4: null, id_subject_niv_5: null, id_subject_niv_6: null, id_subject_niv_7: null, created_at: new Date(), updated_at: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('discipline_subject', null, {});
  }
};
