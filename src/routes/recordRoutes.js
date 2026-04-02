const express = require("express");
const router = express.Router();
const recordController = require("../controllers/recordController");
const checkRole = require("../middleware/auth");

// admin only
router.post("/", checkRole(["admin"]), recordController.createRecord);

// all roles can view
router.get("/", checkRole(["admin", "analyst", "viewer"]), recordController.getRecords);

module.exports = router;