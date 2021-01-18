
exports.up = function(knex) {
    return knex.schema.createTable('dicipline', function(table){
        table.increments('id_dicipline')
        table.string('name_dicipline', 50).unique().notNullable()

        table.integer('id_subject_niv_1').unsigned()
        table.foreign('id_subject_niv_1').references('subject_niv_1.id_subject_niv_1')

        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = knex => knex.schema.dropTable('dicipline')