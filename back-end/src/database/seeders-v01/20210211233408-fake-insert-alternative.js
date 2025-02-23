'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('alternative', [
            { id_alternative: 1, id_question: 1, answer: false, name_alternative: 'a) Por conseguinte, a contínua expansão de nossa atividade promove a alavancagem do fluxo de informações.', created_at: new Date(), updated_at: new Date() },
            { id_alternative: 2, id_question: 1, answer: false, name_alternative: 'b) O empenho em analisar a consulta aos diversos militantes causa impacto indireto na reavaliação de alternativas às soluções ortodoxas.O cuidado em identificar pontos críticos na adoção de políticas descentralizadoras assume importantes posições no estabelecimento dos paradigmas corporativos.', created_at: new Date(), updated_at: new Date() },
            { id_alternative: 3, id_question: 1, answer: false, name_alternative: 'c) O cuidado em identificar pontos críticos na contínua expansão de nossa atividade auxilia a preparação e a composição dos relacionamentos verticais entre as hierarquias.', created_at: new Date(), updated_at: new Date() },
            { id_alternative: 4, id_question: 1, answer: true, name_alternative: 'd) Gostaria de enfatizar que o entendimento das metas propostas estende o alcance e a importância do impacto na agilidade decisória.', created_at: new Date(), updated_at: new Date() },
            { id_alternative: 5, id_question: 2, answer: false, name_alternative: 'a) Gostaria de enfatizar que o entendimento das metas propostas estende o alcance e a importância do impacto na agilidade decisória.', created_at: new Date(), updated_at: new Date() },
            { id_alternative: 6, id_question: 2, answer: false, name_alternative: 'b) Nunca é demais lembrar o peso e o significado destes problemas, uma vez que o início da atividade geral de formação de atitudes facilita a criação do impacto na agilidade decisória.', created_at: new Date(), updated_at: new Date() },
            { id_alternative: 7, id_question: 2, answer: true, name_alternative: 'c) O cuidado em identificar pontos críticos na adoção de políticas descentralizadoras assume importantes posições no estabelecimento dos paradigmas corporativos.', created_at: new Date(), updated_at: new Date() },
            { id_alternative: 8, id_question: 2, answer: false, name_alternative: 'd) Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se o surgimento do comércio virtual possibilita uma melhor visão global do retorno esperado a longo prazo.', created_at: new Date(), updated_at: new Date() },
            { id_alternative: 9, id_question: 3, answer: false, name_alternative: 'a) Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se o surgimento do comércio virtual possibilita uma melhor visão global do retorno esperado a longo prazo.', created_at: new Date(), updated_at: new Date() },
            { id_alternative: 10, id_question: 3, answer: false, name_alternative: 'b) Por conseguinte, a contínua expansão de nossa atividade promove a alavancagem do fluxo de informações.', created_at: new Date(), updated_at: new Date() },
            { id_alternative: 11, id_question: 3, answer: true, name_alternative: 'c) Caros amigos, a determinação clara de objetivos auxilia a preparação e a composição dos índices pretendidos.', created_at: new Date(), updated_at: new Date() },
            { id_alternative: 12, id_question: 3, answer: false, name_alternative: 'd) Pensando mais a longo prazo, o aumento do diálogo entre os diferentes setores produtivos maximiza as possibilidades por conta dos relacionamentos verticais entre as hierarquias.', created_at: new Date(), updated_at: new Date() },
            { id_alternative: 13, id_question: 4, answer: true, name_alternative: 'a) O cuidado em identificar pontos críticos na contínua expansão de nossa atividade auxilia a preparação e a composição dos relacionamentos verticais entre as hierarquias.', created_at: new Date(), updated_at: new Date() },
            { id_alternative: 14, id_question: 4, answer: false, name_alternative: 'b) Pensando mais a longo prazo, o aumento do diálogo entre os diferentes setores produtivos maximiza as possibilidades por conta dos relacionamentos verticais entre as hierarquias.', created_at: new Date(), updated_at: new Date() },
            { id_alternative: 15, id_question: 4, answer: false, name_alternative: 'c) O cuidado em identificar pontos críticos na adoção de políticas descentralizadoras assume importantes posições no estabelecimento dos paradigmas corporativos.', created_at: new Date(), updated_at: new Date() },
            { id_alternative: 16, id_question: 4, answer: false, name_alternative: 'd) Gostaria de enfatizar que o entendimento das metas propostas estende o alcance e a importância do impacto na agilidade decisória.', created_at: new Date(), updated_at: new Date() },
            { id_alternative: 17, id_question: 5, answer: false, name_alternative: 'a) Caros amigos, a determinação clara de objetivos auxilia a preparação e a composição dos índices pretendidos.', created_at: new Date(), updated_at: new Date() },
            { id_alternative: 18, id_question: 5, answer: false, name_alternative: 'b) É claro que a contínua expansão de nossa atividade talvez venha a ressaltar a relatividade dos índices pretendidos.', created_at: new Date(), updated_at: new Date() },
            { id_alternative: 19, id_question: 5, answer: true, name_alternative: 'c) Nunca é demais lembrar o peso e o significado destes problemas, uma vez que o início da atividade geral de formação de atitudes facilita a criação do impacto na agilidade decisória.', created_at: new Date(), updated_at: new Date() },
            { id_alternative: 20, id_question: 5, answer: false, name_alternative: 'd) Por conseguinte, a contínua expansão de nossa atividade promove a alavancagem do fluxo de informações.', created_at: new Date(), updated_at: new Date() },
            { id_alternative: 21, id_question: 6, answer: false, name_alternative: 'a) O empenho em analisar a consulta aos diversos militantes causa impacto indireto na reavaliação de alternativas às soluções ortodoxas.O cuidado em identificar pontos críticos na adoção de políticas descentralizadoras assume importantes posições no estabelecimento dos paradigmas corporativos.', created_at: new Date(), updated_at: new Date() },
            { id_alternative: 22, id_question: 6, answer: false, name_alternative: 'b) Pensando mais a longo prazo, o aumento do diálogo entre os diferentes setores produtivos maximiza as possibilidades por conta dos relacionamentos verticais entre as hierarquias.', created_at: new Date(), updated_at: new Date() },
            { id_alternative: 23, id_question: 6, answer: false, name_alternative: 'c) O cuidado em identificar pontos críticos na contínua expansão de nossa atividade auxilia a preparação e a composição dos relacionamentos verticais entre as hierarquias.', created_at: new Date(), updated_at: new Date() },
            { id_alternative: 24, id_question: 6, answer: true, name_alternative: 'd) Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se o surgimento do comércio virtual possibilita uma melhor visão global do retorno esperado a longo prazo.', created_at: new Date(), updated_at: new Date() },
            { id_alternative: 25, id_question: 7, answer: false, name_alternative: 'a) Pensando mais a longo prazo, o aumento do diálogo entre os diferentes setores produtivos maximiza as possibilidades por conta dos relacionamentos verticais entre as hierarquias.', created_at: new Date(), updated_at: new Date() },
            { id_alternative: 26, id_question: 7, answer: true, name_alternative: 'b) É claro que a contínua expansão de nossa atividade talvez venha a ressaltar a relatividade dos índices pretendidos.', created_at: new Date(), updated_at: new Date() },
            { id_alternative: 27, id_question: 7, answer: false, name_alternative: 'c) Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se o surgimento do comércio virtual possibilita uma melhor visão global do retorno esperado a longo prazo.', created_at: new Date(), updated_at: new Date() },
            { id_alternative: 28, id_question: 7, answer: false, name_alternative: 'd) Gostaria de enfatizar que o entendimento das metas propostas estende o alcance e a importância do impacto na agilidade decisória.', created_at: new Date(), updated_at: new Date() },
            { id_alternative: 29, id_question: 8, answer: false, name_alternative: 'a) É claro que a contínua expansão de nossa atividade talvez venha a ressaltar a relatividade dos índices pretendidos.', created_at: new Date(), updated_at: new Date() },
            { id_alternative: 30, id_question: 8, answer: false, name_alternative: 'b) O cuidado em identificar pontos críticos na contínua expansão de nossa atividade auxilia a preparação e a composição dos relacionamentos verticais entre as hierarquias.', created_at: new Date(), updated_at: new Date() },
            { id_alternative: 31, id_question: 8, answer: false, name_alternative: 'c) Caros amigos, a determinação clara de objetivos auxilia a preparação e a composição dos índices pretendidos.', created_at: new Date(), updated_at: new Date() },
            { id_alternative: 32, id_question: 8, answer: true, name_alternative: 'd) O empenho em analisar a consulta aos diversos militantes causa impacto indireto na reavaliação de alternativas às soluções ortodoxas.O cuidado em identificar pontos críticos na adoção de políticas descentralizadoras assume importantes posições no estabelecimento dos paradigmas corporativos.', created_at: new Date(), updated_at: new Date() },
            { id_alternative: 33, id_question: 9, answer: true, name_alternative: 'a) Por conseguinte, a contínua expansão de nossa atividade promove a alavancagem do fluxo de informações.', created_at: new Date(), updated_at: new Date() },
            { id_alternative: 34, id_question: 9, answer: false, name_alternative: 'b) O cuidado em identificar pontos críticos na adoção de políticas descentralizadoras assume importantes posições no estabelecimento dos paradigmas corporativos.', created_at: new Date(), updated_at: new Date() },
            { id_alternative: 35, id_question: 9, answer: false, name_alternative: 'c) É claro que a contínua expansão de nossa atividade talvez venha a ressaltar a relatividade dos índices pretendidos.', created_at: new Date(), updated_at: new Date() },
            { id_alternative: 36, id_question: 9, answer: false, name_alternative: 'd) Caros amigos, a determinação clara de objetivos auxilia a preparação e a composição dos índices pretendidos.', created_at: new Date(), updated_at: new Date() },
            { id_alternative: 37, id_question: 10, answer: false, name_alternative: 'a) O cuidado em identificar pontos críticos na adoção de políticas descentralizadoras assume importantes posições no estabelecimento dos paradigmas corporativos.', created_at: new Date(), updated_at: new Date() },
            { id_alternative: 38, id_question: 10, answer: false, name_alternative: 'b) O empenho em analisar a consulta aos diversos militantes causa impacto indireto na reavaliação de alternativas às soluções ortodoxas.O cuidado em identificar pontos críticos na adoção de políticas descentralizadoras assume importantes posições no estabelecimento dos paradigmas corporativos.', created_at: new Date(), updated_at: new Date() },
            { id_alternative: 39, id_question: 10, answer: true, name_alternative: 'c) Por conseguinte, a contínua expansão de nossa atividade promove a alavancagem do fluxo de informações.', created_at: new Date(), updated_at: new Date() },
            { id_alternative: 40, id_question: 10, answer: false, name_alternative: 'd) O cuidado em identificar pontos críticos na contínua expansão de nossa atividade auxilia a preparação e a composição dos relacionamentos verticais entre as hierarquias.', created_at: new Date(), updated_at: new Date() },
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('alternative', null, {});
    }
};