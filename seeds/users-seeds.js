const { Users } = require('../models');

const usersData = [
  {

  },
  {

  },
  {

  },
  {

  },
];

const seedUsers = () => Users.bulkCreate(usersData);

module.exports = seedUsers;