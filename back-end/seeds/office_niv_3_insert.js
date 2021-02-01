exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('office_niv_3').del()
    .then(function () {
      // Inserts seed entries
      return knex('office_niv_3').insert([
        {id_office_niv_3: 1, name_office: 'Bacharel em direito', id_office_niv_2: 19},
        {id_office_niv_3: 2, name_office: 'curso superior completo', id_office_niv_2: 20},
        
      ]);
    });
};
