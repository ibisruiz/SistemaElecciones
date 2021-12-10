const express = require("express");
const { route } = require("./admin");
const router = express.Router();
const electorController = require("../controllers/ElectorController")

router.get("/", electorController.GetIndex);
router.get("/elector-menu", electorController.getMenuElector);
router.get("/elector-puestos",electorController.getPuestoE);
router.get("/elector-candidatoR",electorController.getcandidatoR);
router.get("/elector-candidatoD",electorController.getcandidatoD);
router.get("/elector-candidatoP",electorController.getcandidatoP);
router.get("/elector-candidatoS",electorController.getcandidatoS);

module.exports = router;