const bcrypt = require("bcypt");
const sequelize = require("../config/connection");
const { Model, DataTypes } = require("sequelize");

class Polls extends Model {
  // checkPassword(loginPw) {
  //   return bcrypt.compareSync(loginPw, this.password);
  // }
}

Polls.init(
  // Define files/columns on model
  {
    id: {

    },
    user_id: {

    },
    title: {

    },
    description: {

    },
    date_created: {

    },
    expiration_date: {

    },
  }
);

module.exports = Polls;
