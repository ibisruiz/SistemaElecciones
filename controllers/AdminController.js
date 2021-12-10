

exports.GetAdminHome = (req, res, next) => {
    
    res.status(200).render("admin/admin-home", {layout:false});
};

exports.GetAdminMenu = (req, res, next) => {

    res.status(200).render("admin/adminMenu", {layout:false})
};

