
exports.up = function(knex) {
    return knex.schema.createTable('subject_niv_1', function(table){
        table.increments('id_subject_niv_1')
        table.string('name_subject', 50).unique().notNullable()

        table.integer('id_subject_niv_2').unsigned()
        table.foreign('id_subject_niv_2').references('subject_niv_2.id_subject_niv_2')
    })
};

exports.down = knex => knex.schema.dropTable('office_niv_1')