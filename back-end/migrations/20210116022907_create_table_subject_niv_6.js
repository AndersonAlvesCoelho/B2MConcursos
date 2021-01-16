
exports.up = function(knex) {
    return knex.schema.createTable('subject_niv_6', function(table){
        table.increments('id_subject_niv_6')
        table.string('name_subject', 50).unique().notNullable()

        table.integer('id_subject_niv_7').unsigned()
        table.foreign('id_subject_niv_7').references('subject_niv_7.id_subject_niv_7')
    })
};

exports.down = knex => knex.schema.dropTable('subject_niv_6')