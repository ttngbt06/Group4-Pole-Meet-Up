//const bcrypt = require("bcrypt");
const sequelize = require("./config/connection");
const { Model, DataTypes } = require("sequelize");

class Options extends Model {
  // checkPassword(loginPw) {
  //   return bcrypt.compareSync(loginPw, this.password);
}

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

    },
    name: {

    },
    date_created: {

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
