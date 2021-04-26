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

        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('question', null, {});
    }
};
