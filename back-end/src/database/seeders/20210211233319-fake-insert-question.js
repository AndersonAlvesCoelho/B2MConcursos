'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('question', [
            {
                id_question: 1, id_office: 1, id_discipline_subject: 1, id_bank: 1, id_institution: 1, year: 2005, id_user: 4,
                issue_resolution: '<p>Desta maneira, a hegemonia do ambiente político estimula a padronização das regras de conduta normativas.</p></br><p>A certificação de metodologias que nos auxiliam a lidar com a mobilidade dos capitais internacionais causa impacto indireto na reavaliação das direções preferenciais no sentido do progresso.</p></br><p>Join a community of over 100,000 data-informed developers. Discover best code times, defend code time, see the impact of meetings, and improve work-life balance. Track and visualize all of your projects, or export your data to connect to your billing and timesheet tools</p>',
                enunciated: '<p>É importante questionar o quanto a necessidade de renovação processual prepara-nos para enfrentar situações atípicas decorrentes do remanejamento dos quadros funcionais.</p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 2, id_office: 2, id_discipline_subject: 2, id_bank: 3, id_institution: 10, year: 2008, id_user: 4,
                issue_resolution: '<p>Pensando mais a longo prazo, a valorização de fatores subjetivos agrega valor ao estabelecimento dos conhecimentos estratégicos para atingir a excelência.</p></br><p>A certificação de metodologias que nos auxiliam a lidar com a mobilidade dos capitais internacionais causa impacto indireto na reavaliação das direções preferenciais no sentido do progresso.</p></br><p>Join a community of over 100,000 data-informed developers. Discover best code times, defend code time, see the impact of meetings, and improve work-life balance. Track and visualize all of your projects, or export your data to connect to your billing and timesheet tools</p>',
                enunciated: '<p>Pensando mais a longo prazo, o início da atividade geral de formação de atitudes maximiza as possibilidades por conta das diretrizes de desenvolvimento para o futuro.</p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 3, id_office: 3, id_discipline_subject: 3, id_bank: 1, id_institution: 9, year: 2015, id_user: 4,
                issue_resolution: '<p>importante questionar o quanto a necessidade de renovação processual prepara-nos para enfrentar situações atípicas decorrentes do remanejamento dos quadros funcionais.</p></br><p>A certificação de metodologias que nos auxiliam a lidar com a mobilidade dos capitais internacionais causa impacto indireto na reavaliação das direções preferenciais no sentido do progresso.</p></br><p>Join a community of over 100,000 data-informed developers. Discover best code times, defend code time, see the impact of meetings, and improve work-life balance. Track and visualize all of your projects, or export your data to connect to your billing and timesheet tools</p>',
                enunciated: '<p>É importante questionar o quanto o desafiador cenário globalizado assume importantes posições no estabelecimento dos modos de operação convencionais.</p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 4, id_office: 4, id_discipline_subject: 4, id_bank: 2, id_institution: 8, year: 2016, id_user: 4,
                issue_resolution: '<p>Desta maneira, a hegemonia do ambiente político estimula a padronização das regras de conduta normativas.</p></br><p>A certificação de metodologias que nos auxiliam a lidar com a mobilidade dos capitais internacionais causa impacto indireto na reavaliação das direções preferenciais no sentido do progresso.</p></br><p>Join a community of over 100,000 data-informed developers. Discover best code times, defend code time, see the impact of meetings, and improve work-life balance. Track and visualize all of your projects, or export your data to connect to your billing and timesheet tools</p>',
                enunciated: '<p>É claro que o desafiador cenário globalizado não pode mais se dissociar das direções preferenciais no sentido do progresso.</p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 5, id_office: 5, id_discipline_subject: 5, id_bank: 2, id_institution: 7, year: 2021, id_user: 4,
                issue_resolution: '<p>Desta maneira, a hegemonia do ambiente político estimula a padronização das regras de conduta normativas.</p></br><p>A certificação de metodologias que nos auxiliam a lidar com a mobilidade dos capitais internacionais causa impacto indireto na reavaliação das direções preferenciais no sentido do progresso.</p></br><p>Join a community of over 100,000 data-informed developers. Discover best code times, defend code time, see the impact of meetings, and improve work-life balance. Track and visualize all of your projects, or export your data to connect to your billing and timesheet tools</p>',
                enunciated: '<p>Não obstante, o comprometimento entre as equipes faz parte de um processo de gerenciamento de alternativas às soluções ortodoxas.</p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 6, id_office: 6, id_discipline_subject: 6, id_bank: 1, id_institution: 3, year: 2015, id_user: 4,
                issue_resolution: '<p>Desta maneira, a hegemonia do ambiente político estimula a padronização das regras de conduta normativas.</p></br><p>A certificação de metodologias que nos auxiliam a lidar com a mobilidade dos capitais internacionais causa impacto indireto na reavaliação das direções preferenciais no sentido do progresso.</p></br><p>Join a community of over 100,000 data-informed developers. Discover best code times, defend code time, see the impact of meetings, and improve work-life balance. Track and visualize all of your projects, or export your data to connect to your billing and timesheet tools</p>',
                enunciated: '<p>Assim mesmo, a complexidade dos estudos efetuados oferece uma interessante oportunidade para verificação das direções preferenciais no sentido do progresso.</p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 7, id_office: 7, id_discipline_subject: 7, id_bank: 3, id_institution: 11, year: 2007, id_user: 4,
                issue_resolution: '<p>Desta maneira, a hegemonia do ambiente político estimula a padronização das regras de conduta normativas.</p></br><p>A certificação de metodologias que nos auxiliam a lidar com a mobilidade dos capitais internacionais causa impacto indireto na reavaliação das direções preferenciais no sentido do progresso.</p></br><p>Join a community of over 100,000 data-informed developers. Discover best code times, defend code time, see the impact of meetings, and improve work-life balance. Track and visualize all of your projects, or export your data to connect to your billing and timesheet tools</p>',
                enunciated: '<p>Por outro lado, a hegemonia do ambiente político maximiza as possibilidades por conta dos conhecimentos estratégicos para atingir a excelência.</p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 8, id_office: 8, id_discipline_subject: 8, id_bank: 3, id_institution: 4, year: 2008, id_user: 4,
                issue_resolution: '<p>Desta maneira, a hegemonia do ambiente político estimula a padronização das regras de conduta normativas.</p></br><p>A certificação de metodologias que nos auxiliam a lidar com a mobilidade dos capitais internacionais causa impacto indireto na reavaliação das direções preferenciais no sentido do progresso.</p></br><p>Join a community of over 100,000 data-informed developers. Discover best code times, defend code time, see the impact of meetings, and improve work-life balance. Track and visualize all of your projects, or export your data to connect to your billing and timesheet tools</p>',
                enunciated: '<p>Percebemos, cada vez mais, que a contínua expansão de nossa atividade estimula a padronização dos conhecimentos estratégicos para atingir a excelência.</p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 9, id_office: 9, id_discipline_subject: 9, id_bank: 2, id_institution: 5, year: 2009, id_user: 4,
                issue_resolution: '<p>Desta maneira, a hegemonia do ambiente político estimula a padronização das regras de conduta normativas.</p></br><p>A certificação de metodologias que nos auxiliam a lidar com a mobilidade dos capitais internacionais causa impacto indireto na reavaliação das direções preferenciais no sentido do progresso.</p></br><p>Join a community of over 100,000 data-informed developers. Discover best code times, defend code time, see the impact of meetings, and improve work-life balance. Track and visualize all of your projects, or export your data to connect to your billing and timesheet tools</p>',
                enunciated: '<p>O cuidado em identificar pontos críticos no aumento do diálogo entre os diferentes setores produtivos é uma das consequências do impacto na agilidade decisória.</p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 10, id_office: 10, id_discipline_subject: 10, id_bank: 1, id_institution: 6, year: 2010, id_user: 4,
                issue_resolution: '<p>Desta maneira, a hegemonia do ambiente político estimula a padronização das regras de conduta normativas.</p></br><p>A certificação de metodologias que nos auxiliam a lidar com a mobilidade dos capitais internacionais causa impacto indireto na reavaliação das direções preferenciais no sentido do progresso.</p></br><p>Join a community of over 100,000 data-informed developers. Discover best code times, defend code time, see the impact of meetings, and improve work-life balance. Track and visualize all of your projects, or export your data to connect to your billing and timesheet tools</p>',
                enunciated: '<p>Evidentemente, a valorização de fatores subjetivos aponta para a melhoria de alternativas às soluções ortodoxas.</p>',
                created_at: new Date(), updated_at: new Date()
            },
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('question', null, {});
    }
};