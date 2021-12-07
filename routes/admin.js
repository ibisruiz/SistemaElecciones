const express = require("express");
const router = express.Router();

router.get("/admin", (req, res, next)=>{

    console.log("por get");
    res.status(200).render("admin-home",{layout:false});
});

router.post("/admin", (req, res, next)=>{ 

    console.log("por post");
    res.status(200).render("admin-home",{layout:false});
});


module.exports = router;