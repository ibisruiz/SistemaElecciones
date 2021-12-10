

exports.GetAdminHome = (req, res, next) => {    
    res.status(200).render("admin/admin-home", {layout:false});
};

exports.GetAdminMenu = (req, res, next) => {
    res.status(200).render("admin/adminMenu", {layout:false})
};

exports.GetMantPuestosElectivos = (req, res, next) => {
    res.status(200).render("admin/Puestos-Electivos", {layout:false})
};

exports.GetMantPartidos = (req, res, next) => {
    res.status(200).render("admin/Partidos", {layout:false})
};

exports.GetMantCandidatos = (req, res, next) => {
    res.status(200).render("admin/Candidatos", {layout:false})
};

exports.GetMantCiudadanos = (req, res, next) => {
    res.status(200).render("admin/Ciudadanos", {layout:false})
};

exports.GetMantElecciones = (req, res, next) => {
    res.status(200).render("admin/Elecciones", {layout:false})
};

//VISTAS MODIFICACION PUESTO ELECTIVOS

exports.GetModiPuestosElectivos = (req, res, next) => {
    res.status(200).render("admin/Puestos-Electivos-Modificacion", {layout:false})
};

exports.PostModiPuestosElectivos = (req, res, next) => {
    const name = req.body.Name;
    const description = req.body.Description;

    console.log(name);
    console.log(description);

    res.redirect("/puestos-electivos-mantenimiento");

};
