
module.exports = {
  // # CONEXÃO EXTERNA B.D
  development: {
    dialect: "postgres",
    host: 'localhost',
    database: 'wwb2mc_b2mconcursos',
    username: 'wwb2mc_b2m',
    password: 'LFT#@vD8Q&wB',
    define: {
      timestamps: false,
      underscored: true,
    },
    omitNull: true,
  },
  // # CONEXÃO INTERNA B.D
  // development: {
  //   dialect: "postgres",
  //   host: 'localhost',
  //   database: 'b2mconcursos',
  //   username: 'postgres',
  //   password: '16798577',
  //   define: {
  //     timestamps: false,
  //     underscored: true,
  //   },
  //   omitNull: true,
  // },
};