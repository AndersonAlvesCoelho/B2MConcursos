
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('office_niv_4').del()
    .then(function () {
      // Inserts seed entries
      return knex('office_niv_4').insert([
        {id_office_niv_4: 1, name_office: 'Lero lero', id_office_niv_3: 2},
      ]);
    });
};

