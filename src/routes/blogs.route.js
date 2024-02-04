module.exports = app => {
    const blogs = require("../controllers/blogs.controller.js");

    var router = require("express").Router();

    // create a new blog
    router.post("/", blogs.create);

    // retrieve all blogs
    router.get("/", blogs.findAll);

    app.use("/api/blogs", router);
}