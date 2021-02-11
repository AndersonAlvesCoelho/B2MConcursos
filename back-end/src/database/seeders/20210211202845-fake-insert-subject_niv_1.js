'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('subject_niv_1', [
      { id_subject_niv_1: 1, id_dicipline: 1, name_subject: "Princípios do Direito Eleitoral", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_1: 2, id_dicipline: 1, name_subject: "Direitos Políticos", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_1: 3, id_dicipline: 2, name_subject: "Dos partidos políticos (Lei 9.096/1995 e posteriores alterações)", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_1: 4, id_dicipline: 2, name_subject: "Organização da Justiça Eleitoral (arts. 118 a 121 da CF; arts. 12 a 41 do CE)", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_1: 5, id_dicipline: 3, name_subject: "Ministério Público Eleitoral", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_1: 6, id_dicipline: 4, name_subject: "Das eleições", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_1: 7, id_dicipline: 4, name_subject: "Recursos eleitorais (arts. 257 a 282 do Código Eleitoral)", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_1: 8, id_dicipline: 5, name_subject: "Ações Específicas", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_1: 9, id_dicipline: 6, name_subject: "Outros Temas", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_1: 10, id_dicipline: 7, name_subject: "Questões envolvendo múltiplos normativos de Direito Eleitoral", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_1: 11, id_dicipline: 7, name_subject: "Jurisprudência e Súmulas do TSE", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_1: 12, id_dicipline: 7, name_subject: "Medicina do Trabalho", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_1: 13, id_dicipline: 8, name_subject: "Meteorologia e Astrologia", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_1: 14, id_dicipline: 8, name_subject: "Minas, Energia e Recursos Hídricos", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_1: 15, id_dicipline: 8, name_subject: "Museologia", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_1: 16, id_dicipline: 8, name_subject: "Nutrição, Gastronomia e Engenharia de Alimentos", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_1: 17, id_dicipline: 8, name_subject: "Oceanografia", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_1: 18, id_dicipline: 9, name_subject: "Odontologia", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_1: 19, id_dicipline: 9, name_subject: "Organização de Eventos", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_1: 20, id_dicipline: 10, name_subject: "Pedagogia", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_1: 21, id_dicipline: 10, name_subject: "Português", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_1: 22, id_dicipline: 11, name_subject: "Princípios e Atribuições Institucionais da Defensoriacreated_at: new Date(), updated_at: new Date() ", },
      { id_subject_niv_1: 23, id_dicipline: 12, name_subject: "Psicologia", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_1: 24, id_dicipline: 12, name_subject: "Psiquiatria", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_1: 25, id_dicipline: 12, name_subject: "Química e Engenharia Química", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_1: 26, id_dicipline: 14, name_subject: "Raciocínio Lógico", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_1: 27, id_dicipline: 14, name_subject: "Radiologia", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_1: 28, id_dicipline: 15, name_subject: "Redação Oficial", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_1: 29, id_dicipline: 15, name_subject: "Relações Internacionais", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_1: 30, id_dicipline: 15, name_subject: "Russo (Língua Russa)", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_1: 31, id_dicipline: 15, name_subject: "Secretariado", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_1: 32, id_dicipline: 15, name_subject: "Segurança e Saúde no Trabalho (SST)", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_1: 33, id_dicipline: 15, name_subject: "Segurança Privada e Transportescreated_at: new Date(), updated_at: new Date() ", },
      { id_subject_niv_1: 34, id_dicipline: 15, name_subject: "Segurança Pública e Legislação Policial", created_at: new Date(), updated_at: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('subject_niv_1', null, {});
  }
};
