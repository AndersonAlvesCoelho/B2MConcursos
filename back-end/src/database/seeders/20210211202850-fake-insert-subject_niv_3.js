'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('subject_niv_3', [
      { id_subject_niv_3: 1, id_subject_niv_2: 4, name_subject: "Código de Trânsito Brasileiro (CTB) - Lei nº 9.503/1997", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_3: 2, id_subject_niv_2: 4, name_subject: "Resoluções do CONTRAN", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_3: 3, id_subject_niv_2: 5, name_subject: "DPVAT", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_3: 4, id_subject_niv_2: 6, name_subject: "Lei nº 8.899/1994 - Lei do Passe Livre", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_3: 5, id_subject_niv_2: 8, name_subject: "Lei nº 9.654/1998 - Carreira do Policial Rodoviário", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_3: 6, id_subject_niv_2: 9, name_subject: "Lei nº 11.705/2008 - Lei Seca (arts. 1º a 4º e 6º a 9º)", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_3: 7, id_subject_niv_2: 11, name_subject: "Lei nº 12.009/2009 - Lei do Motofrete", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_3: 8, id_subject_niv_2: 11, name_subject: "Lei nº 12.468/2011 - Taxistas", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_3: 9, id_subject_niv_2: 11, name_subject: "Lei nº 12.379/2011 - Sistema Nacional de Viação", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_3: 10, id_subject_niv_2: 14, name_subject: "Lei nº 13.103/2015 - Lei da Profissão de Motorista", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_3: 11, id_subject_niv_2: 15, name_subject: "Decreto nº 99.704 - Acordo sobre Transporte Internacional Terrestre", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_3: 12, id_subject_niv_2: 17, name_subject: "Legislações de Transportes dos Estados, Municípios e Distrito Federal", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_3: 13, id_subject_niv_2: 17, name_subject: "Legislação do DNIT", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_3: 14, id_subject_niv_2: 17, name_subject: "NBRs aplicadas ao Transporte", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_3: 15, id_subject_niv_2: 18, name_subject: "Plano Nacional de Logística e Sistemas de Transportes (PNLT)", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_3: 16, id_subject_niv_2: 19, name_subject: "Regimento Interno dos DETRANs", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_3: 17, id_subject_niv_2: 22, name_subject: "Lei nº 5.970/1973 - Acidente de Trânsito", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_3: 18, id_subject_niv_2: 22, name_subject: "Outros temas da legislação de trânsito", created_at: new Date(), updated_at: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('subject_niv_3', null, {});
  }
};

