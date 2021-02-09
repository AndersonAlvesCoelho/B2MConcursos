//
// exports.up = function(knex) {
//     return knex.schema.createTable('comment_answer', function(table){
//         table.increments('id_comment_answer')
//         table.string('name_comment_answer', 50).notNullable()
//
//         table.integer('id_comment').unsigned()
//         table.foreign('id_comment').references('comment.id_comment')
//
//         table.integer('id_user').unsigned()
//         table.foreign('id_user').references('user.id_user')
//
//         table.timestamp('created_at').defaultTo(knex.fn.now())
//         table.timestamp('updated_at').defaultTo(knex.fn.now())
//     })
// };
//
// exports.down = knex => knex.schema.dropTable('comment_answer')