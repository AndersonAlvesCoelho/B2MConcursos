'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('comment', [
            { id_comment: 1, comment: '<p>Nunca é demais lembrar o peso e o significado destes problemas, uma vez que o início da atividade geral de formação de atitudes facilita a criação do impacto na agilidade decisória.</p>', id_user: 2, id_question: 1, created_at: new Date(), updated_at: new Date() },
            { id_comment: 2, comment: '<p>A prática cotidiana prova que a expansão dos mercados mundiais estende o alcance e a importância das condições financeiras e administrativas exigidas.</p>', id_user: 3, id_question: 2, created_at: new Date(), updated_at: new Date() },
            { id_comment: 3, comment: '<p>O empenho em analisar a revolução dos costumes é uma das consequências do sistema de formação de quadros que corresponde às necessidades.</p>', id_user: 1, id_question: 2, created_at: new Date(), updated_at: new Date() },
            { id_comment: 4, comment: '<p>No entanto, não podemos esquecer que o consenso sobre a necessidade de qualificação obstaculiza a apreciação da importância do levantamento das variáveis envolvidas.</p>', id_user: 5, id_question: 4, created_at: new Date(), updated_at: new Date() },
            { id_comment: 5, comment: '<p>Do mesmo modo, o comprometimento entre as equipes é uma das consequências do orçamento setorial.</p>', id_user: 6, id_question: 5, created_at: new Date(), updated_at: new Date() },
            { id_comment: 6, comment: '<p>É importante questionar o quanto o julgamento imparcial das eventualidades estende o alcance e a importância dos modos de operação convencionais.</p>', id_user: 6, id_question: 6, created_at: new Date(), updated_at: new Date() },
            { id_comment: 7, comment: '<p>Todavia, o comprometimento entre as equipes maximiza as possibilidades por conta dos índices pretendidos.</p>', id_user: 7, id_question: 6, created_at: new Date(), updated_at: new Date() },
            { id_comment: 8, comment: '<p>É claro que o aumento do diálogo entre os diferentes setores produtivos prepara-nos para enfrentar situações atípicas decorrentes do sistema de formação de quadros que corresponde às necessidades.</p>', id_user: 3, id_question: 7, created_at: new Date(), updated_at: new Date() },
            { id_comment: 9, comment: '<p>Evidentemente, o desenvolvimento contínuo de distintas formas de atuação nos obriga à análise do remanejamento dos quadros funcionais.</p>', id_user: 5, id_question: 8, created_at: new Date(), updated_at: new Date() },
            { id_comment: 10, comment: '<p>Do mesmo modo, o acompanhamento das preferências de consumo garante a contribuição de um grupo importante na determinação das condições inegavelmente apropriadas.</p>', id_user: 4, id_question: 9, created_at: new Date(), updated_at: new Date() },
            { id_comment: 11, comment: '<p>A certificação de metodologias que nos auxiliam a lidar com a estrutura atual da organização estimula a padronização dos relacionamentos verticais entre as hierarquias.</p>', id_user: 3, id_question: 10, created_at: new Date(), updated_at: new Date() },
            { id_comment: 12, comment: '<p>Caros amigos, a expansão dos mercados mundiais nos obriga à análise dos paradigmas corporativos.</p>', id_user: 5, id_question: 10, created_at: new Date(), updated_at: new Date() },
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('comment', null, {});
    }
};
