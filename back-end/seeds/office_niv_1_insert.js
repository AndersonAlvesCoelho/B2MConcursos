
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('office_niv_1').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {name_office: 1, id_office_niv_2: 'rowValue1'},
      ]);
    });
};
