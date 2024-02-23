const sequelize = require("../config/connection");
const { Model, DataTypes } = require("sequelize");

class Polls extends Model {}

Polls.init(
  // Define files/columns on model
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
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    expiration_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    hooks: {
      // Add 24 hours to the expiration date
      beforeCreate: async (newPollsData) => {
        let expDate = new Date(newPollsData.expiration_date);
        newPollsData.expiration_date = expDate.setHours(
          expDate.getHours() + 24
        );
        return newPollsData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "polls",
  }
);

module.exports = Polls;
