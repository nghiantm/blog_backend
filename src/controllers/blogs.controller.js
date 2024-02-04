const db = require("../models");
const Blogs = db.blogs;
const Op = db.Sequelize.Op;

// create and save a blog
exports.create = (req, res) => {
    // validate request
    if (!req.body.content) {
        res.status(400).send({
            message: "Content can't be empty."
        });
        return;
    }

    // create a blog
    const blog = {
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
        slug: req.body.slug,
        featuredImage: req.body.featuredImage,
        favorited: req.body.favorited
    };

    // save blog in db
    Blogs.create(blog)
        .then(data => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the blog."
            });
        });
};

exports.findAll = (req, res) => {
    const slug = req.query.slug;
    var condition = slug ? { slug: { [Op.iLike]: `%${slug}%` } } : null;

    Blogs.findAll({ where: condition })
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

exports.update = (req, res) => {

};

exports.delete = (req, res) => {

};

exports.findAllPublished = (req, res) => {

};