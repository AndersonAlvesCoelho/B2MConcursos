//
// exports.up = function(knex) {
//     return knex.schema.createTable('subject_niv_2', function(table){
//         table.increments('id_subject_niv_2')
//         table.string('name_subject', 50).unique().notNullable()
//
//         table.integer('id_subject_niv_1').unsigned()
//         table.foreign('id_subject_niv_1').references('subject_niv_1.id_subject_niv_1')
//     })
// };
//
// exports.down = knex => knex.schema.dropTable('subject_niv_2')