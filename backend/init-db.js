const sequelize = require("./db");
const MeditationSession = require("./models/MeditationSession");

async function initializeDatabase() {
  try {
    await sequelize.authenticate();
    console.log(
      "Connection to the database has been established successfully."
    );

    await MeditationSession.sync({ force: true });
    console.log("Meditation sessions table created successfully!");

    // Add some test data
    await MeditationSession.bulkCreate([
      { duration: 10, date: new Date("2025-07-01") },
      { duration: 15, date: new Date("2025-07-02") },
      { duration: 20, date: new Date("2025-07-03") },
    ]);

    console.log("Test data added successfully!");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  } finally {
    await sequelize.close();
  }
}

initializeDatabase();
