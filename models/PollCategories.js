const sequelize = require("../config/connection");
const { Model, DataTypes } = require("sequelize");

class PollCategories extends Model {}

PollCategories.init(
  // Define files/columns on model
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,      
    },
    poll_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "polls",
        key: "id",
      },      
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "categories",
        key: "id",
      },      
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "pollcategories",
  }
);

module.exports = PollCategories;
