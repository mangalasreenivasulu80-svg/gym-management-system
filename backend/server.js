
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const db = require("./db");
const authRoutes = require("./routes/authRoutes");
const membersRoutes = require("./routes/membersRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/members", membersRoutes);
app.use("/api/dashboard", dashboardRoutes);

// Home route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Gym Management Backend is running",
  });
});

// MySQL connection test
app.get("/api/test-db", (req, res) => {
  const sql = "SELECT 1 AS test";

  db.query(sql, (err, result) => {
    if (err) {
      console.error("MySQL query failed:", err.message);

      return res.status(500).json({
        success: false,
        message: "MySQL connection failed",
        error: err.message,
      });
    }

    return res.json({
      success: true,
      message: "MySQL database connected successfully",
      result,
    });
  });
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
