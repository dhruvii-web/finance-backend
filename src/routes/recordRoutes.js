const express = require("express");
const router = express.Router();
const recordController = require("../controllers/recordController");
const checkRole = require("../middleware/auth");

router.post("/", checkRole(["admin"]), recordController.createRecord);

router.get("/", checkRole(["admin", "analyst", "viewer"]), recordController.getRecords);

module.exports = router;