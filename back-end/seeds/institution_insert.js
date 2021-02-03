
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('institution').del()
    .then(function () {
      // Inserts seed entries
      return knex('institution').insert([
        { name_institution: 'Marinha - Marinha do Brasil ' },
        { name_institution: 'Aeronáutica - Força Aérea Brasileira ' },
        { name_institution: 'Exército' },
        { name_institution: 'Prefeitura Santana de Parnaíba' },
        { name_institution: 'Prefeitura Rio de Janeiro' },
        { name_institution: 'MP/SP - Ministério Público de São Paulo' },
        { name_institution: 'TJ SP - Tribunal de Justiça de São Paulo' },
        { name_institution: 'Ministério da Saúde' },
        { name_institution: 'PM SP - Polícia Militar de São Paulo' },
        { name_institution: 'Prefeitura Piracicaba' },
        { name_institution: 'Prefeitura Campo Grande (MS)' },
        { name_institution: 'Prefeitura Fortaleza' },
        { name_institution: 'Prefeitura Porto Alegre' },
        { name_institution: 'Prefeitura São Paulo' },
        { name_institution: 'Prefeitura Aracruz' },
        { name_institution: 'RFB - Receita Federal do Brasil' },
        { name_institution: 'Prefeitura Taubaté' },
        { name_institution: 'Prefeitura Guarulhos' },
        { name_institution: 'Prefeitura de Osasco' },
        { name_institution: 'Prefeitura Cerquilho' },
        { name_institution: 'PM MG - Polícia Militar de Minas Gerais' },
        { name_institution: 'Prefeitura Porto Ferreira' },
        { name_institution: 'TJ PR - Tribunal de Justiça do Paraná' },
        { name_institution: 'SES SP - Secretaria da Saúde de São Paul' },
      ]);
    });
};
