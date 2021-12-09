const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/AdminController");


router.get("/index", AdminController.GetAdminHome);

router.post("/index", AdminController.PostAdminHome);


module.exports = router;