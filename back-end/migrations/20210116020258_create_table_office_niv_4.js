
exports.up = function(knex) {
    return knex.schema.createTable('office_niv_4', function(table){
        table.increments('id_office_niv_4')
        table.string('name_office', 50).unique().notNullable()

        table.integer('id_office_niv_3').unsigned()
        table.foreign('id_office_niv_3').references('office_niv_3.id_office_niv_3')

    })
};

exports.down = knex => knex.schema.dropTable('office_niv_4')