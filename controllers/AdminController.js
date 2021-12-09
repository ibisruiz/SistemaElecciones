

exports.GetAdminHome = (req, res, next) => {

    res.status(200).render("admin/admin-home",{layout:false});
};

exports.PostAdminHome = (req, res, next) => {

    res.status(302).redirect("admin/admin-home")
};