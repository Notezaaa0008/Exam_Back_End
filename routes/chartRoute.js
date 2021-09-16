const express = require("express");
const chartController = require("../controllers/chartController");

const router = express.Router();

router.get("/", chartController.getChart);

router.post("/", chartController.postChart);

module.exports = router;
