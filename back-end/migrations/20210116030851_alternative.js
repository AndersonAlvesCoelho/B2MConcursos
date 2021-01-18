
exports.up = function(knex) {
    return knex.schema.createTable('alternative', function(table){
        table.increments('id_alternative')
        table.string('name_alternative', 255).notNullable()
        table.boolean('answer')

        table.integer('id_question').unsigned()
        table.foreign('id_question').references('question.id_question')

        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = knex => knex.schema.dropTable('alternative')