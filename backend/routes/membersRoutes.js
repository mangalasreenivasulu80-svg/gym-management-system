const express = require("express");
const db = require("../db");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// =====================================================
// TEST ROUTE
// GET /api/members/test
// =====================================================

router.get("/test", authMiddleware, (req, res) => {
  res.json({
    success: true,
    message: "Members routes are working",
    user: req.user,
  });
});

// =====================================================
// GET ALL MEMBERS
// GET /api/members
// =====================================================

router.get("/", authMiddleware, (req, res) => {
  const sql = `
    SELECT
      id,
      name,
      phone,
      email,
      gender,
      date_of_birth,
      address,
      membership_type,
      membership_start,
      membership_end,
      status,
      created_at
    FROM members
    ORDER BY id DESC
  `;

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Get members error:", err.message);

      return res.status(500).json({
        success: false,
        message: "Database error",
      });
    }

    return res.json({
      success: true,
      message: "Members fetched successfully",
      count: results.length,
      members: results,
    });
  });
});

// =====================================================
// GET SINGLE MEMBER
// GET /api/members/:id
// =====================================================

router.get("/:id", authMiddleware, (req, res) => {
  const memberId = req.params.id;

  const sql = `
    SELECT
      id,
      name,
      phone,
      email,
      gender,
      date_of_birth,
      address,
      membership_type,
      membership_start,
      membership_end,
      status,
      created_at
    FROM members
    WHERE id = ?
  `;

  db.query(sql, [memberId], (err, results) => {
    if (err) {
      console.error("Get single member error:", err.message);

      return res.status(500).json({
        success: false,
        message: "Database error",
      });
    }

    if (results.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Member not found",
      });
    }

    return res.json({
      success: true,
      message: "Member fetched successfully",
      member: results[0],
    });
  });
});

// =====================================================
// ADD MEMBER
// POST /api/members
// =====================================================

router.post("/", authMiddleware, (req, res) => {
  const {
    name,
    phone,
    email,
    gender,
    date_of_birth,
    address,
    membership_type,
    membership_start,
    membership_end,
  } = req.body;

  // Required fields
  if (!name || !phone || !membership_type || !membership_start) {
    return res.status(400).json({
      success: false,
      message:
        "Name, phone, membership type and membership start are required",
    });
  }

  const sql = `
    INSERT INTO members (
      name,
      phone,
      email,
      gender,
      date_of_birth,
      address,
      membership_type,
      membership_start,
      membership_end,
      status
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    name,
    phone,
    email || null,
    gender || null,
    date_of_birth || null,
    address || null,
    membership_type,
    membership_start,
    membership_end || null,
    "active",
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Add member error:", err.message);

      return res.status(500).json({
        success: false,
        message: "Failed to add member",
      });
    }

    return res.status(201).json({
      success: true,
      message: "Member added successfully",
      member: {
        id: result.insertId,
        name: name,
        phone: phone,
        email: email || null,
        gender: gender || null,
        date_of_birth: date_of_birth || null,
        address: address || null,
        membership_type: membership_type,
        membership_start: membership_start,
        membership_end: membership_end || null,
        status: "active",
      },
    });
  });
});

// =====================================================
// UPDATE MEMBER
// PUT /api/members/:id
// =====================================================

router.put("/:id", authMiddleware, (req, res) => {
  const memberId = req.params.id;

  const {
    name,
    phone,
    email,
    gender,
    date_of_birth,
    address,
    membership_type,
    membership_start,
    membership_end,
    status,
  } = req.body;

  if (!name || !phone || !membership_type || !membership_start) {
    return res.status(400).json({
      success: false,
      message:
        "Name, phone, membership type and membership start are required",
    });
  }

  const sql = `
    UPDATE members
    SET
      name = ?,
      phone = ?,
      email = ?,
      gender = ?,
      date_of_birth = ?,
      address = ?,
      membership_type = ?,
      membership_start = ?,
      membership_end = ?,
      status = ?
    WHERE id = ?
  `;

  const values = [
    name,
    phone,
    email || null,
    gender || null,
    date_of_birth || null,
    address || null,
    membership_type,
    membership_start,
    membership_end || null,
    status || "active",
    memberId,
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Update member error:", err.message);

      return res.status(500).json({
        success: false,
        message: "Failed to update member",
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Member not found",
      });
    }

    return res.json({
      success: true,
      message: "Member updated successfully",
      member: {
        id: Number(memberId),
        name,
        phone,
        email: email || null,
        gender: gender || null,
        date_of_birth: date_of_birth || null,
        address: address || null,
        membership_type,
        membership_start,
        membership_end: membership_end || null,
        status: status || "active",
      },
    });
  });
});

// =====================================================
// DELETE MEMBER
// DELETE /api/members/:id
// =====================================================

router.delete("/:id", authMiddleware, (req, res) => {
  const memberId = req.params.id;

  const sql = "DELETE FROM members WHERE id = ?";

  db.query(sql, [memberId], (err, result) => {
    if (err) {
      console.error("Delete member error:", err.message);

      return res.status(500).json({
        success: false,
        message: "Failed to delete member",
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Member not found",
      });
    }

    return res.json({
      success: true,
      message: "Member deleted successfully",
    });
  });
});

// =====================================================
// EXPORT ROUTER
// =====================================================

module.exports = router;