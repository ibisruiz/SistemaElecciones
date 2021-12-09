
exports.GetNotFound = (req, res, next) => {
    
    res.status(404).render("404",{layout:false, pageTitle: "Not found"});
    
};