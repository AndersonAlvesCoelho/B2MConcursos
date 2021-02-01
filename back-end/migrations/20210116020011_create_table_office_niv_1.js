
exports.up = function(knex) {
    return knex.schema.createTable('office_niv_1', function(table){
        table.increments('id_office_niv_1')
        table.string('name_office', 50).unique().notNullable()
    })
};

exports.down = knex => knex.schema.dropTable('office_niv_1')