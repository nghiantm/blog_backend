module.exports = app => {
    const portfolio = require("../controllers/portfolio.controller.js");

    var router = require("express").Router();

    // retrieve all blogs
    router.get("/", portfolio.findAll);

    app.use("/api/portfolio", router);
}