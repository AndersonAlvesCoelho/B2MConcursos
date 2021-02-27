'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('comment', [
            { id_comment: 1, id_user: 2, id_question: 1, comment: 'Nunca é demais lembrar o peso e o significado destes problemas, uma vez que o início da atividade geral de formação de atitudes facilita a criação do impacto na agilidade decisória.', created_at: new Date(), updated_at: new Date() },
            { id_comment: 2, id_user: 3, id_question: 2, comment: 'A prática cotidiana prova que a expansão dos mercados mundiais estende o alcance e a importância das condições financeiras e administrativas exigidas.', created_at: new Date(), updated_at: new Date() },
            { id_comment: 3, id_user: 1, id_question: 2, comment: 'O empenho em analisar a revolução dos costumes é uma das consequências do sistema de formação de quadros que corresponde às necessidades.', created_at: new Date(), updated_at: new Date() },
            { id_comment: 4, id_user: 5, id_question: 4, comment: 'No entanto, não podemos esquecer que o consenso sobre a necessidade de qualificação obstaculiza a apreciação da importância do levantamento das variáveis envolvidas.', created_at: new Date(), updated_at: new Date() },
            { id_comment: 5, id_user: 6, id_question: 5, comment: 'Do mesmo modo, o comprometimento entre as equipes é uma das consequências do orçamento setorial.', created_at: new Date(), updated_at: new Date() },
            { id_comment: 6, id_user: 6, id_question: 5, comment: 'É importante questionar o quanto o julgamento imparcial das eventualidades estende o alcance e a importância dos modos de operação convencionais.', created_at: new Date(), updated_at: new Date() },
            { id_comment: 7, id_user: 7, id_question: 5, comment: 'Todavia, o comprometimento entre as equipes maximiza as possibilidades por conta dos índices pretendidos.', created_at: new Date(), updated_at: new Date() },
            { id_comment: 8, id_user: 3, id_question: 7, comment: 'É claro que o aumento do diálogo entre os diferentes setores produtivos prepara-nos para enfrentar situações atípicas decorrentes do sistema de formação de quadros que corresponde às necessidades.', created_at: new Date(), updated_at: new Date() },
            { id_comment: 9, id_user: 5, id_question: 9, comment: 'Evidentemente, o desenvolvimento contínuo de distintas formas de atuação nos obriga à análise do remanejamento dos quadros funcionais.', created_at: new Date(), updated_at: new Date() },
            { id_comment: 10, id_user: 4, id_question: 9, comment: 'Do mesmo modo, o acompanhamento das preferências de consumo garante a contribuição de um grupo importante na determinação das condições inegavelmente apropriadas.', created_at: new Date(), updated_at: new Date() },
            { id_comment: 11, id_user: 3, id_question: 10, comment: 'A certificação de metodologias que nos auxiliam a lidar com a estrutura atual da organização estimula a padronização dos relacionamentos verticais entre as hierarquias.', created_at: new Date(), updated_at: new Date() },
            { id_comment: 12, id_user: 5, id_question: 10, comment: 'Caros amigos, a expansão dos mercados mundiais nos obriga à análise dos paradigmas corporativos.', created_at: new Date(), updated_at: new Date() },

        ],
            {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('comment', null, {});
    }
};
