const sequelize = require("../config/connection");
const { Model, DataTypes } = require("sequelize");

class Categories extends Model {}
//adsfadsfadsfadf
Categories.init(
  // Define fields/columns on model
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "categories",
  }
);

module.exports = Categories;
