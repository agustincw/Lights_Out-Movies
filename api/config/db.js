const Sequelize = require("sequelize")

const db = new Sequelize("TMDB1", null, null, {
  dialect: "postgres",
  host: "localhost",
  logging: false,
});

module.exports = db;