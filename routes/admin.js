const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/AdminController");


router.get("/index", AdminController.GetAdminHome);
router.get("/menu", AdminController.GetAdminMenu);

router.get("/puestos-electivos-mantenimiento", AdminController.GetMantPuestosElectivos);
router.get("/puestos-electivos-modificacion", AdminController.GetModiPuestosElectivos);
router.post("/puestos-electivos-modificacion", AdminController.PostModiPuestosElectivos);

router.get("/partidos-mantenimiento", AdminController.GetMantPartidos);
router.get("/candidatos-mantenimiento", AdminController.GetMantCandidatos);
router.get("/ciudadanos-mantenimiento", AdminController.GetMantCiudadanos);
router.get("/elecciones-mantenimiento", AdminController.GetMantElecciones);






module.exports = router; 