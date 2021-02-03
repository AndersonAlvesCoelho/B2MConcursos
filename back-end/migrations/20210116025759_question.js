
exports.up = function(knex) {
    return knex.schema.createTable('question', function(table){
        table.increments('id_question')
        table.string('name_comment_answer', 50).unique().notNullable()
        table.text('enunciated').notNullable()
        table.string('year', 4)
        table.text('issue_resolution')

        table.integer('id_bank').unsigned()
        table.foreign('id_bank').references('bank.id_bank')

        table.string('office_tab_value', 50).notNullable()

        table.integer('id_institution').unsigned()
        table.foreign('id_institution').references('institution.id_institution')

        table.string('discipline_tab_value', 50).notNullable()

        table.integer('id_user').unsigned()
        table.foreign('id_user').references('user.id_user')

        table.integer('id_comment').unsigned()
        table.foreign('id_comment').references('comment.id_comment')

        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = knex => knex.schema.dropTable('question')