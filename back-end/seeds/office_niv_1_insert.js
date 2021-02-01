
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('office_niv_1').del()
    .then(function () {
      // Inserts seed entries
      return knex('office_niv_1').insert([
        { id_office_niv_1: 1, name_office: 'Oficial judiciário' },
        { id_office_niv_1: 2, name_office: 'Técnico judiciário' },
        { id_office_niv_1: 3, name_office: 'Analista de sistemas' },
        { id_office_niv_1: 4, name_office: 'Auxiliar de comunicação' },
        { id_office_niv_1: 5, name_office: 'Escrevente' },
        { id_office_niv_1: 6, name_office: 'Oficial ajudante' },
        { id_office_niv_1: 7, name_office: 'Programador' },
        { id_office_niv_1: 8, name_office: 'Técnico em eletrônica' },
        { id_office_niv_1: 9, name_office: 'Técnico em informática' },
        { id_office_niv_1: 10, name_office: 'Analista judiciário' },

      ]);
    });
};
