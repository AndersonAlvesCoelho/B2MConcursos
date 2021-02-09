module.exports = {
  b2mconcursos: {
    dialect: "postgres",
    host: process.env.DB_HOST_B2M,
    database: process.env.DB_NAME_B2M,
    username: process.env.DB_USER_B2M,
    password: process.env.DB_PASS_B2M,
    define: {
      timestamps: true,
      underscored: true,
    },
  },
};
