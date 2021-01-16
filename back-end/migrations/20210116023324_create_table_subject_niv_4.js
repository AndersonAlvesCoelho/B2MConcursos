
exports.up = function(knex) {
    return knex.schema.createTable('subject_niv_4', function(table){
        table.increments('id_subject_niv_4')
        table.string('name_subject', 50).unique().notNullable()

        table.integer('id_subject_niv_5').unsigned()
        table.foreign('id_subject_niv_5').references('subject_niv_5.id_subject_niv_5')
    })
};

exports.down = knex => knex.schema.dropTable('office_niv_4')