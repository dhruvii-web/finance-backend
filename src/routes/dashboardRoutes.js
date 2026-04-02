const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboardController");
const checkRole = require("../middleware/auth");

// only admin & analyst can access
router.get("/", checkRole(["admin", "analyst"]), dashboardController.getSummary);

module.exports = router;