
exports.GetIndex = (req, res, next) => {

    res.status(200).render("elector/index",{layout:false});
    
};