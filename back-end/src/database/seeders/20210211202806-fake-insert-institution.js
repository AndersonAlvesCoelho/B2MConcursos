'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('institution', [
  
      { name_institution: 'Marinha - Marinha do Brasil ', created_at: new Date(), updated_at: new Date()  },
      { name_institution: 'Aeronáutica - Força Aérea Brasileira ', created_at: new Date(), updated_at: new Date()  },
      { name_institution: 'Exército', created_at: new Date(), updated_at: new Date()  },
      { name_institution: 'Prefeitura Santana de Parnaíba', created_at: new Date(), updated_at: new Date()  },
      { name_institution: 'Prefeitura Rio de Janeiro', created_at: new Date(), updated_at: new Date()  },
      { name_institution: 'MP/SP - Ministério Público de São Paulo', created_at: new Date(), updated_at: new Date()  },
      { name_institution: 'TJ SP - Tribunal de Justiça de São Paulo', created_at: new Date(), updated_at: new Date()  },
      { name_institution: 'Ministério da Saúde', created_at: new Date(), updated_at: new Date()  },
      { name_institution: 'PM SP - Polícia Militar de São Paulo', created_at: new Date(), updated_at: new Date()  },
      { name_institution: 'Prefeitura Piracicaba', created_at: new Date(), updated_at: new Date()  },
      { name_institution: 'Prefeitura Campo Grande (MS)', created_at: new Date(), updated_at: new Date()  },
      { name_institution: 'Prefeitura Fortaleza', created_at: new Date(), updated_at: new Date()  },
      { name_institution: 'Prefeitura Porto Alegre', created_at: new Date(), updated_at: new Date()  },
      { name_institution: 'Prefeitura São Paulo', created_at: new Date(), updated_at: new Date()  },
      { name_institution: 'Prefeitura Aracruz', created_at: new Date(), updated_at: new Date()  },
      { name_institution: 'RFB - Receita Federal do Brasil', created_at: new Date(), updated_at: new Date()  },
      { name_institution: 'Prefeitura Taubaté', created_at: new Date(), updated_at: new Date()  },
      { name_institution: 'Prefeitura Guarulhos', created_at: new Date(), updated_at: new Date()  },
      { name_institution: 'Prefeitura de Osasco', created_at: new Date(), updated_at: new Date()  },
      { name_institution: 'Prefeitura Cerquilho', created_at: new Date(), updated_at: new Date()  },
      { name_institution: 'PM MG - Polícia Militar de Minas Gerais', created_at: new Date(), updated_at: new Date()  },
      { name_institution: 'Prefeitura Porto Ferreira', created_at: new Date(), updated_at: new Date()  },
      { name_institution: 'TJ PR - Tribunal de Justiça do Paraná', created_at: new Date(), updated_at: new Date()  },
      { name_institution: 'SES SP - Secretaria da Saúde de São Paul', created_at: new Date(), updated_at: new Date()  },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('institution', null, {});
  }
};