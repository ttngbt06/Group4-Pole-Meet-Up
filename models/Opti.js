const sequelize = require("../config/connection");
const { Model, DataTypes } = require("sequelize");

class Options extends Model {}

Options.init(
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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "options",
  }
);

module.exports = Options;
