'use strict'

module.exports = {

    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable(
            'bank',
            {
                id_bank: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                    allowNull: false
                },
                name_bank: {
                    type: Sequelize.STRING,
                    allowNull: false
                },

                // Timestamps
                createdAt: Sequelize.DATE,
                updatedAt: Sequelize.DATE,
            }
        )
    },

    down: async (queryInterface) => {
        await queryInterface.dropTable('bank', {
            schema: 'public'
        })
    }

}

// exports.up = function(knex) {
//     return knex.schema.createTable('bank', function(table){
//         table.increments('id_bank')
//         table.string('name_bank', 50).unique().notNullable()
//
//         table.timestamp('created_at').defaultTo(knex.fn.now())
//         table.timestamp('updated_at').defaultTo(knex.fn.now())
//     })
// };
//
// exports.down = knex => knex.schema.dropTable('bank')