const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Portfolio = sequelize.define("portfolio", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        tags: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        }
    });
  
    return Portfolio;
};