const express = require("express");
const cors = require("cors");
const sequelize = require("./db");
const MeditationSession = require("./models/MeditationSession");

const app = express();

app.use(cors());
app.use(express.json());

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

app.post("/meditation-sessions", async (req, res) => {
  try {
    const { duration } = req.body;
    if (!duration || typeof duration !== "number" || duration <= 0) {
      return res.status(400).json({ error: "Valid duration is required" });
    }

    const session = await MeditationSession.create({
      duration,
      date: new Date(),
    });

    res.status(201).json(session);
  } catch (error) {
    console.error("Error creating meditation session:", error);
    res.status(500).json({ error: "Failed to create meditation session" });
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
