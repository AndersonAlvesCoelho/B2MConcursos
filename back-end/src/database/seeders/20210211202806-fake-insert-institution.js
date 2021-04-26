'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('institution', [
  
      { id_institution: 1, name_institution: 'TJ MG', created_at: new Date(), updated_at: new Date()  },
      { id_institution: 2, name_institution: 'TJ AL', created_at: new Date(), updated_at: new Date()  },
      { id_institution: 3, name_institution: 'TJ AP', created_at: new Date(), updated_at: new Date()  },
      { id_institution: 4, name_institution: 'TJ AM', created_at: new Date(), updated_at: new Date()  },
      { id_institution: 5, name_institution: 'TJ BA', created_at: new Date(), updated_at: new Date()  },
      { id_institution: 6, name_institution: 'TJ CE', created_at: new Date(), updated_at: new Date()  },
      { id_institution: 7, name_institution: 'TJ ES', created_at: new Date(), updated_at: new Date()  },
      { id_institution: 8, name_institution: 'TJ GO', created_at: new Date(), updated_at: new Date()  },
      { id_institution: 9, name_institution: 'TJ MA', created_at: new Date(), updated_at: new Date()  },
      { id_institution: 10, name_institution: 'TJ MT', created_at: new Date(), updated_at: new Date()  },
      { id_institution: 11, name_institution: 'TJ MS', created_at: new Date(), updated_at: new Date()  },
      { id_institution: 12, name_institution: 'TJ AC', created_at: new Date(), updated_at: new Date()  },
      { id_institution: 13, name_institution: 'TJ PA', created_at: new Date(), updated_at: new Date()  },
      { id_institution: 14, name_institution: 'TJ PB', created_at: new Date(), updated_at: new Date()  },
      { id_institution: 15, name_institution: 'TJ PR', created_at: new Date(), updated_at: new Date()  },
      { id_institution: 16, name_institution: 'TJ PE', created_at: new Date(), updated_at: new Date()  },
      { id_institution: 17, name_institution: 'TJ PI', created_at: new Date(), updated_at: new Date()  },
      { id_institution: 18, name_institution: 'TJ RJ', created_at: new Date(), updated_at: new Date()  },
      { id_institution: 19, name_institution: 'TJ RN', created_at: new Date(), updated_at: new Date()  },
      { id_institution: 20, name_institution: 'TJ RS', created_at: new Date(), updated_at: new Date()  },
      { id_institution: 21, name_institution: 'TJ RO', created_at: new Date(), updated_at: new Date()  },
      { id_institution: 22, name_institution: 'TJ RR', created_at: new Date(), updated_at: new Date()  },
      { id_institution: 23, name_institution: 'TJ SC', created_at: new Date(), updated_at: new Date()  },
      { id_institution: 24, name_institution: 'TJ SP', created_at: new Date(), updated_at: new Date()  },
      { id_institution: 25, name_institution: 'TJ SE', created_at: new Date(), updated_at: new Date()  },
      { id_institution: 26, name_institution: 'TJ TO', created_at: new Date(), updated_at: new Date()  },
      { id_institution: 27, name_institution: 'TJ DF', created_at: new Date(), updated_at: new Date()  },


    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('institution', null, {});
  }
};