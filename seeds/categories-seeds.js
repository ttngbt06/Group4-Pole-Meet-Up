const { Categories } = require('../models');

const categoriesData = [
  {

  },
  {

  },
  {

  },
  {

  },
];

const seedCategories = () => Categories.bulkCreate(categoriesData);

module.exports = seedCategories;