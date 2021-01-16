
exports.up = function(knex) {
    return knex.schema.createTable('subject_niv_5', function(table){
        table.increments('id_subject_niv_5')
        table.string('name_subject', 50).unique().notNullable()

        table.integer('id_subject_niv_6').unsigned()
        table.foreign('id_subject_niv_6').references('subject_niv_6.id_subject_niv_6')
    })
};

exports.down = knex => knex.schema.dropTable('office_niv_5')