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

  await Users.bulkCreate(seedUsers, {individualHooks: true, returning: true}); // Add hooks to allow them to execute on create
  console.log('\n----- USERS SEEDED -----\n');

  await Categories.bulkCreate(seedCategories);
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await Polls.bulkCreate(seedPolls, {individualHooks: true}); // Add hooks to allow them to execute on create
  console.log('\n----- POLLS SEEDED -----\n');

  await PollCategories.bulkCreate(seedPollCategories);
  console.log('\n----- POLL CATEGORIES SEEDED -----\n');

  await Options.bulkCreate(seedOptions);
  console.log('\n----- OPTIONS SEEDED -----\n');

  await Votes.bulkCreate(seedVotes);
  console.log('\n----- VOTES SEEDED -----\n');

  process.exit(0);
};

seedAll();