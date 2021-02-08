//
// exports.up = function(knex) {
//     return knex.schema.createTable('comment', function(table){
//         table.increments('id_comment')
//         table.string('comment', 50).notNullable()
//
//         table.integer('id_user').unsigned()
//         table.foreign('id_user').references('user.id_user')
//
//         table.timestamp('created_at').defaultTo(knex.fn.now())
//         table.timestamp('updated_at').defaultTo(knex.fn.now())
//     })
// };
//
// exports.down = knex => knex.schema.dropTable('comment')