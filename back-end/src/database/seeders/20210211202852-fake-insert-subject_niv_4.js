'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('subject_niv_4', [
      { id_subject_niv_4: 1, id_subject_niv_3: 1, name_subject: "Conceitos de Governança de TI", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_4: 2, id_subject_niv_3: 2, name_subject: "ITIL", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_4: 3, id_subject_niv_3: 3, name_subject: "CMMI", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_4: 4, id_subject_niv_3: 4, name_subject: "MPS.BR", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_4: 5, id_subject_niv_3: 5, name_subject: "COBIT", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_4: 6, id_subject_niv_3: 6, name_subject: "ISO/IEC 20000 - Gestão de Serviços de TI", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_4: 7, id_subject_niv_3: 6, name_subject: "Planejamento Estratégico de TI", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_4: 8, id_subject_niv_3: 6, name_subject: "Gerenciamento de Processos de Negócio", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_4: 9, id_subject_niv_3: 7, name_subject: "Software", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_4: 10, id_subject_niv_3: 8, name_subject: "Sistemas de Informação e Gestão da Informação", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_4: 11, id_subject_niv_3: 8, name_subject: "ERP, SAP, CRM e Outros", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_4: 12, id_subject_niv_3: 10, name_subject: "Terceirização e Outsourcing de TI", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_4: 13, id_subject_niv_3: 11, name_subject: "NBR ISO/IEC 38500/2009", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_4: 14, id_subject_niv_3: 14, name_subject: "SISP - Decreto nº 7.579/2011, PSW-SISP, PDTI-SISP etc.", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_4: 15, id_subject_niv_3: 15, name_subject: "TOGAF", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_4: 16, id_subject_niv_3: 16, name_subject: "Normativos sobre Governança Digital no Setor Público", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_4: 17, id_subject_niv_3: 16, name_subject: "Outros modelos de gestão de TI", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_4: 18, id_subject_niv_3: 17, name_subject: "ITIL v3 e anteriores", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_4: 19, id_subject_niv_3: 18, name_subject: "ITIL v4", created_at: new Date(), updated_at: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('subject_niv_4', null, {});
  }
};

