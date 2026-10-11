const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const db = require("../db");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// =====================================================
// TEST ROUTE
// =====================================================

router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Auth routes are working",
  });
});

// =====================================================
// REGISTER
// =====================================================

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email and password are required",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters",
      });
    }

    const checkSql = "SELECT * FROM users WHERE email = ?";

    db.query(checkSql, [email], async (err, results) => {
      if (err) {
        console.error("Check user error:", err.message);

        return res.status(500).json({
          success: false,
          message: "Database error",
        });
      }

      if (results.length > 0) {
        return res.status(400).json({
          success: false,
          message: "Email already registered",
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const insertSql = `
        INSERT INTO users (name, email, password, role)
        VALUES (?, ?, ?, ?)
      `;

      db.query(
        insertSql,
        [name, email, hashedPassword, "user"],
        (err, result) => {
          if (err) {
            console.error("Register error:", err.message);

            return res.status(500).json({
              success: false,
              message: "Registration failed",
            });
          }

          const token = jwt.sign(
            {
              id: result.insertId,
              email: email,
              role: "user",
            },
            process.env.JWT_SECRET,
            {
              expiresIn: "1d",
            }
          );

          return res.status(201).json({
            success: true,
            message: "Registration successful",
            user: {
              id: result.insertId,
              name: name,
              email: email,
              role: "user",
            },
            token: token,
          });
        }
      );
    });
  } catch (error) {
    console.error("Register Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

// =====================================================
// LOGIN
// =====================================================

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const sql = "SELECT * FROM users WHERE email = ?";

    db.query(sql, [email], async (err, results) => {
      if (err) {
        console.error("Login database error:", err.message);

        return res.status(500).json({
          success: false,
          message: "Database error",
        });
      }

      if (results.length === 0) {
        return res.status(401).json({
          success: false,
          message: "Invalid email or password",
        });
      }

      const user = results[0];

      const passwordMatch = await bcrypt.compare(
        password,
        user.password
      );

      if (!passwordMatch) {
        return res.status(401).json({
          success: false,
          message: "Invalid email or password",
        });
      }

      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
          role: user.role,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "1d",
        }
      );

      return res.json({
        success: true,
        message: "Login successful",
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
        token: token,
      });
    });
  } catch (error) {
    console.error("Login Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

// =====================================================
// EXPORT ROUTER
// =====================================================

// =====================================================
// PROTECTED PROFILE ROUTE
// GET /api/auth/profile
// =====================================================

router.get("/profile", authMiddleware, (req, res) => {
  const sql = `
    SELECT id, name, email, role, created_at
    FROM users
    WHERE id = ?
  `;

  db.query(sql, [req.user.id], (err, results) => {
    if (err) {
      console.error("❌ Profile database error:", err.message);

      return res.status(500).json({
        success: false,
        message: "Database error",
      });
    }

    if (results.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.json({
      success: true,
      message: "Profile fetched successfully",
      user: results[0],
    });
  });
});

module.exports = router;