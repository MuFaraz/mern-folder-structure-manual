exports.index = (req, res) => {
    res.render("login");
};

exports.add = (req, res) => {
    res.render("add");
};
exports.edit = (req, res) => {
    res.render("edit");
};
exports.view = (req, res) => {
    res.render("view");
};
