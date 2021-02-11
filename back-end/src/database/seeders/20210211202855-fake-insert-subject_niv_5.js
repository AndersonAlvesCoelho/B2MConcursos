'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('subject_niv_5', [
      { id_subject_niv_5: 1, id_subject_niv_4: 1, name_subject: "Bancos - Atendimento", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_5: 2, id_subject_niv_4: 4, name_subject: "Vendas", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_5: 3, id_subject_niv_4: 6, name_subject: "Direito Penal", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_5: 4, id_subject_niv_4: 7, name_subject: "Engenharia de Produção", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_5: 5, id_subject_niv_4: 9, name_subject: "Engenharia Elétrica e Eletrônica", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_5: 6, id_subject_niv_4: 12, name_subject: "Direito Processual Civil", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_5: 7, id_subject_niv_4: 14, name_subject: "Direito Processual do Trabalho", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_5: 8, id_subject_niv_4: 14, name_subject: "Física", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_5: 9, id_subject_niv_4: 16, name_subject: "Gestão de Projetos", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_5: 10, id_subject_niv_4: 17, name_subject: "História", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_5: 11, id_subject_niv_4: 17, name_subject: "Direitos Humanos", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_5: 12, id_subject_niv_4: 19, name_subject: "Direito Tributário", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_5: 13, id_subject_niv_4: 19, name_subject: "Direito Urbanístico", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_5: 14, id_subject_niv_4: 19, name_subject: "Fonoaudiologia", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_5: 15, id_subject_niv_4: 19, name_subject: "Engenharia Naval", created_at: new Date(), updated_at: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('subject_niv_5', null, {});
  }
};