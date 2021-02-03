
exports.up = function(knex) {
    return knex.schema.createTable('subject_niv_7', function(table){
        table.increments('id_subject_niv_7')
        table.string('name_subject', 50).unique().notNullable()

        table.integer('id_subject_niv_6').unsigned()
        table.foreign('id_subject_niv_6').references('subject_niv_6.id_subject_niv_6')
    })
};

exports.down = knex => knex.schema.dropTable('subject_niv_7')