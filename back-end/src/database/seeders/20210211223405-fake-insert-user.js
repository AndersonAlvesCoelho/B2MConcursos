'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('user', [
      { id_user: 1, name: 'SuperAdministrador' , email: 'superADM@gmail.com', password: '123456', nivel: 2, created_at: new Date(), updated_at: new Date() },
      { id_user: 2, name: 'Aluno' , email: 'aluno@gmail.com', password: '123456', nivel: 1, created_at: new Date(), updated_at: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user', null, {});
  }
};