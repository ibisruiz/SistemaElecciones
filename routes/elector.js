const express = require("express");
const { route } = require("./admin");
const router = express.Router();

router.get("/", (req, res, next)=>{

    console.log("por get");
    res.status(200).render("index",{layout:false});
});

router.post("/", (req, res, next)=>{ 

    console.log("por post");
    res.status(200).render("index",{layout:false});
});



module.exports = router;