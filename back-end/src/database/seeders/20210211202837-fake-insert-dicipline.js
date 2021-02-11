'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('dicipline', [
      { id_dicipline: 1, name_dicipline: "Bancos - Atendimento", created_at: new Date(), updated_at: new Date() },
      { id_dicipline: 2, name_dicipline: "Vendas", created_at: new Date(), updated_at: new Date() },
      { id_dicipline: 3, name_dicipline: "Direito Penal", created_at: new Date(), updated_at: new Date() },
      { id_dicipline: 4, name_dicipline: "Engenharia de Produção", created_at: new Date(), updated_at: new Date() },
      { id_dicipline: 5, name_dicipline: "Engenharia Elétrica e Eletrônica", created_at: new Date(), updated_at: new Date() },
      { id_dicipline: 6, name_dicipline: "Direito Processual Civil", created_at: new Date(), updated_at: new Date() },
      { id_dicipline: 7, name_dicipline: "Direito Processual do Trabalho", created_at: new Date(), updated_at: new Date() },
      { id_dicipline: 8, name_dicipline: "Física", created_at: new Date(), updated_at: new Date() },
      { id_dicipline: 9, name_dicipline: "Gestão de Projetos", created_at: new Date(), updated_at: new Date() },
      { id_dicipline: 10, name_dicipline: "História", created_at: new Date(), updated_at: new Date() },
      { id_dicipline: 11, name_dicipline: "Direitos Humanos", created_at: new Date(), updated_at: new Date() },
      { id_dicipline: 12, name_dicipline: "Direito Tributário", created_at: new Date(), updated_at: new Date() },
      { id_dicipline: 13, name_dicipline: "Direito Urbanístico", created_at: new Date(), updated_at: new Date() },
      { id_dicipline: 14, name_dicipline: "Fonoaudiologia", created_at: new Date(), updated_at: new Date() },
      { id_dicipline: 15, name_dicipline: "Engenharia Naval", created_at: new Date(), updated_at: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('dicipline', null, {});
  }
};