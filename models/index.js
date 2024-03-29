const Categories = require("./Categories");
const Users = require("./Users");
const PollCategories = require("./PollCategories");
const Polls = require("./Polls");
const Options = require("./Options");
const Votes = require("./Votes");

// Polls belongsToMany Categories through PollCategories
Polls.belongsToMany(Categories, {
  through: PollCategories,
  foreignKey: "poll_id"
});

// Categories belongsToMany Polls through PollCategories
Categories.belongsToMany(Polls, {
  through: PollCategories,
  foreignKey: "category_id"
});

// Votes belongsTo Users
Votes.belongsTo(Users, {
  foreignKey: "user_id",
});

// Users hasMany Votes
Users.hasMany(Votes, {
  onDelete: "SET NULL"
});

// Votes belongsTo Options
Votes.belongsTo(Options, {
  foreignKey: "option_id",
});

// Options hasMany Votes
Options.hasMany(Votes, {
  onDelete: "SET NULL"
});

// Options belongsTo Polls
Options.belongsTo(Polls, {
  foreignKey: "poll_id",
});

// Polls hasMany Options
Polls.hasMany(Options, {
  onDelete: "SET NULL"
});

// Polls belongsTo Users
Polls.belongsTo(Users, {
  foreignKey: "user_id"
});

// Users hasMany Polls
Users.hasMany(Polls, {
  onDelete: "SET NULL"
});

module.exports = { Categories, Users, PollCategories, Polls, Options, Votes };