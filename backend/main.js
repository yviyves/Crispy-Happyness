const express = require("express");
const cors = require("cors");
const sequelize = require("./db");
const MeditationSession = require("./models/MeditationSession");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/meditation-sessions", async (req, res) => {
  try {
    const meditationSessions = await MeditationSession.findAll();
    res.json(meditationSessions);
  } catch (error) {
    console.error("Error fetching meditation sessions:", error);
    res.status(500).json({ error: "Failed to fetch meditation sessions" });
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
