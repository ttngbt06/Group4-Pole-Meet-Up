const { PollCategories } = require('../models');

const pollCategoriesData = [
  {

  },
  {

  },
  {

  },
  {

  },
];

const seedPollCategories = () => PollCategories.bulkCreate(pollCategoriesData);

module.exports = seedPollCategories;