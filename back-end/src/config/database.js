module.exports = {
  b2mconcursos: {

    host: process.env.DB_HOST_TERMOMETRO,
    database: process.env.DB_NAME_TERMOMETRO,
    username: process.env.DB_USER_TERMOMETRO,
    password: process.env.DB_PASS_TERMOMETRO,
    define: {
      timestamps: true,
      underscored: true,
    },
  },
};
