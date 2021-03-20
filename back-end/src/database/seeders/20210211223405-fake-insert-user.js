'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('user', [
      { id_user: 1, nome: 'SuperAdministrador' , email: 'superADM@gmail.com', password: '123456', nivel: 1, created_at: new Date(), updated_at: new Date() },
      { id_user: 2, nome: 'Administrador' , email: 'ADM@gmail.com', password: '123456', nivel: 2, created_at: new Date(), updated_at: new Date() },
      { id_user: 3, nome: 'Colaborador' , email: 'colaborador@gmail.com', password: '123456', nivel: 3, created_at: new Date(), updated_at: new Date() },
      { id_user: 4, nome: 'Professor' , email: 'professor@gmail.com', password: '123456', nivel: 4, created_at: new Date(), updated_at: new Date() },
      { id_user: 5, nome: 'Apoiador' , email: 'apoiador@gmail.com', password: '123456', nivel: 5, created_at: new Date(), updated_at: new Date() },
      { id_user: 6, nome: 'Aluno' , email: 'aluno@gmail.com', password: '123456', nivel: 6, created_at: new Date(), updated_at: new Date() },
      { id_user: 7, nome: 'Usuario' , email: 'usuario@gmail.com', password: '123456', nivel: 7, created_at: new Date(), updated_at: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user', null, {});
  }
};