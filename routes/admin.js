const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/AdminController");


router.get("/index", AdminController.GetAdminHome);
router.get("/menu", AdminController.GetAdminMenu);


module.exports = router;