const sequelize = require("../config/connection");
const { Model, DataTypes } = require("sequelize");

class Votes extends Model {}

Votes.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
    option_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "options",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "votes",
  }
);

module.exports = Votes;
