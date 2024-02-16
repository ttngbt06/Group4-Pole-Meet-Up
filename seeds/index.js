const seedCategories = require('./categories-seeds');
const seedOptions = require('./option-seeds');
const seedPollCategories = require('./poll-categories-seeds');
const seedPolls = require('./polls-seeds');
const seedVotes = require('./votes-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedOptions();
  console.log('\n----- OPTIONS SEEDED -----\n');

  await seedPollCategories();
  console.log('\n----- POLL CATEGORIES SEEDED -----\n');

  await seedPolls();
  console.log('\n----- POLLS SEEDED -----\n');

  await seedVotes();
  console.log('\n----- VOTES SEEDED -----\n');

  process.exit(0);
};

seedAll();