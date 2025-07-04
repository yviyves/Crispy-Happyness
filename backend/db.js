const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  database: "zendu_postgres",
  username: "zendu_postgres_user",
  password: "7gZ0QOiD1cRmmqNrHaCsEVcgqR6j4zBp",
  host: "dpg-d1jt1tmmcj7s73ab263g-a.frankfurt-postgres.render.com",
  port: 5432,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  logging: console.log, // Enable logging for debugging
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

// Test the connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connection has been established successfully.");
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
  }
}

testConnection();

module.exports = sequelize;
