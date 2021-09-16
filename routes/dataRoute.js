const express = require("express");
const dataController = require("../controllers/dataController");

const router = express.Router();

router.get("/", dataController.getData);

router.post("/", dataController.postData);

router.delete("/:id", dataController.deleteData);

module.exports = router;
