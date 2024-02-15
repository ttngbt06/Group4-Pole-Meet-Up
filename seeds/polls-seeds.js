const { Polls } = require('../models');

const pollsData = [
  {

  },
  {

  },
  {

  },
  {

  },
];

const seedPolls = () => Polls.bulkCreate(pollsData);

module.exports = seedPolls;