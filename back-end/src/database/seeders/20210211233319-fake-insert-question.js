'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('question', [
            {
                id_question: 1, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>De acordo com o Provimento nº 260/CGJ/2013, são requisitos indispensáveis à escritura pública que implique alienação, a qualquer título, de imóvel rural ou de direito a ele relativo, assim como sua oneração, EXCETO:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 2, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Se algum comparecente ao ato não puder ou não souber escrever, outra pessoa capaz assinará por ele, a seu rogo, podendo assinar por mais de um comparecente se não forem conflitantes seus interesses. Sobre assinatura a rogo, de acordo com o Provimento nº 260/CGJ/2013, é INCORRETO afirmar que:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 3, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>De acordo com o Código Civil, a renúncia da herança deve constar expressamente de instrumento público ou termo judicial. Acerca desse assunto e levando em conta o Provimento nº 260/CGJ/2013, é correto afirmar que:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 4, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Na qualidade de Tabelião de notas do 1º Ofício de Notas de Belo Horizonte, você é procurado por dois irmãos, Pedro e Lucas, que são proprietários de um apartamento e estão vendendo para a senhora Fátima. De acordo com as informações prestadas, Pedro é solteiro, ao passo que Lucas é casado no regime da comunhão parcial de bens, ao passo que a senhora. Fátima é viúva. Levando em consideração o Provimento nº 260/CGJ/2013, quais documentos seriam de apresentação obrigatória com relação às partes para a confecção do ato pretendido:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 5, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Diretivas Antecipadas de Vontade, também conhecidas como Testamento Vital, acerca desse ato é correto afirmar que:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 6, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>O Conselho Nacional de Justiça editou diversos provimentos no ano de 2018 relativos à atividade notarial e registral. Entre eles, destaca-se o nº 78, de 07 de novembro de 2018, o qual dispõe sobre a compatibilidade da atividade notarial com o exercício simultâneo de mandato eletivo. Acerca desse ato normativo, é correto afirmar que:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 7, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Levando em consideração as normas editadas pela Corregedoria-Geral de Justiça do Estado de Minas Gerais, você, na qualidade de Tabelião, caso seja solicitado para lavrar uma escritura de compra e venda em que parte vendedora seja representada por procurador, deverá solicitar a apresentação do seguinte documento:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 8, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Levando em consideração as normas editadas pela Corregedoria-Geral de Justiça do Estado de Minas Gerais, você, na qualidade de Tabelião, caso seja solicitado para lavrar uma escritura de compra e venda em que parte vendedora seja uma pessoa jurídica, cujo objeto seja o desenvolvimento de sites e aplicativos de celulares voltados para o mercado imobiliário, deverá solicitar, entre outros, o seguinte documento, EXCETO:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 9, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>De acordo com o Provimento nº 260/CGJ/2013, incube ao Tabelião de notas:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 10, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>De acordo com o Provimento nº 260/CGJ/2013, é dever do Tabelião de notas comunicar:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 12, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>O ato notarial ou registral relativo à situação jurídica com conteúdo financeiro será praticado com base nos parâmetrosconstantes no art. 10, §3º, da Lei Estadual nº 15.424/2004, prevalecendo o que for maior. Levando tal fato emconsideração, o Provimento nº 260/CGJ/2013 permite que:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 13, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>De acordo com a Lei nº 15.424/2004, os emolumentos e a respectiva Taxa de Fiscalização Judiciária e demais despesas, devidos pela apresentação e distribuição a protesto de títulos e documentos de dívida, serão pagos pelos interessados nos seguintes momentos, EXCETO:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 14, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Em 2015, foi instituída, em Minas Gerais, a Central Eletrônica de Protestos do Estado de Minas Gerais – CENPROT-MG. Acerca dessa importante ferramenta, NÃO é correto afirmar que:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
          {
                id_question: 15, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Em 27 de junho de 2018, foi publicado, pelo Conselho Nacional de Justiça, o Provimento nº 72, o qual trata de medidas de incentivo à quitação ou à renegociação de dívidas protestadas nos tabelionatos de protesto do Brasil. Acerca desse ato normativo, analise as afirmativas a seguir.</strong></p><ol style="list-style-type: upper-roman;"><li>As medidas de incentivo à quitação ou à renegociação de dívidas protestadas nos tabelionatos de protesto serão medidas prévias e obrigatórias aos procedimentos de conciliação e mediação e deverão observar os requisitos previstos no Provimento nº 72/2018/CNJ.</li><li>A qualquer tempo, o devedor poderá formular proposta de pagamento ao credor, caso em que será expedido aviso ao credor acerca das condições da proposta, arcando o interessado com a eventual despesa respectiva.</li><li>Apenas o devedor poderá requerer a designação de sessão de conciliação ou de mediação, aplicando-se as disposições previstas no Provimento CN-CNJ nº 67/2018.</li><li>Será vedado aos tabelionatos de protesto estabelecer, em documentos por eles expedidos, cláusula compromissória de conciliação ou de mediação extrajudicial.</li><li>As medidas de incentivo à quitação ou à renegociação de dívidas protestadas nos tabelionatos de protesto serão consideradas a primeira fase do procedimento de conciliação ou de mediação.</li></ol><p><strong>Estão corretas apenas as afirmativas.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 16, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong><p><strong>De acordo com o Provimento nº 260/CGJ/2013, analise as assertivas a seguir.</strong></p><ol style="list-style-type: upper-roman;"><li>O reconhecimento de filho por pessoa relativamente incapaz depende de assistência.</li><li>É possível o reconhecimento de filho por pessoa menor de 16 anos, desde que devidamente representada.</li><li>O reconhecimento de filho é ato personalíssimo, não podendo ser feito através de declaração particular com firma reconhecida ou por instrumento público.</li><li>Caso apenas a mãe da criança compareça ao cartório para fazer o registro, mas deseje constar o nome do pai da criança, com quem é casada, esta deverá apresentar a certidão de casamento com o pai do menor com data de expedição anterior ao nascimento e dentro do prazo validade de noventa dias.</li></ol><p><strong>Está correto o que se afirma em</strong></p></strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 17, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Em relação ao casamento, de acordo com o Provimento nº 260/CGJ/2013, é correto afirmar que:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 18, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Marque a afirmativa que NÃO corresponde aos relatórios que devem ser enviados pelo Registrador Civil das Pessoas Naturais.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 19, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Em relação ao reconhecimento de paternidade e maternidade socioafetiva, é INCORRETO afirmar que:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 20, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong><p><strong>De acordo com a Lei nº 13.097/2015, os negócios jurídicos que tenham por fim constituir, transferir ou modificar direitos reais sobre imóveis são eficazes em relação a atos jurídicos precedentes, nas hipóteses em que não tenham sido registradas ou averbadas na matrícula do imóvel as seguintes informações:</strong></p><ol style="list-style-type: upper-roman;"><li>Averbação de ações reais ou pessoais reipersecutórias.</li><li>Averbação, por solicitação do interessado, de constrição judicial, do ajuizamento de ação de execução ou de fase de cumprimento de sentença, procedendo-se nos termos previstos do art. 615-A da Lei nº 5.869, de 11 de janeiro de 1973 – Código de Processo Civil.</li><li>Averbação de restrição administrativa ou convencional ao gozo de direitos registrados, de indisponibilidade ou de outros ônus quando previstos em lei.</li><li>Averbação, independentemente de decisão judicial, da existência de outro tipo de ação cujos resultados ou responsabilidade patrimonial possam reduzir seu proprietário à insolvência, nos termos do inciso II do art. 593 da Lei nº 5.869, de 11 de janeiro de 1973 – Código de Processo Civil.</li></ol><p><strong>Estão corretas as afirmativas</strong></p></strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 21, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>NÃO é correto afirmar, em relação ao registro de nascimento lavrado nas Unidades Interligadas:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 22, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>De acordo com o Provimento nº 260/CGJ/2013, assinale a alternativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 23, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Assinale a alternativa correta em relação ao Registro de Títulos e Documentos, de acordo com o prescrito pelo Provimento nº 260/CGJ/2013.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
          {
                id_question: 24, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>O Provimento nº 39/2014 do CNJ dispõe sobre a instituição e funcionamento da Central Nacional de Indisponibilidade de Bens – CNIB, destinada a recepcionar comunicações de indisponibilidade de bens imóveis não individualizados. De acordo com esse ato normativo, assinale a afirmativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 25, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Com base no disposto no Provimento nº 260/CGJ/2013, analise as afirmativas sobre alienação fiduciária de bens imóveis. </strong></p><ol style="list-style-type: upper-roman;"><li>O termo de quitação deverá conter firma reconhecida e estar acompanhado, se for o caso, dos instrumentos que comprovem a legitimidade da representação.</li><li>Caso haja a emissão de cédula de crédito imobiliário de forma cartular, a quitação com autorização para cancelamento da alienação fiduciária e baixa da cédula deverá ser lançada na própria via negociável, que ficará arquivada.</li><li>Caso haja a emissão de cédula de crédito imobiliário de forma cartular e a autorização para cancelamento seja firmada por pessoa diversa do credor original, deverá ser averbada apenas a cessão de direitos relativa ao credor signatário, demonstrando a sua legitimidade.</li><li>A autorização para cancelamento da alienação fiduciária e baixa da cédula de crédito imobiliário de forma escritural deverá ser acompanhada de declaração da instituição custodiante, indicando quem é o atual titular do crédito fiduciário e todas as cessões que tiverem ocorrido.</li></ol><p><strong>Estão INCORRETAS apenas as afirmativas</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 26, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong><p><strong>Analise as afirmativas a seguir, de acordo com a Lei nº 6.766/79.</strong></p><ol style="list-style-type: upper-roman;"><li>O contrato particular pode ser transferido por simples trespasse, lançado no verso das vias em poder das partes, ou por instrumento em separado, declarando-se o número do registro do loteamento, o valor da cessão e a qualificação do cessionário, para o devido registro.</li><li>A cessão independe da anuência do loteador mas, em relação a este, seus efeitos só se produzem depois de cientificado, por escrito, pelas partes ou quando registrada a cessão.</li><li>Uma vez registrada a cessão, feita sem anuência do loteador, o Oficial do Registro dar-lhe-á ciência, por escrito, dentro de dez dias.</li><li>Vencida e não paga a prestação, o contrato será considerado rescindido quinze dias depois de constituído em mora o devedor.</li></ol><p><strong>Estão corretas apenas as afirmativas</strong></p></strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 27, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>De acordo com o Provimento nº 45/2015 do CNJ, que consolidou as normas relativas à manutenção e escrituração dos livros Diário Auxiliar, Visitas e Correições e Controle de Depósito Prévio pelos titulares de delegações e responsáveis interinos do serviço extrajudicial de notas e registros públicos, é correto afirmar que:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 28, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Conforme estabelecido pelo Provimento nº 53/2016 do CNJ, em seu art. 1º, caput, “a averbação direta no assento de casamento da sentença estrangeira de divórcio consensual simples ou puro, bem como da decisão não judicial de divórcio, que pela lei brasileira tem natureza jurisdicional, deverá ser realizada perante o Oficial de Registro Civil das Pessoas Naturais”. Sobre o tema, analise as afirmativas a seguir.</strong></p><ol style="list-style-type: upper-roman;"><li>A averbação direta no assento de casamento da sentença estrangeira de divórcio consensual simples e puro, bem como da decisão não judicial de divórcio, que pela lei brasileira tem natureza jurisdicional, depende de prévia homologação da sentença estrangeira pelo Superior Tribunal de Justiça e/ou de prévia manifestação de qualquer outra autoridade judicial brasileira.</li><li>A averbação direta dispensa a assistência de advogado ou defensor público.</li><li>A averbação da sentença estrangeira de divórcio consensual, que, além da dissolução do matrimônio, envolva disposição sobre guarda de filhos, alimentos e/ou partilha de bens – denominado divórcio consensual qualificado – dependerá de prévia homologação pelo Superior Tribunal de Justiça. IV. Para averbação direta, o interessado deverá apresentar, no Registro Civil de Pessoas Naturais junto ao assento de seu casamento, apenas a cópia integral da sentença estrangeira, acompanhada de tradução oficial.</li></ol><p><strong>Está correto o que se afirma em:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 29, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Machado de Assis foi considerado um dos maiores nomes da literatura brasileira, tendo escrito inúmeros romances, contos e poesias. NÃO é da autoria de Machado de Assis o livro:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 30, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>A Primavera Árabe começou no final do ano de 2010 com protestos que reivindicavam mudanças e inquiriam certos modelos de governo ditatoriais. Um dos alvos foi o ditador Ali Abdullah Saleh, que era presidente:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 31, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Tendo em vista as disposições da Lei de Introdução às Normas do Direito Brasileiro, assinale a alternativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 32, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Considerando a disciplina saída da Lei de Introdução às Normas do Direito Brasileiro, assinale a alternativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 33, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>De acordo com as hipóteses de atos que demandam averbação em registro público contempladas pelo art. 10, do Código Civil, assinale a alternativa que se insere nesse rol.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 34, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Tendo em vista os preceitos do Código Civil a respeito da novação, assinale a alternativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 35, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Considerando as prescrições do Código Civil acerca das pessoas jurídicas, assinale a alternativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 36, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Tendo em mira a classificação dos bens feita pelo Código Civil, assinale a alternativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 37, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Analise as proposições destacadas a seguir e assinale a correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 38, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>De acordo com a estrutura traçada pelo Código Civil para os defeitos do negócio jurídico, assinale a alternativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 39, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Dentre as hipóteses declinadas a seguir, assinale aquela que corresponde a uma causa interruptiva da prescrição prevista no art. 202, do Código Civil.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 40, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Considerando os prazos prescricionais previstos no Código Civil, assinale a proposição correta dentre as destacadas a seguir.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 41, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Assinale as afirmativas sobre obrigações de dar coisa certa ou incerta e assinale aquela que espelha a hipótese correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 42, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>De acordo com o Código Civil Brasileiro, analise as seguintes afirmativas a respeito do contrato de compra e venda.</strong></p><ol style="list-style-type: upper-roman;"><li>A compra e venda é contrato consensual, que gera efeitos reais, transmitindo, por si só, a propriedade da coisa alienada.</li><li>No contrato de compra e venda, pode-se deixar ao arbítrio exclusivo de uma das partes a fixação do preço.</li><li>A venda de ascendente a descendente é anulável, salvo se os outros descendentes e o cônjuge do alienante expressamente houverem consentido.</li><li>Na venda ad corpus, que é aquela em que o imóvel é transferido como coisa certa e discriminada, tendo sido apenas enunciativa a referência às suas dimensões, não haverá complemento de área, nem devolução do excesso.</li></ol><p><strong>Estão corretas as afirmativas:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 43, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Analise as seguintes afirmativas a respeito da Responsabilidade Civil.</strong></p> <ol style="list-style-type: upper-roman;"> <li>É objetiva a responsabilidade civil dos notários e oficiais de registros por todos os prejuízos que causarem a terceiros, pessoalmente, pelos substitutos que designarem ou escreventes que autorizarem, assegurado o direito de regresso.</li> <li>Independe de culpa a responsabilidade civil do empregador ou comitente, por seus empregados, serviçais e prepostos, no exercício do trabalho que lhes competir, ou em razão dele.</li> <li>É objetiva a responsabilidade civil do fornecedor de bens ou serviços pelos danos decorrentes do fato do produto ou serviço.</li> <li>A responsabilidade contratual do transportador por acidente com o passageiro é objetiva, sendo excluída por motivo de força maior ou por culpa de terceiro.</li> </ol> <p><strong>Estão corretas as afirmativas:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 44, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Conforme as disposições do Código Civil, analise as seguintes afirmativas sobre a posse. </strong></p><ol style="list-style-type: upper-roman;"><li>A posse direta e indireta são coexistentes e não colidem nem se excluem.</li><li>O locatário, o arrendatário e o comodatário gozam da proteção possessória.</li><li>É justa a posse que não for violenta, clandestina ou precária. A posse precária é a que se origina do abuso de confiança daquele que recebeu a coisa, para restituir, e se recusa a fazê-lo.</li><li>Salvo prova em contrário, entende-se manter a posse o mesmo caráter com que foi adquirida. Pode, porém, o possuidor mudar o título da posse, por um fundamento jurídico.</li></ol><p><strong>Estão corretas as afirmativas:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 45, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>De acordo com o Código Civil Brasileiro, analise as afirmativas sobre a usucapião. </strong></p><ol style="list-style-type: upper-roman;"><li>A posse ad usucapionem é a posse mansa, pacífica e contínua, por certo lapso de tempo.</li><li>A usucapião pode ser arguida em defesa.</li><li>O justo título e a boa-fé são alguns dos requisitos da usucapião ordinária. Diz-se justo o título hábil, em tese, para transferir a propriedade.</li><li>Na usucapião extraordinária, o prazo de quinze anos reduzir-se-á a dez anos, se o possuidor houver estabelecido no imóvel a sua moradia habitual, ou nele realizado obras ou serviços de caráter produtivo.</li></ol><p><strong>Estão corretas as afirmativas:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 46, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>De acordo com o Código Civil Brasileiro, analise as seguintes afirmativas sobre o direito real de superfície. </strong></p><ol style="list-style-type: upper-roman;"><li>O direito real de superfície concede ao seu titular o direito de construir ou plantar em terreno alheio, perpétua ou temporariamente.</li><li>O contrato que institui a superfície pode ser gratuito ou oneroso. No oneroso, o proprietário da terra tem direito a pagamento, que poderá ser feito de uma só vez ou parceladamente.</li><li>O direito de superfície pode transferir-se a terceiros e, por morte do superficiário, aos seus herdeiros. É permitido ao concedente cobrar um pagamento pela transferência, a que título for.</li><li>O direito real de superfície somente se constitui mediante escritura pública, devidamente registrada no Cartório de Registro de Imóveis.</li></ol><p><strong>Estão corretas as afirmativas:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 47, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>A respeito dos direitos reais de garantia, regulados no Código Civil Brasileiro, analise as afirmativas a seguir.</strong></p><ol style="list-style-type: upper-roman;"><li>No ato constitutivo dos direitos reais de garantia, é nula a cláusula que confira ao credor a faculdade de se apoderar da coisa dada em garantia.</li><li>O pagamento de uma ou mais prestações da dívida importa a exoneração correspondente da garantia real.</li><li>Enquanto não registrada, a hipoteca não se constitui direito real.</li><li>Na instituição da hipoteca, pode convencionar-se que o proprietário fica proibido de alienar o imóvel hipotecado.</li></ol><p><strong>Estão corretas as afirmativas:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 48, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>De acordo com as normas do Código Civil Brasileiro, analise as seguintes afirmativas sobre o casamento.</strong></p><ol style="list-style-type: upper-roman;"><li>Não será permitido, em qualquer caso, o casamento de quem não atingiu a idade de dezesseis anos.</li><li>O oficial do cartório do registro civil está obrigado a declarar qualquer impedimento de cuja existência tiver conhecimento.</li><li>O casamento realizado no Brasil prova-se pela certidão de registro, não se admitindo, em qualquer hipótese, outra espécie de prova.</li><li>É pressuposto para o reconhecimento da putatividade do casamento que tenha sido contraído de boa-fé por ambos os cônjuges ou apenas por um deles.</li></ol><p><strong>Estão corretas as afirmativas:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 49, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Com base nas disposições da Constituição Federal e do Código Civil, analise as seguintes afirmações sobre a guarda dos filhos e alimentos. </strong></p><ol style="list-style-type: upper-roman;"><li>Na fixação da guarda dos filhos, deve preponderar o princípio do melhor interesse da criança ou adolescente.</li><li>A aplicação da guarda compartilhada dos filhos depende da existência de consenso entre os genitores.</li><li>O direito à prestação de alimentos entre os parentes, cônjuges ou companheiros é recíproco. Entre parentes, na linha reta, é extensivo a todos os ascendentes, recaindo a obrigação nos mais próximos em grau, uns em falta dos outros.</li><li>A maioridade dos filhos não acarreta a exoneração automática da obrigação de prestar alimentos.</li></ol><p><strong>Estão corretas as afirmativas:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 50, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Conforme a Constituição da República e Código Civil Brasileiro, observada a supremacia da norma constitucional, analise as seguintes afirmativas a respeito da União Estável. </strong></p><ol style="list-style-type: upper-roman;"><li>A união estável configura-se na convivência pública, contínua e duradoura, com o ânimo dos companheiros de constituir família.</li><li>Para a caracterização da união estável não se exige um prazo mínimo de convivência dos companheiros, nem que tenham habitação comum.</li><li>Na união estável, aplica-se às relações patrimoniais, no que couber, o regime de comunhão parcial de bens, salvo contrato escrito entre os companheiros.</li><li>A união estável não se constituirá se ocorrer algum dos impedimentos matrimoniais, mas a pessoa casada, achando-se separada de fato ou judicialmente, pode ser partícipe de união estável.</li></ol><p><strong>Estão corretas as afirmativas:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 51, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Conforme o Código Civil Brasileiro, analise as seguintes afirmativas sobre o direito das sucessões.</strong></p><ol style="list-style-type: upper-roman;"><li>Aberta a sucessão, a herança transmite-se automática e imediatamente aos herdeiros legítimos e testamentários, independentemente de qualquer ato dos sucessores.</li><li>O inventário extrajudicial será lavrado, por escritura pública, no lugar do último domicílio do autor da herança.</li><li>O nascituro possui legitimidade para suceder, mas a transmissão da herança está condicionada ao nascimento com vida.</li><li>A aceitação da herança sob benefício de inventário consiste no princípio de que o herdeiro não responde por encargos superiores às forças da herança, cabendo-lhe, porém, a prova do excesso.</li></ol><p><strong>Estão corretas as afirmativas:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 52, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>De acordo com as disposições do Código Civil Brasileiro, analise as seguintes afirmativas a respeito da sucessão testamentária.</strong></p><ol style="list-style-type: upper-roman;"><li>Havendo herdeiros necessários, a sucessão testamentária e a sucessão legítima podem coexistir.</li><li>As pessoas casadas entre si podem fazer um testamento simultâneo, em um só ato, instituindo benefícios mútuos.</li><li>Admite-se cláusula testamentária que proíba, total ou parcialmente, a revogação do testamento (cláusula derrogatória).</li><li>O testamento público exige, sob pena de nulidade, que seja escrito por tabelião ou seu substituto legal em seu livro de notas, de acordo com as declarações do testador.</li></ol><p><strong>Estão corretas as afirmativas:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 53, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Sabe-se que a tutela provisória pode fundamentar-se em urgência ou evidência. Sendo uma tutela provisória de urgência, cautelar ou antecipada, pode ser concedida em caráter antecedente ou incidental. Neste diapasão, é correto afirmar que:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 54, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Giza P. é detentora dos seguintes títulos executivos: uma nota promissória, um cheque e um contrato, prevendo obrigações de pagar e fazer. Giza necessita promover a execução de tais títulos pois, seu devedor, João Gilberto, figura conhecida pela contumácia em não honrar seus compromissos, mais uma vez, não efetuou a tempo e modo o pagamento e tampouco cumpriu a obrigação de fazer. Giza procura um advogado e informa que deseja executar seu devedor, promovendo a execução em juízo de tais títulos. Considerando a situação hipotética, assim como as regras relativas à cumulação de execuções, é correto afirmar que:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 55, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Em relação à ordem dos processos no tribunal, quando o resultado da apelação for não unânime, o julgamento terá prosseguimento em sessão a ser designada com a presença de outros julgadores que serão convocados nos termos previamente definidos no regimento interno do respectivo tribunal, em número suficiente a garantir a possibilidade de inversão do resultado inicial, assegurado às partes e a eventuais terceiros o direito de sustentar oralmente suas razões perante os novos julgadores. A afirmativa anterior trata da regra do julgamento estendido, em que se pode afirmar que:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 56, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>A homologação de decisão estrangeira é procedimento previsto no Livro III do CPC/2015, em seu título I – Da ordem dos processos e dos processos de competência originária dos tribunais – sendo que sua homologação será requerida por ação de homologação de decisão estrangeira, salvo disposição especial em sentido contrário prevista em tratado. Sobre a homologação de decisão estrangeira e seus requisitos indispensáveis, analise as afirmativas a seguir. </strong></p><ol style="list-style-type: upper-roman;"><li>Deve ser proferida por autoridade competente.</li><li>Deve ser precedida de citação regular, ainda que verificada a revelia.</li><li>Deve estar acompanhada de tradução oficial, ainda que haja dispensa prévia em tratado.</li><li>Deve ser eficaz no país em que for proferida.</li></ol><p><strong>Estão corretas as afirmativas:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 57, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Segundo as normas e princípios contidos na Constituição Federal e no Código de Processo Civil, analise as afirmativas a seguir. </strong></p><ol style="list-style-type: upper-roman;"><li>A instauração do processo depende de provocação das partes e seu desenvolvimento se dá por impulso oficial, salvo as exceções previstas em lei.</li><li>Em razão do princípio dispositivo, o juiz não pode, de ofício, determinar a produção de provas.</li><li>O descumprimento das normas reguladoras da competência resulta em violação ao princípio do juiz natural.</li><li>Nos procedimentos de jurisdição voluntária, o juiz pode decidir por critérios de equidade.</li></ol><p><strong>Estão corretas as afirmativas:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 58, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Segundo as normas e princípios contidos no Código de Processo Civil, analise as afirmativas a seguir.</strong></p><ol style="list-style-type: upper-roman;"><li>A preclusão temporal, que consiste na perda da faculdade ou direito processual pelo seu não exercício no momento oportuno, não depende de declaração judicial.</li><li>Por força do princípio da instrumentalidade das formas, quando a lei prescrever determinada forma, o juiz considerará válido o ato se, realizado de outro modo, lhe alcançar a finalidade.</li><li>A citação válida interrompe a prescrição, ainda quando ordenada por juízo incompetente.</li><li>O indeferimento da petição inicial é decisão judicial que impede, liminarmente, o prosseguimento do feito e somente ocorrerá antes de determinada a citação do réu.</li></ol><p><strong>Estão corretas as afirmativas:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 59, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>De acordo com as normas e princípios contidos no Código de Processo Civil, analise as afirmativas a seguir.</strong></p><ol style="list-style-type: upper-roman;"><li>A desconsideração da personalidade jurídica poderá ser determinada de ofício pelo juiz, a requerimento da parte, ou do Ministério Público, quando lhe couber intervir no processo.</li><li>A citação será feita pelo correio e somente ocorrerá de outra forma no caso de requerimento da parte, devidamente justificado.</li><li>A tutela de urgência de natureza antecipada tem como pressupostos a probabilidade do direito, o perigo de dano ou o risco ao resultado útil do processo e, ainda, a reversibilidade dos efeitos da decisão.</li><li>A ata notarial é documento público que serve como meio de prova em juízo e goza de presunção relativa de veracidade.</li></ol><p><strong>Estão corretas as afirmativas:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 60, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>De acordo com as normas e princípios contidos no Código de Processo Civil, analise as afirmativas a seguir.</strong></p><ol style="list-style-type: upper-roman;"><li>A publicação da sentença fixa o seu conteúdo e o juiz que a proferiu só pode alterá-la no caso de acolhimento dos embargos de declaração.</li><li>Os motivos da decisão, contidos na fundamentação, fazem coisa julgada, quando importantes para determinar o alcance da parte dispositiva da sentença.</li><li>A coisa julgada material abrange o deduzido e o deduzível, tanto em relação ao autor quanto ao réu.</li><li>A sentença, proferida contra a União, os Estados, o Distrito Federal, os Municípios e suas respectivas autarquias e fundações de direito público, que estiver fundada em súmula de tribunal superior, não está sujeita ao reexame necessário.</li></ol><p><strong>Estão corretas as afirmativas:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 61, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>A respeito do crime de peculato e suas várias formas de ocorrência, assinale a alternativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 62, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Quanto ao Procedimento Especial do Tribunal do Júri, assinale a alternativa INCORRETA.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 63, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Segundo o atual entendimento dos tribunais superiores quanto à aplicação dos ditames da Lei Antidrogas (Lei nº 11.343/2006), analise as afirmativas a seguir.</strong></p><ol style="list-style-type: upper-roman;"><li>É inconstitucional a proibição de substituição de pena privativa de liberdade por restritiva de direitos, no chamado tráfico privilegiado (art. 33, §4º da Lei nº 11.343/2006).</li><li>É inconstitucional a imposição de regime fechado ao crime de tráfico de drogas pelo simples fundamento de se tratar de crime hediondo.</li><li>Segundo a Súmula nº 512 do STJ, ainda vigente, o crime de tráfico privilegiado tem natureza hedionda.</li><li>A natureza e a quantidade da droga apreendida não preponderam sobre as circunstâncias judiciais genéricas trazidas no art. 59 do Código Penal.</li><li>O STF reconheceu a repercussão geral da questão envolvendo a descriminalização da posse de drogas para consumo pessoal.</li></ol><p><strong>Estão corretas apenas as afirmativas:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 64, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Com relação ao procedimento sumaríssimo e às regras aplicáveis ao Juizado Especial Criminal, assinale a alternativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 65, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Ao receber uma denúncia por crimes de furto qualificado e estelionato, lastreada em inquérito policial, o juiz entendeu que os fatos apurados no procedimento inquisitório não configuravam os crimes em apreço, mas apenas furto simples. Assim, rejeitou a denúncia quanto aos dois delitos, recebendo-a somente quanto ao crime de furto simples. A decisão judicial foi:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 66, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Quanto à imputabilidade em Direito Penal, assinale a alternativa INCORRETA.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 67, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Quanto à teoria do erro em Direito Penal, assinale a opção correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 68, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>“Pode-se afirmar que constitui verdadeira barreira ao abuso da intervenção punitiva do Estado, evitando-se o exagero da utilização desmedida do Direito Penal como agente solucionador de conflitos e panaceia de todos os males. Busca restringir o âmbito de atuação do Direito Penal às situações realmente relevantes, em que a ação do Estado seja necessária e outros ramos do Direito não sejam capazes de dar solução adequada ao conflito.” Tal assertiva relaciona-se com o Princípio da:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 69, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Sobre a competência tributária, assinale a alternativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 70, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Avalie as afirmativas a seguir.</strong></p> <ol style="list-style-type: upper-roman;"> <li>O Princípio da Anterioridade veda a cobrança de tributos em relação a fatos geradores ocorridos antes do início da vigência da lei que os houver instituído ou aumentado.</li> <li>O parcelamento suspende a exigibilidade das obrigações acessórias do crédito tributário e impede o lançamento de tributos e penalidades relacionados com as suas obrigações principais e acessórias.</li> <li>É da competência dos Estados e do Distrito Federal estabelecer hipótese de imunidade tributária em relação a fato que esteja sujeito à incidência do imposto sobre propriedade de veículos automotores.</li> <li>Interpreta-se da maneira mais favorável ao sujeito passivo a legislação tributária que disponha sobre a dispensa do cumprimento de obrigações tributárias acessórias.</li> </ol> <p><strong>Assinale a alternativa correta:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 71, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Considerando os temas vigência e aplicação da legislação tributária, interpretação e integração da legislação tributária, bem como as disposições do CTN, assinale a alternativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 72, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Sobre os temas fato gerador, capacidade tributária e obrigação tributária, assinale a alternativa INCORRETA.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 73, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>São causas de extinção do crédito tributário, EXCETO:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 74, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Sobre a repartição de receitas tributárias, assinale a alternativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 75, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Acerca da jurisprudência do STJ em matéria tributária, assinale a alternativa INCORRETA.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 76, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Em relação à jurisprudência do STF em matéria tributária, assinale a alternativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 78, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Quanto aos títulos de crédito, assinale a alternativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 80, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>A Lei nº 11.101, de 09/02/2005, traz a regulamentação dos procedimentos de falência e de recuperação judicial de empresas. À luz dessa legislação, é correto afirmar que:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 81, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Joaquim emitiu um cheque no valor de R$ 500,00 (quinhentos reais), valor este indicado por extenso no campo próprio, mas no valor de R$ 5.000,00 (cinco mil reais), indicado no campo dos algarismos. O título foi emitido em razão de uma compra e venda mercantil realizada na empresa E, pelo mesmo valor indicado no campo dos algarismos (cinco mil reais). A empresa E transmitiu o cheque ao fornecedor F, terceiro de boa-fé, como forma de pagamento parcial de suas obrigações. O fornecedor F, por sua vez, cruzou o cheque e apostou endosso no título, ressalvando sua obrigação cambial apenas em relação a 50% do crédito, transmitindo-o, em seguida, a terceiros. Quanto às obrigações cambiais em questão, analise as afirmativas a seguir. </strong></p><ol style="list-style-type: upper-roman;"><li>O portador do cheque, diante de informações divergentes a respeito da quantia a ser paga, no campo de algarismos e no campo por extenso, deverá se ater sempre à menor quantia dentre elas, para fazer valer o seu crédito.</li><li>O endosso realizado pelo “fornecedor F” limita sua obrigação cambial, de forma que o endossatário se torna credor de apenas de 50% do valor do título.</li><li>O fato de o “fornecedor F” ter cruzado o cheque não o impede de transmiti-lo por endosso.</li><li>A causa debendi pode ser utilizada como óbice para pagamento da quantia expressa no cheque, perante o credor de boa-fé.</li></ol><p><strong>Assinale a alternativa correta:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
             {
                id_question: 82, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>De acordo com a Lei nº 5.474, de 18 de julho de 1968, e a legislação pertinente, analise as afirmativas a seguir.</strong></p> <ol style="list-style-type: upper-roman;"> <li>Os coobrigados de uma duplicata respondem solidariamente não só pelo pagamento, mas também pelo aceite do título.</li> <li>A solidariedade entre os coobrigados de uma duplicata só ocorre caso o título tenha sido protestado.</li> <li>A duplicata pode ser protestada por falta de aceite, de pagamento e de devolução. IV. O fato de não ter sido a duplicata protestada por falta de aceite ou por falta de devolução inibe o protesto por falta de pagamento.</li> </ol> <p><strong>Assinale a alternativa correta:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
             {
                id_question: 83, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>A respeito das sociedades por cotas de responsabilidade limitada, analise as proposições a seguir.</strong></p><ol style="list-style-type: upper-roman;"><li>A exclusão de sócio remisso depende de previsão em cláusula resolutória do contrato social.</li><li>Falecendo um dos sócios, o ingresso dos herdeiros na sociedade é obrigatório, desde que haja cláusula contratual expressa.</li><li>Admite-se a redução do capital social, bastando que haja deliberação de todos os sócios e a devida modificação do contrato e correspondente averbação.</li><li>O sócio-administrador pode delegar o uso da firma a terceiro mesmo que a isso se oponha o contrato social; neste caso, responderá pessoalmente pelas obrigações contraídas pelo seu delegatário.</li></ol><p><strong>Assinale a alternativa correta:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 88, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>A Constituição Federal previu no inciso XXVII, do art. 22, a competência privativa da União para legislar acerca de normas gerais de licitação e contratação em todas as modalidades na Administração Pública Direta e Indireta. Assim, a Lei nº 8.666/93 presta-se a cumprir tal finalidade. Considerando as regras pertinentes aos contratos públicos e à Lei de Licitações, assinale a alternativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 89, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>A Administração Pública pode celebrar contrato de concessão de Parceria Público-Privada (PPP), a qual se rege pela Lei nº 11.079/2004. A modalidade contratual em questão difere-se das concessões regulares, pois agasalha participação financeira do ente público. Diante do regramento pertinente às Parcerias Público-Privadas, assinale a alternativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 90, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>A responsabilização objetiva do Estado torna a culpa como não pressuposto para sua caracterização, o que desonera, neste aspecto, o lesado quanto a tal evidência. No que diz respeito ao direito de regresso pela Administração Pública, é correto afirmar que:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 92, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>A descentralização da atividade estatal explana-se na administração indireta, na qual se inserem as autarquias, sendo estas pessoas jurídicas, com função própria e típica outorgada pelo Estado. Considerando a natureza jurídica e a finalidade das autarquias, é correto afirmar que:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 93, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>A Constituição, que concentra a fonte de validade de todo o ordenamento jurídico estatal, possui normas que podem ser entendidas em dois sentidos, o material e o formal. Quanto aos sentidos material e formal das normas constitucionais, é correto afirmar que:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 94, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>A Constituição Brasileira de 1988 estabeleceu a matéria de reforma constitucional, estabelecendo limites materiais e formais ao exercício do poder constituinte derivado. Acerca desses limites para reforma, estabelecidos no texto constitucional, avalie as proposições a seguir.</strong></p> <ol style="list-style-type: upper-roman;"> <li>Os limites materiais são imperativos e se dividem em limites de competência, de momento ou temporais e de formalidade.</li> <li>A Constituição não pode ser reformada na vigência de intervenção federal ou estadual, de estado de defesa ou de estado de sítio.</li> <li>No que concerne aos limites temporais, há vedação para votação de proposta de matéria que, na mesma sessão legislativa, tenha sido rejeitada, sem prejuízo da sua rediscussão em comissões permanentes ou especiais do parlamento.</li> <li>O texto constitucional admitiu a possibilidade de revisão, através de resposta direta do eleitorado, quanto à forma (monarquia ou república) e ao sistema de governo (parlamentarismo ou presidencialismo).</li> </ol> <p><strong>Assinale a alternativa correta:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 95, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Avalie as proposições relacionadas ao controle de constitucionalidade exercido pelo Poder Judiciário, no Direito brasileiro.</strong></p> <ol style="list-style-type: upper-roman;"> <li>Só pode ser exercido através do controle difuso.</li> <li>Admite a interposição de recurso extraordinário na arguição de inconstitucionalidade por via incidental, como também na via concentrada, iniciada nos tribunais inferiores.</li> <li>Não admite a concessão de tutela de urgência, nas ações diretas de constitucionalidade, em razão do efeito erga omnes das decisões.</li> <li>Impõe que a declaração de inconstitucionalidade, havida na ação direta, deve ser comunicada ao Senado Federal, para os fins do artigo 52, X, da Constituição.</li> </ol> <p><strong>Assinale a alternativa correta:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 96, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>O processo legislativo, consagrado no texto constitucional, consiste no conjunto coordenado de disposições que disciplinam o procedimento a ser estabelecido pelos órgãos competentes na produção de leis e atos normativos que derivam diretamente da própria constituição. Todavia, diante de uma nova ordem constitucional, normas anteriormente vigentes podem ou não receber enquadramento jurídico diverso daquele que dispunham anteriormente. A respeito do advento de uma nova ordem constitucional, assinale a alternativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 97, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>A respeito do tratamento constitucional conferido aos servidores públicos, é correto afirmar que:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 98, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>A respeito do tratamento Constitucional conferido aos serviços notariais e de registro, avalie as assertivas a seguir. </strong></p> <ol style="list-style-type: upper-roman;"> <li>Lei federal estabelecerá normas especiais para fixação de emolumentos relativos aos atos praticados pelos serviços notariais e de registro.</li> <li>O Estado responde, apenas subsidiariamente, pelos atos dos tabeliães e registradores oficiais que, no exercício de suas funções, causem dano a terceiros, assentado o dever de regresso contra o responsável, nos casos de dolo ou culpa, sob pena de improbidade administrativa.</li> <li>Caberá ao Poder Judiciário fiscalizar os atos dos notários, dos oficiais de registro e de seus prepostos, sem prejuízo da fiscalização exercida pelo Ministério Público e pelos órgãos fazendários.</li> <li>Apresentam-se como atividades jurídicas que são próprias do Estado, porém, exercidas por particulares, sempre pessoas naturais, mediante delegação ou concessão do Poder Público.</li> </ol> <p><strong>Assinale a alternativa correta:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 99, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>O servidor A foi demitido, por decisão da administração pública proferida em procedimento administrativo, já transitada em julgado. Todavia, o servidor A recorreu ao Poder Judiciário e a demissão foi invalidada, tendo a decisão judicial transitado em julgado quatro anos depois da efetivação da demissão administrativa. Todavia, nesse ínterim, o servidor B foi convocado na lista de aprovados em concurso público e nomeado para o cargo vago em razão da demissão do servidor A, tendo também alcançado a estabilidade constitucional, ao decurso de três anos. Por ocasião do cumprimento da sentença que invalidou a demissão do servidor A, foi determinada a sua imediata reintegração ao cargo que ocupava. Diante da situação exposta acima e à luz do texto constitucional, a Administração Pública deverá proceder da seguinte forma:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 100, id_office: 1, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Compete ao Conselho Nacional de Justiça o controle da atuação administrativa e financeira do Poder Judiciário, nela inserida a atividade de fiscalização dos serviços notariais e de registro, bem como o controle do cumprimento dos deveres funcionais dos juízes. Sobre a composição, as atribuições e a atuação do CNJ, de acordo com a Constituição da República, é correto afirmar que:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 101, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Acerca do Reconhecimento de firma, é correto afirmar que:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 102, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>A Lei nº 8.159/91 dispõe sobre a política nacional de arquivos públicos e privados e dá outras providências. De acordo com o referido diploma legal, é correto afirmar que:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 103, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Um fazendeiro da cidade de Curvelo/MG recebeu uma nota promissória com vencimento para o dia 25/09/2019 para o pagamento de uma vaca. No dia do pagamento, ao tentar receber aquele valor, foi informado pelo devedor que não iria pagar, uma vez que o referido animal havia falecido e que o fazendeiro vendera o animal já doente. Ao comparecer ao tabelionato de protestos, o fazendeiro deverá declarar expressamente, sob sua exclusiva responsabilidade, os seguintes dados, EXCETO:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 104, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>O Estado de Minas Gerais, com o objetivo de facilitar a vida do cidadão, editou a Lei nº 22.437/2016, posteriormente alterada pela Lei nº 22.796/2017, as quais trataram da Comunicação de Venda Eletrônica diretamente nos Tabelionatos de Notas. Acerca desse novo procedimento, é correto afirmar que:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 105, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>De acordo com o Provimento nº 260/CGJ/2013, não podem ser admitidos como testemunhas na escritura pública, EXCETO:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 106, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>De acordo com o Provimento nº 260/CGJ/2013, o edital de intimação do protesto deverá conter os seguintes requisitos:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 107, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>O protesto, quando o devedor for microempresário ou empresa de pequeno porte, obedecerá ao seguinte, EXCETO:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 108, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Analise as afirmativas acerca do Tabelionato de Protestos, levando em consideração as normativas da Corregedoria-Geral de Justiça do Estado de Minas Gerais.</strong></p><ol style="list-style-type: upper-roman;"><li>Os devedores, assim compreendidos os emitentes de notas promissórias e cheques, os sacados nas letras de câmbio e duplicatas, bem como os indicados pelo apresentante ou credor como responsáveis pelo cumprimento da obrigação, não poderão deixar de figurar no termo de lavratura e registro de protesto.</li><li>No caso de cheque de conta conjunta, será devedor apenas o correntista que tenha firmado o cheque, conforme indicação do apresentante.</li><li>Em qualquer hipótese, o avalista do devedor a este será equiparado, devendo ser intimado e figurar no termo de lavratura e registro do protesto.</li><li>A decretação de falência do devedor ou o deferimento do processamento de recuperação judicial em seu favor impedem a lavratura de protesto contra ele.</li></ol><p><strong>Estão corretas as afirmativas.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 109, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Com a finalidade de melhorar o ambiente comercial e creditório no Brasil estabelece a Lei nº 9.492/97 a interligação dos Tabelionatos de Protestos com as entidades representativas da indústria e do comércio ou àquelas vinculadas à proteção do crédito. Considerando esse assunto e, ainda, a legislação federal, bem como as normas ditadas pela Corregedoria-Geral de Justiça do Estado de Minas Gerais, é correto afirmar que:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 110, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Com relação às procurações em causa própria, de acordo com a Consolidação Normativa Notarial e Registral da Corregedoria-Geral da Justiça do Estado de Minas Gerais (Provimento nº 260/CGJ/2013), é correto afirmar que:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 111, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Em relação ao Apostilamento, levando em consideração as normas editas pelo Conselho Nacional de Justiça, é correto afirmar que:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 112, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>A sociedade empresária Pneus Reformados Ltda. é a única credora da Sociedade empresária Borracharia da Esquina Ltda. de uma duplicata no valor de R$ 35.000.00 (trinta e cinco mil reais). Indignada com essa situação, a gerente da credora procura o Tabelionato de Protestos com a finalidade de buscar a falência da devedora lastreada no art. 94, I da Lei de Falências. Considerando esse contexto, analise as afirmativas a seguir.</strong></p><ol style="list-style-type: upper-roman;"><li>Caberá ao apresentante indicar o endereço do domicílio da sede do devedor, devendo a intimação ser entregue nesse local a qualquer pessoa independente de identificação.</li><li>Por se tratar de protesto para fins falimentares, na contagem do prazo, será incluído o dia do começo e excluído o dia do vencimento.</li><li>O registro do protesto, por ter fins falimentares, será escriturado em livro especial.</li><li>Conquanto seja possível o protesto para fins falimentares, a credora não terá sucesso no seu pleito falimentar.</li></ol><p><strong>Está(ão) correta(s) apenas a(s) afirmativa(s).</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 113, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Acerca do Novo Código de Processo Civil (Lei nº 13.105/2015) e da atividade notarial e registral, é correto afirmar que:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 114, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>De acordo com o Provimento nº 260/CGJ/2013, o interessado na especialização de fração ideal contida em parcelamento regularizado apresentará requerimento dirigido ao oficial de registro competente instruído com os seguintes documentos, EXCETO:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 115, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>De acordo com o Provimento nº 260/CGJ/2013, o cancelamento do protesto será solicitado ao tabelião por qualquer interessado, mediante apresentação:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 116, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>De acordo com o Provimento nº 260/CGJ/2013, NÃO é correto afirmar, em relação ao registro de nascimento:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 117, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Considerando o disposto no Provimento nº 260/CGJ/2013 em relação ao nome, é correto afirmar que:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 118, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Em relação ao casamento, de acordo com o Provimento nº 260/CGJ/2013, é correto afirmar que:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 119, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Sobre as certidões expedidas pelos Registradores Civis, assinale a afirmativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 120, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>De acordo com o Provimento nº 63/2017 do Conselho Nacional de Justiça, é correto afirmar que:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 121, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Analise as afirmativas de acordo com o Provimento nº 62/2017 do Conselho Nacional de Justiça, que dispõe sobre a uniformização dos procedimentos para a aposição de apostila.</strong></p><ol style="list-style-type: upper-roman;"><li>Os titulares dos serviços notariais e de registro poderão solicitar à Corregedoria Nacional de Justiça autorização específica para que o serviço de apostilamento seja prestado, sob sua supervisão, por no máximo três escreventes habilitados.</li><li>O serviço de notas e de registro poderão apostilar documentos estranhos a sua atribuição mesmo que exista na localidade serviço autorizado para o ato de apostilamento.</li><li>A apostila será emitida mediante solicitação do portador do documento, sendo dispensado requerimento escrito. As autoridades apostilantes darão recibo de protocolo no momento do requerimento, estipulando prazo para entrega,<br />que não poderá ultrapassar cinco dias.</li><li>A apostila será emitida por documento, não importando a quantidade de páginas que possuir. Será de forma diversa se o solicitante do serviço assim o requerer.</li></ol><p><strong>Está correto o que se afirma em</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 122, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Com base na Lei nº 15.424/2004, que dispõe sobre a fixação, a contagem, a cobrança e o pagamento de emolumentos relativos aos atos praticados pelos serviços notariais e de registro, o recolhimento da Taxa de Fiscalização Judiciária e a compensação dos atos sujeitos à gratuidade estabelecida em lei federal, analise as afirmativas a seguir.</strong></p><ol style="list-style-type: upper-roman;"><li>O Oficial de Registro Civil das Pessoas Naturais receberá do usuário os emolumentos relativos aos atos praticados pelo Juiz de Paz, obrigando-se a repassar a este a importância correspondente aos emolumentos, até o último dia útil do mês.</li><li>Nas escrituras de inventário, o excesso na partilha será objeto de uma única cobrança de emolumentos, mesmo que haja mais de um cedente, e abrangerá a soma do excesso, considerando um só valor mesmo que haja bens móveis e imóveis.</li><li>No caso de escrituras de instituição de servidão, os emolumentos terão como base 20% do valor do imóvel.</li><li>No Registro de Títulos e Documentos, a cobrança da diligência abrange até três idas ao endereço constante da carta de notificação.</li></ol><p><strong>Assinale a alternativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 123, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Sobre os procedimentos de registro de títulos judiciais no Registro de Imóveis, e de acordo com o disposto no Provimento nº 260/CGJ/2013, assinale a afirmativa INCORRETA.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 124, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Sobre patrimônio de afetação, de acordo com o Provimento nº 260/CGJ/2013, NÃO é correto afirmar que:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 125, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Com base na Lei nº 9.514/1997, analise as afirmativas sobre alienação fiduciária de bens imóveis e o procedimento de intimação do devedor fiduciante.</strong></p><ol style="list-style-type: upper-roman;"><li>A alienação fiduciária poderá ser contratada por pessoa física ou jurídica, não sendo privativa das entidades que operam no SFI, podendo ter como objeto, além da propriedade plena: bens enfitêuticos; o direito de uso especial para fins de moradia; o direito real de uso, desde que suscetível de alienação; a propriedade superficiária.</li><li>No caso de mora, a intimação far-se-á pessoalmente ao fiduciante, ou ao seu representante legal ou ao procurador regularmente constituído, podendo ser promovida, por solicitação do oficial do Registro de Imóveis, por oficial de Registro de Títulos e Documentos da comarca da situação do imóvel ou do domicílio de quem deva recebê-la, ou pelo correio, com aviso de recebimento.</li><li>Quando, por duas vezes, o oficial de registro de imóveis ou de registro de títulos e documentos ou o serventuário por eles credenciado houver procurado o intimando em seu domicílio ou residência sem o encontrar, deverá, havendo suspeita motivada de ocultação, intimar qualquer pessoa da família ou, em sua falta, qualquer vizinho de que, no dia útil imediato, retornará ao imóvel, a fim de efetuar a intimação, na hora que designar, aplicando-se subsidiariamente o disposto nos arts. 252, 253 e 254 da Lei nº 13.105, de 16 de março de 2015 (Código de Processo Civil).</li><li>Quando o fiduciante, ou seu cessionário, ou seu representante legal ou procurador encontrar-se em local ignorado, incerto ou inacessível, o fato será certificado pelo serventuário encarregado da diligência e informado ao oficial de<br />Registro de Imóveis, que, à vista da certidão, promoverá a intimação por edital publicado durante três dias, pelo menos, em um dos jornais de maior circulação local ou noutro de comarca de fácil acesso, se no local não houver imprensa diária, contado o prazo para purgação da mora da data da última publicação do edital.</li></ol><p><strong>Estão corretas as afirmativas</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 126, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Sobre o procedimento e registro de loteamento no Registro de Imóveis, e de acordo com o disposto no Provimento nº 260/CGJ/2013, analise as afirmativas a seguir.</strong></p><ol style="list-style-type: upper-roman;"><li>As restrições presentes no loteamento, impostas pelo loteador ou pelo Poder Público, deverão ser, obrigatoriamente, mencionadas na matrícula-mãe e nas matrículas dos imóveis afetados, não cabendo ao oficial de registro, porém, fiscalizar a observância daquelas restrições.</li><li>A requerimento do loteador, o oficial de registro abrirá matrículas individualizadas referentes às áreas públicas.</li><li>Uma vez aberta a matrícula, o oficial de registro deverá averbar que se trata de área afetada em razão da instituição do loteamento ou desmembramento de solo urbano.</li><li>É vedado o registro de qualquer título de alienação ou oneração das áreas do município, sem que, previamente, seja averbada, após regular processo legislativo, a respectiva desafetação e esteja a transação autorizada por lei.</li></ol><p><strong>Estão corretas apenas as afirmativas</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 127, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Sobre a retificação no Registro de Imóveis, prevista no art. 213 da Lei nº 6.015/1973, analise as afirmativas a seguir.</strong></p><ol style="list-style-type: upper-roman;"><li>O oficial retificará o registro ou a averbação, de ofício ou a requerimento do interessado, no caso de inserção ou alteração de medida perimetral de que resulte, ou não, alteração de área, instruído com planta e memorial descritivo assinado por profissional legalmente habilitado, com prova de anotação de responsabilidade técnica no competente Conselho Regional de Engenharia e Arquitetura – CREA, bem assim pelos confrontantes.</li><li>Independentemente de retificação, dois ou mais confrontantes poderão, por meio de escritura pública, alterar ou estabelecer as divisas entre si e, se houver transferência de área, com o recolhimento do devido imposto de transmissão e desde que preservadas, se rural o imóvel, a fração mínima de parcelamento e, quando urbano, a legislação urbanística.</li><li>Entendem-se como confrontantes não só os proprietários dos imóveis contíguos, mas, também, seus eventuais ocupantes; o condomínio geral, de que tratam os arts. 1.314 e seguintes do Código Civil, será representado por todos os condôminos e o condomínio edilício, de que tratam os arts. 1.331 e seguintes do Código Civil, será representado, conforme o caso, pelo síndico ou pela Comissão de Representantes.</li><li>Nos casos de inserção ou alteração de medida perimetral de que resulte, ou não, alteração de área, serão considerados confrontantes somente os confinantes de divisas que forem alcançadas pela inserção ou alteração de medidas perimetrais.</li></ol><p><strong>Estão INCORRETAS apenas as afirmativas</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 128, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>De acordo com o Provimento nº 260/CGJ/2013, é correto afirmar em relação aos Registros de Títulos e Documentos:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 129, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>O Ateneu é um romance publicado em 1888 e conta a história de Sérgio, menino que é enviado para um colégio agropecuário de renome no Rio de Janeiro. O romance é considerado o único exemplar impressionista na literatura brasileira. Quem é o autor da obra “O Ateneu”?</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 130, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>A Segunda Guerra Mundial foi o maior conflito da história da humanidade, e envolveu diversos países em quatro continentes. Os participantes se aliaram em dois grupos, sendo eles os Aliados e os Países do Eixo. Marque a alternativa na qual estão relacionados os Países do Eixo.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 131, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>O art. 3º, da Lei nº 9.514/1997, estabeleceu as condições para o funcionamento das companhias securitizadoras de crédito imobiliário e como ferramenta de sua atuação criou o Certificado de Recebíveis Imobiliários – CRI em seu art. 6º. Quanto às características do Certificado de Recebíveis Imobiliários, assinale a correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 133, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Em relação aos Direitos da Personalidade tutelados pelo Código Civil, é correto afirmar que:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 134, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Em relação à gestão e à alienação dos bens do ausente disciplinadas pelo Código Civil, assinale a alternativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 135, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>À vista das disposições do Código Civil que regulamentam as fundações, assinale a alternativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 136, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Considerando as disposições do Código Civil acerca dos negócios jurídicos, assinale a alternativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 137, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>De acordo com a disciplina traçada pelo Código Civil acerca dos defeitos dos negócios jurídicos, assinale a alternativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 138, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Assinale a alternativa correta relativa ao pagamento.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 139, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Dentre as hipóteses descritas a seguir, assinale aquela que encerra espécie de sub-rogação convencional.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 140, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Considerando os prazos prescricionais previstos no Código Civil, assinale a alternativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 141, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Sobre as obrigações solidárias, é correto afirmar que:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 142, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>De acordo com as disposições do Código Civil, analise as afirmativas a respeito dos contratos em geral.</strong></p><ol style="list-style-type: upper-roman;"><li>O contrato preliminar, inclusive quanto a forma, deve conter todos os requisitos essenciais ao contrato a ser celebrado.</li><li>Nos contratos bilaterais, pode qualquer dos contratantes alegar em defesa a exceção do contrato não cumprido.</li><li>Nos contratos de adesão, havendo cláusulas que gerem dúvida na sua interpretação, será adotada a mais favorável ao aderente.</li><li>São alguns dos requisitos para a aplicação da cláusula rebus sic stantibus: a ocorrência de acontecimentos extraordinários e imprevisíveis e que tenham tornado a prestação de uma das partes excessivamente onerosa, com extrema vantagem para a outra.</li></ol><p><strong>Estão corretas as afirmativas</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 143, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>De acordo com o Código Civil Brasileiro, analise as afirmativas sobre o contrato de doação.</strong></p><ol style="list-style-type: upper-roman;"><li>O contrato de doação, por si só, não opera a transferência da propriedade.</li><li>Na doação, a cláusula de reversão por premoriência do donatário pode ser estipulada em favor de terceiro a quem o doador designar.</li><li>É nula a doação de todos os bens do doador, sem reserva de parte, ou renda suficiente para a sua subsistência.</li><li>Só o doador tem legitimidade para propor a ação de revogação da doação, mas os herdeiros podem prosseguir na ação iniciada pelo doador.</li></ol><p><strong>Estão corretas as afirmativas</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 144, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Com base nas disposições da Resolução nº 35, de 2007, do CNJ, analise as afirmativas sobre separações e divórcios consensuais pela via extrajudicial.</strong></p><ol style="list-style-type: upper-roman;"><li>Para a lavratura das escrituras públicas de separação e divórcio consensuais, a escolha do tabelião de notas atenderá às regras de competência do Código de Processo Civil.</li><li>O comparecimento pessoal das partes é dispensável à lavratura da escritura pública de separação e divórcio consensuais, sendo admissível a representação por mandatário constituído por instrumento público com poderes especiais e prazo de validade de noventa dias.</li><li>As partes devem declarar ao tabelião, no ato da lavratura da escritura que não têm filhos comuns, ou havendo, que são absolutamente capazes. Devem, ainda, declarar que o cônjuge virago não se encontra em estado gravídico ou, ao menos, que não tenha conhecimento sobre esta condição.</li><li>A retificação das cláusulas de obrigações alimentares ajustadas na separação e no divórcio consensuais é admitida por escritura pública, havendo consenso entre as partes.</li></ol><p><strong>Estão corretas as afirmativas</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 145, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Com base nas disposições do Código Civil e da Lei nº 8.009/90, analise as afirmativas a respeito do bem de família.</strong></p><ol style="list-style-type: upper-roman;"><li>A instituição do bem de família voluntário, observados os requisitos legais, gera a inalienabilidade e a impenhorabilidade do prédio residencial urbano ou rural, com suas pertenças e acessórios, destinando-se em ambos os casos a domicilio familiar.</li><li>Considera-se constituído o bem de família, quer instituído pelos cônjuges, quer por terceiro, mediante o registro de seu título no Registro de Imóveis.</li><li>O bem de família voluntário é isento de execução por dívidas anteriores e posteriores à sua instituição, salvo as que provierem de tributos relativos ao prédio, ou de despesas de condomínio.</li><li>A dissolução da sociedade conjugal, em vida ou por morte, acarreta a extinção do bem de família convencionado.</li></ol><p><strong>Estão corretas as afirmativas</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 146, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Conforme o Código Civil Brasileiro, analise as afirmativas sobre o regime de bens entre os cônjuges.</strong></p><ol style="list-style-type: upper-roman;"><li>No regime de comunhão parcial de bens, entram na comunhão os bens adquiridos na constância do casamento por título oneroso, ainda que só em nome de um dos cônjuges.</li><li>O regime de comunhão universal importa a comunicação de todos os bens presentes e futuros dos cônjuges, mas os proventos do trabalho pessoal de cada consorte estão excluídos da comunhão.</li><li>No regime de participação final nos aquestos, integram o patrimônio próprio os bens que cada cônjuge possuía ao casar e os por ele adquiridos, a qualquer título, na constância do casamento.</li><li>Qualquer que seja o regime de bens do casamento, nenhum dos cônjuges pode, sem o consentimento do outro, alienar ou gravar de ônus real os bens imóveis.</li></ol><p><strong>Estão corretas as afirmativas</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 147, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>De acordo com o Código Civil Brasileiro, analise as afirmativas sobre direito de sucessões.</strong></p><ol style="list-style-type: upper-roman;"><li>A aceitação da herança pode ser tácita e há de resultar, tão somente, de atos próprios da qualidade de herdeiro. A renúncia da herança depende de ato solene, manifestada por meio de escritura pública, ou por termo nos autos do inventário.</li><li>Havendo renúncia, os herdeiros do renunciante não podem exercer o direito de representação.</li><li>Os descendentes do herdeiro excluído, seja por indignidade, seja por deserdação sucedem, como se ele morto fosse antes da abertura da sucessão.</li><li>Qualquer sucessor pode ser excluído da sucessão por indignidade, mas somente o herdeiro necessário pode ser deserdado.</li></ol><p><strong>Estão corretas as afirmativas</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 148, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>De acordo com as disposições do Código Civil Brasileiro, analise as afirmativas a respeito da sucessão testamentária.</strong></p><ol style="list-style-type: upper-roman;"><li>A cláusula de inalienabilidade, gravada sobre bens no testamento, implica, necessariamente, as de impenhorabilidade e incomunicabilidade.</li><li>A redução das disposições testamentárias visa garantir a preservação da legítima.</li><li>Quando o testador fixa a cota ou o objeto de cada sucessor, não há direito de acrescer entre os demais herdeiros ou legatários.</li><li>O legatário sucede o autor da herança a título universal.</li></ol><p><strong>Estão corretas as afirmativas.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 149, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Considerando o provimento nº 260/2013, da Corregedoria-Geral de Justiça do Estado de Minas Gerais, o serviço, a função e a atividade notarial e de registro se norteiam pelos princípios específicos de cada natureza notarial e registral, além de princípios gerais. Em relação aos princípios gerais, analise as afirmativas a seguir.</strong></p><ol style="list-style-type: upper-roman;"><li>Da fé pública, a assegurar autenticidade dos atos emanados dos serviços notariais e de registro, gerando presunção relativa de validade.</li><li>Da publicidade, a assegurar o conhecimento exclusivo dos notários sobre o conteúdo dos registros e a garantir sua oponibilidade contra terceiros.</li><li>A eficácia dos atos, a assegurar a produção dos efeitos jurídicos decorrentes do ato notarial ou registral.</li><li>Da oficialidade, a submeter a validade do ato notarial ou registral à condição de haver sido praticado por agente legitimamente investido na função.</li><li>Da reserva legal, sub-rogação ou instância, a definir o ato notarial ou registral como de iniciativa exclusiva do interessado.</li></ol><p><strong>Estão corretas apenas as afirmativas</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 150, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Isabelle P. firmou contrato com obrigação de pagamento em dinheiro e entrega de coisa em favor de Pedro B., com vencimento de prestações a cada mês, com local de pagamento no domicílio do credor (obrigação portável), com fixação de cláusula resolutória em caso de não pagamento e mora. Pedro B., por sua vez, arrependido das condições firmadas entre as partes, tenta recusar o pagamento e receber a coisa, criando embaraços para o recebimento. Ciente das previsões atinentes à consignação em pagamento, é correto afirmar que:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 151, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Segundo a Súmula 247 do STJ, o contrato de abertura de crédito em conta-corrente, acompanhado do demonstrativo de débito, constitui documento hábil para o ajuizamento em juízo de ação de interesse do credor. Nesse diapasão, considerando as diretrizes da referida súmula, é correto afirmar que a ação em questão é:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 152, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Atendidos os requisitos legais (art. 610 do CPC e Resolução 35/2007 do CNJ), pode-se realizar o inventário extrajudicial mediante partilha amigável. Todas as partes devem ser capazes e concordes. O inventário extrajudicial realiza-se por escritura pública a qual consistirá em título hábil para o registro civil, para o registro imobiliário, para a transferência de bens e direitos, bem como para a promoção de todos os atos necessários à materialização e notícia das transferências de bens e levantamentos de valores. Com base em tal afirmação, assinale a alternativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 153, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Segundo as normas e princípios contidos no Código de Processo Civil, analise as afirmativas a seguir.</strong></p><ol style="list-style-type: upper-roman;"><li>A competência em razão da matéria é derrogável pela vontade das partes.</li><li>A conexão não determina a reunião dos processos, se um deles já foi julgado.</li><li>Para se postular em juízo é necessário que se tenha interesse, legitimidade e que o pedido seja juridicamente possível.</li><li>É possível ter capacidade de ser parte e não ter capacidade processual.</li></ol><p><strong>Estão corretas as afirmativas</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 154, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Segundo as normas e princípios contidos no Código de Processo Civil, analise as afirmativas a seguir.</strong></p><ol style="list-style-type: upper-roman;"><li>Em face do princípio da eventualidade ou concentração, o réu deve arguir toda a matéria de defesa na contestação, sob pena de preclusão.</li><li>A reconvenção pode ser meio de ampliação dos sujeitos do processo.</li><li>Caracterizada a revelia, a presunção de veracidade dos fatos alegados na inicial é relativa.</li><li>O juiz apreciará a prova constante dos autos, segundo o sistema da persuasão racional ou convencimento motivado.</li></ol><p><strong>Estão corretas as afirmativas</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 155, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>De acordo com as normas e princípios contidos no Código de Processo Civil e no Código Civil Brasileiro, analise as afirmativas a seguir.</strong></p><ol style="list-style-type: upper-roman;"><li>A sentença que extingue o processo, sem resolução do mérito, por falta de legitimidade ou de interesse processual, não obsta a que a parte proponha de novo a ação, desde que corrigido o vício.</li><li>A existência de perempção, de litispendência ou de coisa julgada, que leva à extinção do processo sem resolução do mérito, pode ser conhecida de ofício pelo juiz.</li><li>O autor pode, com o consentimento do réu, desistir da ação após a prolação da sentença.</li><li>O reconhecimento da prescrição e da decadência é decisão de mérito e pode se dar de ofício pelo juiz, independentemente de requerimento da parte, salvo no caso da decadência convencional.</li></ol><p><strong>Estão corretas as afirmativas</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 156, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>De acordo com as normas e princípios contidos no Código de Processo Civil, analise as afirmativas a seguir.</strong></p><ol style="list-style-type: upper-roman;"><li>São títulos executivos judiciais somente as sentenças condenatórias proferidas no processo civil que reconheçam a exigibilidade de obrigação de pagar quantia, de fazer, de não fazer ou de entregar coisa.</li><li>A instauração do cumprimento de sentença que reconheça a exigibilidade de obrigação de fazer ou não fazer e de entregar coisa certa se dará de ofício, pelo juiz, ou a requerimento da parte.</li><li>O credor, munido de título executivo extrajudicial, está impedido de optar pelo processo de conhecimento, como, por exemplo, a ação de cobrança.</li><li>Informam a execução forçada, dentre outros, o princípio de que a finalidade primeira do processo de execução é a plena satisfação do credor e o princípio de que a execução deve realizar-se da forma o menos prejudicial ao devedor.</li></ol><p><strong>Estão corretas as afirmativas</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 157, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Quanto às regras de competência, assinale a alternativa INCORRETA.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 158, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Com relação ao ato de citação no processo penal, assinale a alternativa INCORRETA.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 159, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Quanto à Lei nº 11.340/2006 (Lei Maria da Penha), assinale a alternativa INCORRETA.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 160, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Quanto à Teoria Geral dos Recursos em processo penal, assinale a alternativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 161, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>No curso da ação penal pública, foi realizado, a pedido da defesa, incidente de verificação de sanidade mental, o qual concluiu pela inimputabilidade do denunciado, em virtude de doença mental. O respectivo laudo foi juntado aos autos e homologado pelo juízo. A partir deste momento processual, o que ocorre com o processo?</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 162, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>A norma penal incriminadora é formada basicamente por dois preceitos: o preceito primário (ou preceptum juris), em que se prevê a conduta abstrata que a sociedade pretende punir, o preceito secundário (ou sanctio juris), em que se fixa a sanção penal correspondente. As normas que necessitam de complementação no preceito secundário, por não trazerem a cominação da pena correspondente à prática da conduta típica são chamadas de normas penais:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 163, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Sobre o crime de desacato, analise as afirmativas a seguir.</strong></p><ol style="list-style-type: upper-roman;"><li>O crime de desacato protege apenas o bem jurídico de autoridades da Administração Pública.</li><li>Por maioria, os ministros da Terceira Seção do Superior Tribunal de Justiça decidiram que desacatar funcionário público no exercício da função ou em razão dela continua a ser crime, conforme previsto no art. 331 do Código Penal.</li><li>O desacato é um crime contra a honra na legislação penal brasileira.</li><li>O crime de desacato é considerado de pequeno potencial ofensivo pela legislação brasileira.</li><li>A Terceira Seção do Superior Tribunal de Justiça decidiu que cabe à Justiça comum estadual processar e julgar possíveis crimes de desacato e desobediência praticados por militares do Exército que estavam de folga e à paisana contra bombeiros militares durante operação de socorro a um potencial suicida.</li></ol><p><strong>Estão corretas apenas as afirmativas</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 164, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Qual a consequência jurídica do erro de tipo permissivo (erro sobre a descriminante putativa) plenamente justificado pelas circunstâncias?</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 165, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Em relação ao domicílio tributário, é INCORRETO afirmar que:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 166, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Em relação aos impostos sobre transmissão causa mortis, doação e propriedade de veículos automotores, assinale a alternativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 167, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Sobre a contribuição de melhoria, assinale a alternativa INCORRETA.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 168, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Sobre a jurisprudência do STF em matéria tributária, assinale a alternativa INCORRETA.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 169, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Sobre a jurisprudência do STJ em matéria tributária, assinale a alternativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 170, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Assinale a alternativa INCORRETA.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 171, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>De acordo com a Lei Estadual nº 15.424, de 30 de dezembro de 2004, que dispõe sobre a fixação, a contagem, a cobrança e o pagamento de emolumentos relativos aos atos praticados pelos serviços notariais e de registro, o recolhimento da Taxa de Fiscalização Judiciária e a compensação dos atos sujeitos à gratuidade estabelecida em lei federal e dá outras providências, assinale a alternativa INCORRETA.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 172, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Sobre a dívida ativa, assinale a alternativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 173, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Segundo o art. 966 do Código Civil, considera-se empresário quem exerce profissionalmente atividade econômica organizada para a produção ou a circulação de bens ou de serviços. À luz do Código Civil, a respeito da atividade de empresário, assinale a alternativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 174, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Segundo o art. 966 do Código Civil, considera-se empresário quem exerce profissionalmente atividade econômica organizada para a produção ou a circulação de bens ou de serviços. Ainda, à luz do Código Civil, a respeito da atividade de empresário, analise as afirmativas a seguir.</strong></p><ol style="list-style-type: upper-roman;"><li>As cooperativas podem submeter-se ao regime jurídico empresarial, desde que optem por registrar-se no Registro Público de Empresas Mercantis.</li><li>O empresário é obrigado a inscrever-se no Registro Público de Empresas Mercantis, mas a falta da inscrição não lhe retira a condição de empresário e a sua submissão ao regime jurídico empresarial.</li><li>Aquele que, mesmo impedido, exerce atividade empresarial, responderá pelas obrigações contratadas, no limite do patrimônio da pessoa jurídica.</li><li>O empresário que tenha como a principal profissão a atividade rural deve se registrar na Junta Comercial, caso em que ficará equiparado, para todos os efeitos, ao empresário sujeito a registro.</li></ol><p><strong>Assinale a alternativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 175, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>A empresa A teve sua falência decretada, no dia 10/07/2018, pelo Juiz da Vara Empresarial da Comarca de Belo Horizonte, após reprovação do plano de recuperação judicial por ela apresentado, em Assembleia-Geral de credores. À luz da Lei nº 11.101, de 10/07/2018, e da situação hipotética anterior, assinale a alternativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 176, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Em relação ao Direito Cambial, é correto afirmar que:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 177, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p>Analise as proposições e, em seguida, aponte a alternativa correta.</p><ol style="list-style-type: upper-roman;"><li>O aval pode ser lançado no anverso do título, desde que assinado pelo avalista.</li><li>O aceite é ato pelo qual o sacador se constitui como devedor principal do título e o sacado como coobrigado.</li><li>O “prazo de respiro” constitui uma faculdade atribuída ao sacado, que pode pedir que o título lhe seja apresentado no dia seguinte, para checagem de informações ou meditação acerca da conveniência de aceitá-lo ou recusá-lo.</li><li>O saque tem como efeito constituir o emitente como coobrigado pelo título.</li></ol>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 178, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>O contrato social é o instrumento através do qual se materializa o encontro de vontade dos sócios da sociedade empresária. A respeito dos requisitos e elementos de validade do contrato social da sociedade empresária, analise as assertivas a seguir.</strong></p><ol style="list-style-type: upper-roman;"><li>São requisitos do contrato social: agente capaz; objeto possível e lícito; forma prescrita ou não defesa em lei; todos os sócios devem contribuir para a formação do capital social e participarão dos resultados, positivos ou negativos.</li><li>É nula a cláusula que exclua algum dos sócios dos lucros ou da participação nas perdas, bem como que estabeleça distribuição desproporcional à participação de cada um no capital social.</li><li>A falta de pluralidade dos sócios ensejará a dissolução da sociedade, no prazo de cento e oitenta dias, desde que haja previsão contratual quanto ao prazo.</li><li>São cláusulas essenciais ao contrato social: tipo societário; objeto social; capital social; responsabilidade dos sócios; qualificação dos sócios; nomeação de administrador; nome empresarial; sede e foro; prazo de duração.</li></ol><p><strong>Assinale a alternativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 179, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>A respeito das sociedades anônimas e à luz da Lei nº 6.404/1976, analise as proposições a seguir.</strong></p><ol style="list-style-type: upper-roman;"><li>Ações em circulação no mercado são todas as ações da companhia aberta, salvo as de propriedade do acionista controlador, de diretores, de conselheiros de administração e as em tesouraria.</li><li>Podem emitir ações de fruição, que constituem títulos que podem ser atribuídos aos acionistas após suas ações serem integralmente amortizadas.</li><li>Pode exercer a sua atividade sob firma ou razão social, da qual só farão parte os nomes dos sócios-diretores ou gerentes.</li><li>As companhias abertas e as de capital autorizado terão, obrigatoriamente, Conselho de Administração.</li></ol><p><strong>Aponte a alternativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 180, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>De acordo com as normas de Direito Cambiário, assinale a opção que NÃO espelha um ato cambial:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 181, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Reconhecida a existência de dois sistemas administrativos, quais sejam, francês e inglês, têm-se consolidados os moldes de um sistema de unicidade de jurisdição e outro de dualidade de jurisdição. No que diz respeito aos sistemas anteriormente mencionados, é correto afirmar que:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 182, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>O processo administrativo rege-se por normas de cunho constitucional, sendo balizado, ainda, por normativos infra, aplicáveis ao órgão e esfera respectivos. No que se refere aos princípios e normas aplicáveis ao processo administrativo, é correto concluir que:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 183, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Considerando as disposições da LC nº 59/2001, considere as seguintes proposições.</strong></p><ol style="list-style-type: upper-roman;"><li>A fim de atender o objetivo de classificação das comarcas em entrância especial, primeira e segunda entrância, utiliza-se a comprovação do número de habitantes por estimativa anual.</li><li>O cargo de desembargador será acessado mediante promoção por antiguidade e por merecimento, alternadamente, apurados entre os Juízes de Direito integrantes da primeira entrância.</li><li>Com a instalação da Comarca, haverá, no distrito sede da comarca instalada, os seguintes serviços notariais e de registros: dois Serviços de Tabelionato de Notas nas comarcas de primeira e segunda entrância, e, nas de entrância especial, mais um Tabelionato de Notas por vara acima de dez, até o máximo de dez Tabelionatos de Notas na comarca; um Serviço de Registro de Imóveis; um Serviço de Registro das Pessoas Naturais, Interdições e Tutelas; um Serviço de Protestos de Títulos; um Serviço de Títulos e Documentos e das Pessoas Jurídicas.</li><li>Será permitida a permuta de titulares de delegação da entrância especial com serventias de primeira instância, mediante apresentação de requerimento conjunto dos interessados e comprovação de efetivo exercício no Estado por mais de quatro anos como titulares.</li></ol><p><strong>Estão corretas as proposições</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 184, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Os servidores públicos podem, em sua atuação, cometer infrações de natureza administrativa, civil, criminal e de improbidade. Tais práticas invocam a sujeição à responsabilização do agente, não se furtando a Administração à sua responsabilidade objetiva quanto a danos a terceiros. Diante da prática de atos pelos quais possa ser o servidor responsabilizado, assinale a alternativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 185, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Os institutos de Direito Administrativo decorrem de normas que se pautam em seus princípios, sem os quais restariam maculados em sua essência. Desta forma, os atos administrativos do Estado são regidos por valores que, se necessário, devem ser ponderados, mas não excluídos na aplicação a determinado contexto fático. De acordo com o estudo dos princípios administrativos, é correto afirmar que:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 186, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>A atuação do Estado na defesa do interesse Público comporta a adoção de providências que coíbam ou limitem determinadas atividades privadas. A este proceder que tenha o fim de proteção ao bem supremo do interesse público nomina-se Poder de Polícia. O exercício do Poder de Polícia deve ser concretizado no intento de se fazer cessar ou impedir atos privados danosos. Acerca do Poder em questão, assinale a alternativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 187, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Os atos administrativos são meios do exercício da atividade administrativa, os quais se prestam à consecução de seus fins, nos moldes em lei contemplados, requerendo para sua existência e validade: competência, finalidade, forma, motivo e objeto. Assinale a alternativa correta em relação às espécies de atos administrativos.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 188, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Os serviços públicos podem ser descentralizados pela Administração Pública, não se afastando, mas assim se justificando, no interesse público, na busca do bem comum. Para tal exercício, opera-se a delegação legal ou a delegação negocial. Considere as regras de concessão e permissão de serviços públicos e assinale a alternativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 189, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Acerca da rigidez constitucional e do sistema de controle de constitucionalidade do nosso país, analise as afirmativas a seguir.</strong></p><ol style="list-style-type: upper-roman;"><li>O princípio da constitucionalidade que afeta e obriga todos os comportamentos públicos e privados havidos em determinado Estado enseja, paralelamente ao controle de constitucionalidade, a questão da rigidez constitucional.</li><li>A rigidez constitucional equivale à imutabilidade absoluta da Constituição e deriva da soberania constituinte originária e da supremacia das normas constitucionais.</li><li>A estabilidade e a mudança constitucionais são realidades necessárias e coexistentes no processo constitucional brasileiro não admitindo níveis de hierarquia interna das normas constitucionais.</li><li>As modificações constitucionais podem ser classificadas como formais, denominadas doutrinariamente como reforma ou revisão, ou informais, também denominadas mutações constitucionais. A reforma constitucional faz-se por um processo formal, exercido pelo poder constituinte originário, observados os limites materiais e formais do texto constitucional.</li></ol><p><strong>Assinale a alternativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 190, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Dentre as hipóteses de materialização do princípio da igualdade no texto constitucional, assinale a alternativa INCORRETA.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 191, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>A Administração Pública está regulamentada no texto constitucional, que estabelece como princípios elementares a legalidade, a impessoalidade, a moralidade, a publicidade e a eficiência. De acordo com os princípios que regem a Administração Pública e com o texto da Constituição, assinale a alternativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 192, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p>A respeito do controle de constitucionalidade no Direito brasileiro, analise as afirmativas a seguir.</p><ol style="list-style-type: upper-roman;"><li>A inconstitucionalidade de uma lei resulta tanto da contrariedade pela lei de preceito da Constituição, como pela elaboração de lei em desconformidade com o procedimento estabelecido pela Constituição ou quando elaborada por autoridade competente.</li><li>O controle concentrado é devido quando se faculta a qualquer órgão do Poder Judiciário o poder de apreciar a alegação de inconstitucionalidade.</li><li>Adjetiva-se como “em tese” o controle de constitucionalidade apreciado pelo juiz como alegação de defesa de uma parte litigante em um processo.</li><li>Lei Municipal que contrariar dispositivo da Constituição Federal deve ter sua inconstitucionalidade declarada pelo método aberto ou reservado, este último de competência dos Tribunais de Justiça. Está(ão) correta(s) apenas a(s) afirmativa(s)</li></ol>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 193, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>O ponto de partida de interpretação das normas da Constituição são os princípios constitucionais que a condicionam. A atividade de interpretação da Constituição deve iniciar com a identificação do princípio maior que rege a matéria sob estudo, descendo do mais genérico ao mais específico, até chegar à formulação da regra concreta que vai reger a espécie. São princípios constitucionais condicionantes da interpretação constitucional, EXCETO:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 194, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Dentre os direitos políticos positivos consagrados na Constituição, que consistem num conjuntos de normas que asseguram ao cidadão o direito subjetivo de participação no processo político e em órgãos governamentais, está o direito ao sufrágio. Sobre o direito ao sufrágio, analise as proposições a seguir.</strong></p><ol style="list-style-type: upper-roman;"><li>O sufrágio é um direito, não um privilégio, mas pode ser condicionado de acordo com o regime político adotado por uma nação.</li><li> O sufrágio censitário já foi adotado no Brasil, limitando o direito de voto a Senadores e Deputados, conforme a renda do cidadão.</li><li>O sufrágio capacitário baseia-se, essencialmente, nas aptidões intelectuais do cidadão, porém, não há experiência da sua utilização no Estado brasileiro.</li><li>Quanto aos titulares ao direito ao sufrágio, pode-se afirmar que ninguém é elegível se não for eleitor.</li></ol><p><strong>Assinale a alternativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 195, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>O estrangeiro “E”, brasileiro naturalizado desde 2015, foi citado em uma ação em que seu país de origem “P” solicitou ao Estado Brasileiro a sua extradição. Existe tratado de reciprocidade em matéria de extradição entre o Brasil e o país “P”. Argumenta o país “P” que o estrangeiro “E”, no ano de 2016, cometeu um crime de estupro naquele país, bem como teria uma condenação, já transitada em julgado, por tráfico ilícito de entorpecentes, datada do ano de 2013. Considerando o tratamento constitucional conferido ao estrangeiro no país, assinale a alternativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 196, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2019, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Um dos princípios consagrados na Constituição, no campo da ordem econômica, é o da livre iniciativa. Todavia, ela reserva para o Estado o monopólio de algumas atividades econômicas que o constituinte reputou estratégicas. Assinale a alternativa que trata corretamente desse modelo de atividades que são monopolizadas pela União.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },


            









            {
                id_question: 197, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Analise as afirmativas a seguir de acordo com a Lei nº 6.015/73.</strong></p><ol style="list-style-type: upper-roman;"><li>Nenhum sepultamento será feito sem certidão do oficial de registro do lugar do falecimento ou do lugar de residência do de cujus, quando o falecimento ocorrer em local diverso do seu domicílio, extraída após a lavratura do assento de óbito, em vista do atestado de médico, se houver no lugar, ou em caso contrário, de duas pessoas qualificadas que tiverem presenciado ou verificado a morte.</li><li>A cremação de cadáver somente será feita daquele que houver manifestado a vontade de ser incinerado ou no interesse da saúde pública e se o atestado de óbito houver sido firmado por 2 (dois) médicos ou por 1 (um) médico legista e, no caso de morte violenta, depois de autorizada pela autoridade policial.</li><li>Na impossibilidade de ser feito o registro dentro de 24 (vinte e quatro) horas do falecimento, pela distância ou qualquer outro motivo relevante, o assento será lavrado depois, com a maior urgência, e dentro do prazo de 15 (quinze) dias, que será ampliado em até 6 (seis) meses para os lugares distantes mais de 30 (trinta) quilômetros da sede do cartório.</li><li>Antes de proceder ao assento de óbito de criança de menos de 1 (um) ano, o oficial verificará se houve registro de nascimento, que, em caso de falta, será previamente feito.</li></ol><p><strong>Estão corretas as afirmativas</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 198, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>De acordo com a Lei nº 6.015/73, o oficial retificará o registro, a averbação ou a anotação, de ofício ou a requerimento do interessado, mediante petição assinada pelo interessado, representante legal ou procurador, independentemente de prévia autorização judicial ou manifestação do Ministério Público, nos casos de:</strong></p><ol style="list-style-type: upper-roman;"><li>Erros que não exijam qualquer indagação para a constatação imediata de necessidade de sua correção.</li><li>Erro na transposição dos elementos constantes em ordens e mandados judiciais, termos ou requerimentos, bem como outros títulos a serem registrados, averbados ou anotados, e o documento utilizado para a referida averbação e/ou retificação ficará arquivado no registro no cartório.</li><li>Ausência de indicação do Município relativo ao nascimento ou naturalidade do registrado, nas hipóteses em que existir descrição precisa do endereço do local do nascimento, bem como elevação de Distrito a Município ou alteração de suas nomenclaturas por força de lei.</li><li>Inexatidão da ordem cronológica e sucessiva referente à numeração do livro, da folha, da página, do termo, bem como da data do registro.</li></ol><p><strong>Estão corretas as afirmativas</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 199, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>No que tange ao Provimento nº 260/13 da Corregedoria Geral de Justiça de Minas Gerais, assinale a afirmativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 200, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Assinale a alternativa correta de acordo com o Provimento nº 260/13 da Corregedoria Geral de Justiça de Minas Gerais.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 201, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>De acordo com a Lei nº 6.766/79, assinale a alternativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 202, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>No que tange à Cédula de Crédito Bancário, Lei nº 10.931/04, assinale a alternativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 203, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>No que concerne à Lei nº 10.257/01, assinale a afirmativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 204, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>De acordo com a Lei nº 4.504/64 assinale a alternativa INCORRETA.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 205, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>A Lei nº 4.591/64 dispõe sobre o condomínio em edificações e as incorporações imobiliárias. Conforme o exposto, analise as proposições a seguir.</strong></p><ol style="list-style-type: upper-roman;"><li>A critério do incorporador, a incorporação poderá ser submetida ao regime da afetação, pelo qual o terreno e as acessões objeto de incorporação imobiliária, bem como os demais bens e direitos a ela vinculados, manter-se-ão apartados do patrimônio do incorporador e constituirão patrimônio de afetação, destinado à consecução da incorporação correspondente e à entrega das unidades imobiliárias aos respectivos adquirentes.</li><li>Considera-se constituído o patrimônio de afetação mediante averbação, a qualquer tempo, no Registro de Imóveis, de termo firmado pelo incorporador e, quando for o caso, também pelos titulares de direitos reais de aquisição sobre o terreno e esta averbação não será obstada pela existência de ônus reais que tenham sido constituídos sobre o imóvel objeto da incorporação para garantia do pagamento do preço de sua aquisição ou do cumprimento de obrigação de construir o empreendimento.</li><li>Os proprietários, promitentes compradores, cessionários ou promitentes cessionários dos direitos pertinentes à aquisição de unidades autônomas, em edificações a serem construídas, em construção ou já construídas, elaborarão, por escrito, a Convenção de condomínio, e deverão, também, por contrato ou por deliberação em assembleia, aprovar o Regimento Interno da edificação ou conjunto de edificações. Far-se-á o registro da Convenção no Registro de Imóveis, bem como a averbação das suas eventuais alterações.</li><li>Considera-se incorporação imobiliária a atividade exercida com o intuito de promover e realizar a construção, para alienação total ou parcial, de edificações ou conjunto de edificações compostas de unidades autônomas.</li></ol><p><strong>Estão corretas as proposições</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 206, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>De acordo com o Provimento nº 260/13 da Corregedoria Geral de Justiça de Minas Gerais, assinale a alternativa INCORRETA.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 207, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>De acordo com a Lei nº 15.424/04, analise as afirmativas a seguir.</strong></p><ol style="list-style-type: upper-roman;"><li>Dentre as proibições ao Notário e ao Registrador está a de conceder desconto remuneratório de emolumentos ou de valores da Taxa de Fiscalização Judiciária, bem como cobrar do usuário quantias não previstas nas tabelas constantes no Anexo desta Lei, ainda que sob fundamento de analogia.</li><li>Ao Juiz de Paz é devida verba indenizatória pela manifestação em autos de habilitação, bem como por diligências para o casamento.</li><li>Os emolumentos e a respectiva Taxa de Fiscalização Judiciária fixados nas tabelas constantes no Anexo desta Lei serão pagos pelo interessado que solicitar o ato, no seu requerimento ou na apresentação do título.</li><li>Para fins de enquadramento nas tabelas, relativamente aos atos relativos a situações com conteúdo financeiro, serão considerados como parâmetros o valor dos bens e direitos a serem registrados, quando se tratar de registro do formal de partilha.</li></ol><p><strong>Estão corretas as afirmativas</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 208, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Segundo a Lei Federal nº 9.514/97, que dispõe sobre o Sistema de Financiamento Imobiliário, institui a alienação fiduciária de coisa imóvel e dá outras providências, vencida e não paga, no todo ou em parte, a dívida e constituído em mora o fiduciante, consolidar-se-á, nos termos da lei, a propriedade do imóvel em nome do fiduciário quando intimado pessoalmente o fiduciante ou seu representante legal ou procurador regularmente constituído, pelo Oficial do Registro de Títulos e Documentos,</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 209, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Analise as proposições a seguir de acordo com o Provimento nº 260/13 da Corregedoria Geral de Justiça do Estado de Minas Gerais, bem como a Lei nº 9.514/97.</strong></p><ol style="list-style-type: upper-roman;"><li>As notificações extrajudiciais são compostas pelos atos de protocolo, registro, intimação, certidão, diligência, quando necessária, e arquivamento.</li><li>As diligências poderão ser realizadas na zona rural, zona urbana ou em outro município integrante da comarca.</li><li>Quando, por duas vezes, o oficial de registro de imóveis ou de registro de títulos e documentos ou o serventuário por eles credenciado houver procurado o intimando em seu domicílio ou residência sem o encontrar, deverá, havendo suspeita motivada de ocultação, intimar qualquer pessoa da família ou, em sua falta, qualquer vizinho de que, no quinto dia útil imediato, retornará ao imóvel, a fim de efetuar a intimação, na hora que designar, aplicando-se subsidiariamente o disposto nos arts. 252, 253 e 254 da Lei no 13.105, de 16 de março de 2015 (Código de Processo Civil).</li><li>As notificações restringem-se à entrega de títulos ou documentos registrados, admitindo-se, para entrega ao destinatário, a anexação de objetos de qualquer espécie ou outros documentos originais.</li></ol><p><strong>Estão corretas apenas as proposições</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 210, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Segundo a Lei nº 6.015/73 analise as afirmativas a seguir.</strong></p><ol style="list-style-type: upper-roman;"><li>Apresentado o título ou o documento para registro ou averbação, serão anotados, no protocolo, a data de sua apresentação, sob o número de ordem que se seguir imediatamente, a natureza do instrumento, a espécie de lançamento a fazer (registro integral ou resumido, ou averbação), o nome do apresentante, reproduzindo-se as declarações relativas ao número de ordem, à data, e à espécie de lançamento a fazer no corpo do título, do documento ou do papel.</li><li>Os títulos, documentos e papéis escritos em língua estrangeira, uma vez adotados os caracteres comuns, poderão ser registrados no original, para o efeito da sua conservação ou perpetuidade. Para produzirem efeitos legais no País e para valerem contra terceiros, deverão, entretanto, ser vertidos em vernáculo e registrada a tradução, o que, também, se observará em relação às procurações lavradas em língua estrangeira.</li><li>O apontamento do título, documento ou papel no protocolo será feito, seguida e imediatamente um depois do outro. Sem prejuízo da numeração individual de cada documento, se a mesma pessoa apresentar simultaneamente diversos documentos de idêntica natureza, para lançamentos da mesma espécie, serão eles lançados no protocolo separadamente.</li><li>O oficial deverá recusar registro a título e a documento que não se revistam das formalidades legais. Se tiver suspeita de falsificação, poderá o oficial sobrestar no registro, depois de protocolado o documento, até notificar o apresentante dessa circunstância; se este insistir, o registro será feito com essa nota, podendo o oficial, entretanto, submeter a dúvida ao Juiz competente, ou notificar o signatário para assistir ao registro, mencionando também as alegações pelo último aduzidas.</li></ol><p><strong>Estão corretas apenas as afirmativas</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 211, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>A Lei nº 6.015/73 informa as atribuições do Registro de Títulos e Documentos, dentre elas a saber:</strong></p><ol style="list-style-type: upper-roman;"><li>Contrato de parceria agrícola ou pecuária.</li><li>Penhor rural e comum sobre coisas móveis.</li><li>Facultativo, de quaisquer documentos, para sua conservação.</li><li>Instrumentos particulares, para a prova das obrigações convencionais de qualquer valor.</li></ol><p><strong>Estão corretas as afirmativas</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 212, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>No estado de Minas Gerais</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 213, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>A procuração lavrada em cartório de notas</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 214, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Para regular habilitação, celebração e registro do casamento entre João e Isabela,</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
          {
                id_question: 215, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Referido filho de João e Isabela</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 216, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Acerca da emancipação de João, tem-se que, para sua hígida e regular constituição,</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 217, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>“O pai e a mãe de Isabela e a pessoa nomeada procuradora comparecem a um cartório de notas de Teófilo Otoni – MG, pretendendo lavrar uma escritura pública por meio da qual os pais doariam um imóvel à filha Isabela. Eles apresentam ao tabelião a procuração lavrada no Consulado Brasileiro de Boston, tendo como outorgante exclusivamente Isabela.” Na hipótese,</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 218, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Acerca de lavratura de escritura pública de divórcio ou inventário e partilha, considerando disposições do Código de Processo Civil (Lei nº 13.150∕15) e da Resolução nº 35/2007, do Conselho Nacional de Justiça, assinale a alternativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 219, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p>Considere o texto acerca da bibliografia de Leonardo da Vinci para responder à questão.</p><p><br />“Leonardo da Vinci teve a boa sorte de nascer fora do casamento. Caso contrário, provavelmente teria se tornado tabelião, assim como todo primogênito legítimo de sua família havia pelo menos cinco gerações.<br />As raízes de sua família remontam ao começo do século XIV, quando seu tataravô Michele atuava como tabelião no vilarejo de Vinci, nas colinas da Toscana, cerca de trinta quilômetros a oeste de Florença. Com o crescimento da economia mercantil italiana, os tabeliães cumpriam um importante papel ao legitimar acordos comerciais, vendas de terras, testamentos e elaborar outros documentos jurídicos em latim, frequentemente enfeitando o texto com referências históricas e floreios literários.</p><p>(...)</p><p>Embora algumas guildas aceitassem os filhos ilegítimos de seus integrantes, esse não era o caso da ‘Arte dei Giudici e Notai’, a venerável guilda de juízes e tabeliães fundada em 1197, que o pai de Leonardo integrava. ‘O tabelião cumpria os papéis de testemunha certificada e escrivão, escreveu Thomas Kuehn em ‘Illegitimacy in Renasissance Florence’. ‘Sua confiabilidade devia estar acima de qualquer suspeita. Ele tinha de ser alguém totalmente em sintonia com as regras da sociedade’.</p><p>(...)</p><p>Uma semana depois, Piero da Vinci (pai de Leonardo da Vinci) abandonou Caterina e o filho pequeno e voltou para Florença, onde, já na segunda-feira, retornou ao escritório a fim de atestar a autenticidade de documentos para os clientes.”</p><p style="text-align: right;">(Fonte: ISAACSON, Walter. Leonardo da Vinci. Ed. Intrísica, 2017.)</p><p style="text-align: left;">Coteje a Lei nº 8.935/1994 (Lei dos Notários e Registradores) com os trechos transcritos da obra citada e assinale a alternativa que contém algum princípio, norma, função ou competência do tabelião brasileiro consagrado na Lei e NÃO mencionado nos trechos da obra.</p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 220, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>“Comparece a um cartório de notas do estado de Minas Gerais um portador de uma certidão expedida pela Receita Federal do Brasil. A certidão está impressa em papel tamanho A4, é colorida, legível, completa, não contém rasura e contém o endereço eletrônico da página na internet de que fora extraída. O comparecente requer que seja praticado ato notarial de autenticação daquela cópia.” Na hipótese,</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 221, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Em 1970, um casal faleceu, deixando a seus cinco filhos um imóvel rural de 500 hectares no município de Curvelo – MG. Os filhos promoveram processo judicial de inventário e partilha e registraram a transmissão causa mortis do bem no Cartório de Imóveis de Curvelo – MG. Cada filho adquiriu fração ideal de 1/5 (um quinto) sobre o imóvel, sem se especializar a gleba de cada um. Então, desde os anos 70 até hoje, 2018, eles passaram a exercer posse direta, ininterruptamente, sobre gleba que correspondia a cada fração ideal. Cada um cercou com arame a gleba que lhe correspondia e cada um passou a explorá-la economicamente: uns plantando eucalipto, outros, roça de milho e outro com atividade pecuária leiteira. Agora, em 2018, três dos cinco irmãos comparecem a um cartório de notas do estado de Minas Gerais e dizem ao tabelião: “1. que o irmão que explora atividade pecuária no imóvel (um dos ora comparecentes) pretende vender seu imóvel e encontrou um comprador para sua gleba de terras; 2. que esse pretenso comprador exige, para concretizar o negócio, que o imóvel tenha matrícula autônoma no cartório de imóveis (distinta da matrícula do imóvel maior); 3. que essa gleba a ser especializada confronta apenas exatamente com as duas glebas pertencentes aos dois irmãos comparecentes (não divide com as outras duas glebas pertencentes aos dois irmãos que não comparecem nem divide com imóvel externo); 4. que os outros dois irmãos (não comparecentes) manifestaram não se opor a essa individualização, mas que também não assinariam nada em cartório, não fariam ato algum para concretizar ou ajudar a individualização”. Na hipótese,</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 222, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>“Pessoa capaz requer a um tabelião no estado de Minas Gerais a realização de ata notarial para comprovar um fato e paga os emolumentos correspondentes. Ao verificar os fatos, o tabelião se depara com situação que, a seu juízo, constitui conduta comissiva de crime de ação penal pública incondicionada. Então, o tabelião realiza a diligência e prepara o ato, narrando os fatos segundo seus sentidos. Após lavrar a ata notarial, o requerente recusa-se a assiná-la e manifesta que ‘o documento contém narrativa de fatos contrários a seu interesse; se soubesse que seria assim, não teria pedido’.” Na hipótese,</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 223, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Acerca de protesto de títulos, é correto afirmar que:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 224, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>O companheiro sobrevivente</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 225, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>O Conselho Nacional de Justiça (CNJ) foi o responsável por coordenar e regulamentar a aplicação da Convenção da Apostila da Haia no Brasil. O tratado assinado pelo Brasil tem o objetivo de agilizar e simplificar a legalização de documentos entre os 112 países signatários, permitindo o reconhecimento mútuo de documentos brasileiros no exterior e de documentos estrangeiros no Brasil. Tal tratado entrou em vigor em:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 226, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p>“A cerimônia de posse foi uma cena teatral, de caráter jurídico: uma cerimônia com a intenção cartorial de ser ato de Direito Internacional. [...] participa dessa ficção jurídica: ato cartorial de declaração de propriedade, num lugar onde não havia cartório algum. Declarava-se a propriedade sobre uma ilha, e não havia ilha; não só havia ficção quanto ao objeto, mas se inventava uma repartição pública, para cumprir a ficção de uma partilha papal do planeta, com a ficção de um desvio de rota, pela ficção da vontade divina. O direito de propriedade pretendia basear-se numa posse – o uti possidetis – o ‘como possuis’ do que não se possuía nem se sabia o que era. A posse do território era uma ficção (...) O sistema de propriedade rural brasileiro constrói-se à base dessa ficção: e com ele o sistema de poder e de organização social.”</p> <p style="text-align: right;">(Fonte: KOTHE, Flávio R. O Cânone Colonial. Editora UnB, 1997.)</p> <p>Do trecho transcrito, depreende-se que o autor discorre sobre o documento (omitido na transcrição):</p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 227, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Nos termos do Código Civil – Lei nº 10.406, de 10 de janeiro de 2002 – são absolutamente incapazes de exercer pessoalmente os atos da vida civil os menores de</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 228, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Somente NÃO são incapazes, relativamente a certos atos ou à maneira de os exercer</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 229, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>São impedidos de casar</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 230, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Considera-se possuidor de boa-fé</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 231, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Os bens naturalmente divisíveis podem tornar-se indivisíveis</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 232, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>O início da existência legal das pessoas jurídicas de direito privado se dá com</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 234, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Tendo a pessoa natural diversas residências onde, por mera liberalidade, alternadamente viva, considerar-se-á</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 235, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Uma casa modular, que pode ser retirada de seus alicerces, para ser fixada em local diferente do original, sem perder sua natureza e finalidade é considerada</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 236, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>A emancipação produz o efeito de</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 237, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Assinale a alternativa INCORRETA.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 238, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Assinale a afirmativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 239, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Assinale a afirmativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 240, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Assinale a afirmativa INCORRETA.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 241, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Assinale a alternativa INCORRETA.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 243, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Assinale a alternativa INCORRETA.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 244, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Em relação à compra e venda, assinale a alternativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 245, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Em relação ao mandato, assinale a alternativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 246, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Assinale a alternativa correta.</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 247, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Durante o parto, o recém-nascido sofreu lesões físicas decorrentes da atuação médica. Nesse caso, é correto afirmar que é responsabilidade civil do médico</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 248, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>A servidão aparente, sem título,</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
            {
                id_question: 249, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Conforme o Código Civil em vigência, é considerado como domicílio necessário do incapaz</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },
          {
                id_question: 250, id_office: 2, id_discipline_subject: 1,
                id_bank: 1, id_institution: 1, year: 2018, id_user: 1,
                issue_resolution: null,
                enunciated: '<p><strong>Acerca do tema relativo à tipicidade na execução é INCORRETO afirmar que:</strong></p>',
                created_at: new Date(), updated_at: new Date()
            },


        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('question', null, {});
    }
};
