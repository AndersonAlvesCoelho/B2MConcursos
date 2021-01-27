
exports.seed = function (knex) {

  // Deletes ALL existing entries
  return knex('bank').del()
    .then(function () {
      // Inserts seed entries
      return knex('bank').insert([
        { name_bank: 'Consulplan' },
        { name_bank: 'Vunesp' },
        { name_bank: 'IESES' }
      ]);
    });
};
