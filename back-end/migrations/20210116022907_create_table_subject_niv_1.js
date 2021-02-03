
exports.up = function(knex) {
    return knex.schema.createTable('subject_niv_1', function(table){
        table.increments('id_subject_niv_1')
        table.string('name_subject', 50).unique().notNullable()

        table.integer('id_dicipline').unsigned()
        table.foreign('id_dicipline').references('dicipline.id_dicipline')
    })
};

exports.down = knex => knex.schema.dropTable('subject_niv_1')