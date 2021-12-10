
exports.GetIndex = (req, res, next) => {

    res.status(200).render("elector/index", { layout: false });

};

exports.getMenuElector = (req, res, next) => {

    res.status(200).render("elector/menuElector", { layout: false });

};

exports.getPuestoE = (req, res, next) => {

    res.status(200).render("elector/puestos", { layout: false });

};

exports.getcandidatoR = (req, res, next) => {

    res.status(200).render("elector/candidaroR", { layout: false });

};


exports.getcandidatoD = (req, res, next) => {

    res.status(200).render("elector/candidatoD", { layout: false });

};


exports.getcandidatoP = (req, res, next) => {

    res.status(200).render("elector/CandidatoP", { layout: false });

};


exports.getcandidatoS = (req, res, next) => {

    res.status(200).render("elector/candidatoS", { layout: false });

};