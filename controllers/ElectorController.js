
exports.GetIndex = (req, res, next) => {

    res.status(200).render("elector/index", { layout: false });

};

exports.getMenuElector = (req, res, next) => {

    res.status(200).render("elector/menuElector", { layout: false });

};