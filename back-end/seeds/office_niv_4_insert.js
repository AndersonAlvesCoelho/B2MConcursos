
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('id_office_niv_4').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {name_office: 'Estagíario'},
        {name_office: 1},
        {name_office: 1},
        {name_office: 1},
      ]);
    });
};
