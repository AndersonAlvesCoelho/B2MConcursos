'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('user', [
      { id_user: 1, email: 'SuperAdministrador', password: '123456', nivel: 1, created_at: new Date(), updated_at: new Date() },
      { id_user: 2, email: 'Administrador', password: '123456', nivel: 2, created_at: new Date(), updated_at: new Date() },
      { id_user: 3, email: 'Colaborador', password: '123456', nivel: 3, created_at: new Date(), updated_at: new Date() },
      { id_user: 4, email: 'Professor', password: '123456', nivel: 4, created_at: new Date(), updated_at: new Date() },
      { id_user: 5, email: 'Apoiador', password: '123456', nivel: 5, created_at: new Date(), updated_at: new Date() },
      { id_user: 6, email: 'Aluno', password: '123456', nivel: 6, created_at: new Date(), updated_at: new Date() },
      { id_user: 7, email: 'Usuario', password: '123456', nivel: 7, created_at: new Date(), updated_at: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user', null, {});
  }
};