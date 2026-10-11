
const express = require("express");
const db = require("../db");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// GET Dashboard Statistics
router.get("/", authMiddleware, (req, res) => {
  
const sql = `
  SELECT
    COUNT(*) AS total_members,
    COALESCE(SUM(CASE WHEN status = 'active' THEN 1 ELSE 0 END), 0) AS active_members,
    COALESCE(SUM(CASE WHEN status = 'expired' THEN 1 ELSE 0 END), 0) AS expired_members
  FROM members
`;


  db.query(sql, (err, results) => {
    if (err) {
      console.error("Dashboard error:", err.message);
      return res.status(500).json({
        success: false,
        message: "Failed to fetch dashboard statistics"
      });
    }

    return res.json({
      success: true,
      message: "Dashboard statistics fetched successfully",
      dashboard: results[0]
    });
  });
});

module.exports = router;
