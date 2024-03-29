const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Blog = sequelize.define("blog", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false
        },
        featuredImage: {
            type: DataTypes.STRING,
            allowNull: false
        },
        favorited: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    });
  
    return Blog;
};