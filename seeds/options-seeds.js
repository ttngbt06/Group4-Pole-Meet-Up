const { Options } = require('../models');

const optionsData = [
  {

  },
  {

  },
  {

  },
  {

  },
];

const seedOptions = () => Options.bulkCreate(optionsData);

module.exports = seedOptions;