const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const MeditationSession = sequelize.define(
  "MeditationSession",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Duration of the meditation session in minutes",
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "meditation_sessions",
    timestamps: false,
  }
);

module.exports = MeditationSession;
