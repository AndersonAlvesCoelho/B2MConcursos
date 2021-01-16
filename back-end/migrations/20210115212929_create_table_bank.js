
exports.up = function(knex) {
  return knex.schema.createTable('bank', function(table){
      table.increments('id_bank')
      table.string('name_bank', 50).unique().notNullable()

      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = knex => knex.schema.dropTable('bank')