const dbConfig = require('../config/db.config.js');

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    /* FOR DEV
    dialectOptions: {
        ssl: true
    }, */
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.blogs = require("./blogs.model.js")(sequelize, Sequelize);
db.portfolio = require("./portfolio.model.js")(sequelize, Sequelize);

module.exports = db;