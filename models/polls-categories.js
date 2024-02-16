//const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");
const { Model, DataTypes } = require("sequelize");

class PollsCategories extends Model {
  // checkPassword(loginPw) {
  //   return bcrypt.compareSync(loginPw, this.password);
  // }
}

PollsCategories.init(
  // Define files/columns on model
  {
    id: {

    },
    poll_id: {

    },
    category_id: {

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

module.exports = PollsCategories;
