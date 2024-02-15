//const bcrypt = require("bcrypt");
const sequelize = require("./config/connection");
const { Model, DataTypes } = require("sequelize");

class Votes extends Model {
  // checkPassword(loginPw) {
  //   return bcrypt.compareSync(loginPw, this.password);
  // }
}

Votes.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {

  },
  option_id: {

  },
});

module.exports = Votes;
