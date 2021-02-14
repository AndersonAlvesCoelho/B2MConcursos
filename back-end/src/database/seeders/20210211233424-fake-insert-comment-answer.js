'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('comment_answer', [
            { id_comment_answer: 1, id_user: 2, id_comment: 1, answer: '<p>Nunca é demais lembrar o peso e o significado destes problemas, uma vez que o início da atividade geral de formação de atitudes facilita a criação do impacto na agilidade decisória.</p>', created_at: new Date(), updated_at: new Date() },
            { id_comment_answer: 2, id_user: 3, id_comment: 2, answer: '<p>A prática cotidiana prova que a expansão dos mercados mundiais estende o alcance e a importância das condições financeiras e administrativas exigidas.</p>', created_at: new Date(), updated_at: new Date() },
            { id_comment_answer: 3, id_user: 1, id_comment: 2, answer: '<p>O empenho em analisar a revolução dos costumes é uma das consequências do sistema de formação de quadros que corresponde às necessidades.</p>', created_at: new Date(), updated_at: new Date() },
            { id_comment_answer: 4, id_user: 5, id_comment: 4, answer: '<p>No entanto, não podemos esquecer que o consenso sobre a necessidade de qualificação obstaculiza a apreciação da importância do levantamento das variáveis envolvidas.</p>', created_at: new Date(), updated_at: new Date() },
            { id_comment_answer: 5, id_user: 6, id_comment: 5, answer: '<p>Do mesmo modo, o comprometimento entre as equipes é uma das consequências do orçamento setorial.</p>', created_at: new Date(), updated_at: new Date() },
            { id_comment_answer: 6, id_user: 6, id_comment: 6, answer: '<p>É importante questionar o quanto o julgamento imparcial das eventualidades estende o alcance e a importância dos modos de operação convencionais.</p>', created_at: new Date(), updated_at: new Date() },
            { id_comment_answer: 7, id_user: 7, id_comment: 6, answer: '<p>Todavia, o comprometimento entre as equipes maximiza as possibilidades por conta dos índices pretendidos.</p>', created_at: new Date(), updated_at: new Date() },
            { id_comment_answer: 8, id_user: 3, id_comment: 7, answer: '<p>É claro que o aumento do diálogo entre os diferentes setores produtivos prepara-nos para enfrentar situações atípicas decorrentes do sistema de formação de quadros que corresponde às necessidades.</p>', created_at: new Date(), updated_at: new Date() },
            { id_comment_answer: 9, id_user: 5, id_comment: 8, answer: '<p>Evidentemente, o desenvolvimento contínuo de distintas formas de atuação nos obriga à análise do remanejamento dos quadros funcionais.</p>', created_at: new Date(), updated_at: new Date() },
            { id_comment_answer: 10, id_user: 4, id_comment: 9, answer: '<p>Do mesmo modo, o acompanhamento das preferências de consumo garante a contribuição de um grupo importante na determinação das condições inegavelmente apropriadas.</p>', created_at: new Date(), updated_at: new Date() },
            { id_comment_answer: 11, id_user: 3, id_comment: 10, answer: '<p>A certificação de metodologias que nos auxiliam a lidar com a estrutura atual da organização estimula a padronização dos relacionamentos verticais entre as hierarquias.</p>', created_at: new Date(), updated_at: new Date() },
            { id_comment_answer: 12, id_user: 5, id_comment: 10, answer: '<p>Caros amigos, a expansão dos mercados mundiais nos obriga à análise dos paradigmas corporativos.</p>', created_at: new Date(), updated_at: new Date() },

        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('comment_answer', null, {});
    }
};