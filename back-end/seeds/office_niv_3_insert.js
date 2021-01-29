
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('office_niv_3').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { name_office: 'Direito', id_office_niv_3: null },
        { name_office: 'Psicologia', id_office_niv_3: null },
        { name_office: 'Serviço social', id_office_niv_3: null },

      ]);
    });
};
