'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('subject_niv_6', [
      { id_subject_niv_6: 1, id_subject_niv_5: 1, name_subject: "Princípios do Direito Eleitoral", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_6: 2, id_subject_niv_5: 1, name_subject: "Direitos Políticos", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_6: 3, id_subject_niv_5: 2, name_subject: "Dos partidos políticos (Lei 9.096/1995 e posteriores alterações)", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_6: 4, id_subject_niv_5: 2, name_subject: "Organização da Justiça Eleitoral (arts. 118 a 121 da CF; arts. 12 a 41 do CE)", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_6: 5, id_subject_niv_5: 3, name_subject: "Ministério Público Eleitoral", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_6: 6, id_subject_niv_5: 4, name_subject: "Das eleições", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_6: 7, id_subject_niv_5: 4, name_subject: "Recursos eleitorais (arts. 257 a 282 do Código Eleitoral)", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_6: 8, id_subject_niv_5: 5, name_subject: "Ações Específicas", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_6: 9, id_subject_niv_5: 6, name_subject: "Outros Temas", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_6: 10, id_subject_niv_5: 7, name_subject: "Questões envolvendo múltiplos normativos de Direito Eleitoral", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_6: 11, id_subject_niv_5: 7, name_subject: "Jurisprudência e Súmulas do TSE", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_6: 12, id_subject_niv_5: 7, name_subject: "Medicina do Trabalho", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_6: 13, id_subject_niv_5: 8, name_subject: "Meteorologia e Astrologia", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_6: 14, id_subject_niv_5: 8, name_subject: "Minas, Energia e Recursos Hídricos", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_6: 15, id_subject_niv_5: 8, name_subject: "Museologia", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_6: 16, id_subject_niv_5: 8, name_subject: "Nutrição, Gastronomia e Engenharia de Alimentos", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_6: 17, id_subject_niv_5: 8, name_subject: "Oceanografia", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_6: 18, id_subject_niv_5: 9, name_subject: "Odontologia", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_6: 19, id_subject_niv_5: 9, name_subject: "Organização de Eventos", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_6: 20, id_subject_niv_5: 10, name_subject: "Pedagogia", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_6: 21, id_subject_niv_5: 10, name_subject: "Português", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_6: 22, id_subject_niv_5: 11, name_subject: "Princípios e Atribuições Institucionais da Defensoriacreated_at: new Date(), updated_at: new Date() ", },
      { id_subject_niv_6: 23, id_subject_niv_5: 12, name_subject: "Psicologia", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_6: 24, id_subject_niv_5: 12, name_subject: "Psiquiatria", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_6: 25, id_subject_niv_5: 12, name_subject: "Química e Engenharia Química", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_6: 26, id_subject_niv_5: 14, name_subject: "Raciocínio Lógico", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_6: 27, id_subject_niv_5: 14, name_subject: "Radiologia", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_6: 28, id_subject_niv_5: 15, name_subject: "Redação Oficial", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_6: 29, id_subject_niv_5: 15, name_subject: "Relações Internacionais", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_6: 30, id_subject_niv_5: 15, name_subject: "Russo (Língua Russa)", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_6: 31, id_subject_niv_5: 15, name_subject: "Secretariado", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_6: 32, id_subject_niv_5: 15, name_subject: "Segurança e Saúde no Trabalho (SST)", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_6: 33, id_subject_niv_5: 15, name_subject: "Segurança Privada e Transportescreated_at: new Date(), updated_at: new Date() ", },
      { id_subject_niv_6: 34, id_subject_niv_5: 15, name_subject: "Segurança Pública e Legislação Policial", created_at: new Date(), updated_at: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('subject_niv_6', null, {});
  }
};