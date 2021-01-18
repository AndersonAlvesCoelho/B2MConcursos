
exports.up = function(knex) {
    return knex.schema.createTable('office_niv_1', function(table){
        table.increments('id_office_niv_1')
        table.string('name_office', 50).unique().notNullable()

        table.integer('id_office_niv_2').unsigned()
        table.foreign('id_office_niv_2').references('office_niv_2.id_office_niv_2')

    })
};

exports.down = knex => knex.schema.dropTable('office_niv_1')