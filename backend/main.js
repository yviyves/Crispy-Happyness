const express = require("express");
const cors = require("cors");
const sequelize = require("./db");
const bcrypt = require("bcryptjs");

const MeditationSession = require("./models/MeditationSession");
const UserSession = require("./models/User");
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

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const user = await UserSession.findOne({ where: { email } });
    if (!user) {
      // For security, don't reveal that the email doesn't exist
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Compare the provided password with the hashed password from the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Don't send the hashed password back to the client
    const { password: _, ...userWithoutPassword } = user.get({ plain: true });

    res.json({
      message: "Login successful",
      user: userWithoutPassword,
    });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Failed to log in" });
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
