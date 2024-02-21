const db = require("../models");
const Portfolio = db.portfolio;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    //const slug = req.query.slug;
    //var condition = slug ? { slug: { [Op.iLike]: `%${slug}%` } } : null;

    Portfolio.findAll({})
        .then(data => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving blogs."
            })
        })
};