exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('office_niv_2').del()
    .then(function () {
      // Inserts seed entries
      return knex('office_niv_2').insert([
        { id_office_niv_2: 1, name_office: 'Assistente técnico de controle financeiro', id_office_niv_1: 1 },
        { id_office_niv_2: 2, name_office: 'Assistente técnico de sistemas', id_office_niv_1: 1 },
        { id_office_niv_2: 3, name_office: 'Oficial judiciário', id_office_niv_1: 1 },
        { id_office_niv_2: 4, name_office: 'Técnico de manutenção de informática', id_office_niv_1: 1 },

        { id_office_niv_2: 5, name_office: 'Administrador de banco de dados', id_office_niv_1: 2 },
        { id_office_niv_2: 6, name_office: 'Administrador de redes', id_office_niv_1: 2 },
        { id_office_niv_2: 7, name_office: 'Analista de recusros humanos', id_office_niv_1: 2 },
        { id_office_niv_2: 8, name_office: 'Analista de sistema', id_office_niv_1: 2 },
        { id_office_niv_2: 9, name_office: 'Bibliotecário', id_office_niv_1: 2 },
        { id_office_niv_2: 10, name_office: 'Contador', id_office_niv_1: 2 },
        { id_office_niv_2: 11, name_office: 'Estatístico', id_office_niv_1: 2 },
        { id_office_niv_2: 12, name_office: 'Jornalista', id_office_niv_1: 2 },
        { id_office_niv_2: 13, name_office: 'Revisor judiciário', id_office_niv_1: 2 },
        { id_office_niv_2: 14, name_office: 'Técnico judiciário', id_office_niv_1: 2 },

        { id_office_niv_2: 15, name_office: 'Classe R', id_office_niv_1: 3 },
        
        { id_office_niv_2: 16, name_office: 'Classe O', id_office_niv_1: 7 },
        { id_office_niv_2: 17, name_office: 'Classe O', id_office_niv_1: 8 },
        { id_office_niv_2: 18, name_office: 'Classe O', id_office_niv_1: 9 },
        { id_office_niv_2: 19, name_office: 'Fim', id_office_niv_1: 10 },
        { id_office_niv_2: 20, name_office: 'Meio', id_office_niv_1: 10 },

      ]);
    });
};
