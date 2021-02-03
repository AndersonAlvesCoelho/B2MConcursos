
exports.up = function(knex) {
    return knex.schema.createTable('dicipline', function(table){
        table.increments('id_dicipline')
        table.string('name_dicipline', 50).unique().notNullable()

        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = knex => knex.schema.dropTable('dicipline') 