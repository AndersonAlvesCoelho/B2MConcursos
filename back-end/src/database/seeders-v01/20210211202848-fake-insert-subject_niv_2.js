'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('subject_niv_2', [
      { id_subject_niv_2: 1, id_subject_niv_1: 1, name_subject: "História do Desporto no Brasil", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_2: 2, id_subject_niv_1: 1, name_subject: "Lei nº 9.615/1998 - Normas Gerais sobre Desporto", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_2: 3, id_subject_niv_1: 1, name_subject: "Lei nº 10.671/2003 - Estatuto do Torcedor", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_2: 4, id_subject_niv_1: 2, name_subject: "Lei nº 12.343/2010 - Plano Nacional de Cultura (PNC e SNIIC)", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_2: 5, id_subject_niv_1: 2, name_subject: "Proteção do Patrimônio Histórico e Cultural", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_2: 6, id_subject_niv_1: 3, name_subject: "Lei nº 8.313/1991 - Lei Rouanet", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_2: 7, id_subject_niv_1: 4, name_subject: "Decreto nº 3.551/2000 - Registro de Bens Culturais de Natureza Imaterial",created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_2: 8, id_subject_niv_1: 5, name_subject: "Lei nº 4.845/1965 - Proíbe a Saída, para o exterior, de Obras de Arte",created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_2: 9, id_subject_niv_1: 5, name_subject: "Lei nº 12.840/2013 - Destinação dos Bens aos Museus", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_2: 10, id_subject_niv_1: 6, name_subject: "IPHAN - Instituto do Patrimônio Histórico e Artístico Nacional", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_2: 11, id_subject_niv_1: 6, name_subject: "Lei nº 8.685/1993 - Lei do Audiovisual", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_2: 12, id_subject_niv_1: 6, name_subject: "Lei nº 12.599/2012 - Programa Cinema Perto de Você", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_2: 13, id_subject_niv_1: 7, name_subject: "Fundo Setorial do Audiovisual (FSA)", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_2: 14, id_subject_niv_1: 8, name_subject: "Lei nº 8.977/1995 - Lei do Cabo", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_2: 15, id_subject_niv_1: 8, name_subject: "Lei nº 12.485/2011 - Comunicação Audiovisual de Acesso Condicionado",created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_2: 16, id_subject_niv_1: 9, name_subject: "Ministério da Cultura", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_2: 17, id_subject_niv_1: 9, name_subject: "Conceitos e Técnicas de Produção Cultural", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_2: 18, id_subject_niv_1: 9, name_subject: "Demais Normas Desportivas e Culturais", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_2: 19, id_subject_niv_1: 10, name_subject: "Lei nº 4.117/1962 - Código Brasileiro de Telecomunicações", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_2: 20, id_subject_niv_1: 12, name_subject: "Lei nº 5.250/1967 - Lei de Imprensa", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_2: 21, id_subject_niv_1: 13, name_subject: "Lei nº 5.741/1968 e Decreto nº 65.347/1969 - Exportação de Livros", created_at: new Date(), updated_at: new Date() },
      { id_subject_niv_2: 22, id_subject_niv_1: 14, name_subject: "Lei nº 6.538/1978 - Serviços Postais", created_at: new Date(), updated_at: new Date() },
      
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('subject_niv_2', null, {});
  }
};

