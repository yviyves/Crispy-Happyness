const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("zendu", process.env.USER, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = sequelize;
