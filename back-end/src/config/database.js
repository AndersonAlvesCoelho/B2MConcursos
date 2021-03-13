module.exports = {
  development: {
    dialect: "postgres",
    host: 'localhost',
    database: 'b2mconcursos',
    username: 'postgres',
    password: '16798577',
    define: {
      timestamps: false,
      underscored: true,
    },
    omitNull: true,
  },
};