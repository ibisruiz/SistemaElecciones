const express = require("express");
const { route } = require("./admin");
const router = express.Router();
const electorController = require("../controllers/ElectorController")

router.get("/", electorController.GetIndex);
router.get("/elector-menu", electorController.getMenuElector);

module.exports = router;