//
// exports.up = function(knex) {
//     return knex.schema.createTable('user', function(table){
//         table.increments('id_user')
//         table.string('login', 50).unique().notNullable()
//         table.string('password', 50).unique().notNullable()
//         table.integer('nivel', 50).notNullable()
//
//         table.timestamp('created_at').defaultTo(knex.fn.now())
//         table.timestamp('updated_at').defaultTo(knex.fn.now())
//     })
// };
//
// exports.down = knex => knex.schema.dropTable('user')