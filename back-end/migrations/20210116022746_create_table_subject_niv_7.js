
exports.up = function(knex) {
    return knex.schema.createTable('subject_niv_7', function(table){
        table.increments('id_subject_niv_7')
        table.string('name_subject', 50).unique().notNullable()

    })
};

exports.down = knex => knex.schema.dropTable('subject_niv_7')