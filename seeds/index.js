const sequelize = require('../config/connection');

const { Categories, Options, PollCategories, Polls, Users, Votes } = require('../models');

const seedCategories = require('./categoriesData');
const seedOptions = require('./optionData');
const seedPollCategories = require('./pollCategoriesData');
const seedPolls = require('./pollsData');
const seedVotes = require('./votesData');
const seedUsers = require('./usersData');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await Users.create(seedUsers);
  console.log('\n----- USERS SEEDED -----\n');

  await Categories.create(seedCategories);
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await Polls.create(seedPolls);
  console.log('\n----- POLLS SEEDED -----\n');

  await PollCategories.create(seedPollCategories);
  console.log('\n----- POLL CATEGORIES SEEDED -----\n');

  await Options.create(seedOptions);
  console.log('\n----- OPTIONS SEEDED -----\n');

  await Votes.create(seedVotes);
  console.log('\n----- VOTES SEEDED -----\n');

  process.exit(0);
};

seedAll();