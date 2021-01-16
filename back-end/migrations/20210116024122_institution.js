
exports.up = function(knex) {
    return knex.schema.createTable('institution', function(table){
        table.increments('id_institution')
        table.string('name_institution', 50).unique().notNullable()

        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = knex => knex.schema.dropTable('institution')