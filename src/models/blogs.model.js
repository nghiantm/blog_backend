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
        /*
        Sequelize auto manage createdAt and updatedAt

        creation_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        last_modified_date: {
            type: DataTypes.DATE,
            allowNull: false
        }, 
        */
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