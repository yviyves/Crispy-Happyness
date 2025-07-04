const sequelize = require("./db");
const MeditationSession = require("./models/MeditationSession");
const UserSession = require("./models/User");

async function initializeDatabase() {
  try {
    await sequelize.authenticate();
    console.log(
      "Connection to the database has been established successfully."
    );

    await MeditationSession.sync({ force: true });
    await UserSession.sync({ force: true });
    console.log("Meditation sessions table created successfully!");
    console.log("User sessions table created successfully!");

    // Add some test data
    await MeditationSession.bulkCreate([
      { duration: 10, date: new Date("2025-07-01") },
      { duration: 15, date: new Date("2025-07-02") },
      { duration: 20, date: new Date("2025-07-03") },
    ]);

    await UserSession.bulkCreate([
      {
        email: "test1@gmail.com",
        password:
          "$2a$10$HSYmoR.nr9EbcLmCRT3phe8R5kkgcPY6HfxulKu3i0w2sOciyHZfq",
      },
      { email: "test2@gmail.com", password: "test2" },
      { email: "test3@gmail.com", password: "test3" },
    ]);

    console.log("Test data added successfully!");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  } finally {
    await sequelize.close();
  }
}

initializeDatabase();
