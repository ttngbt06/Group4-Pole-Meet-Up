const Categories = require("./categories");
const Options = require("./options");
const Polls = require("./polls");
const PollCategories = require("./polls-categories");
const Users = require("./users");
const Votes = require("./votes");

// Votes belongTo Users
Votes.belongsTo(Users, {
  foreignKey: "user_id",
});

// Users hasMany Votes
Users.hasMany(Votes, {
  onDelete: "SET NULL"
});

// Votes belongTo Options
Votes.belongsTo(Options, {
  foreignKey: "option_id",
});

// Options hasMany Votes
Options.hasMany(Votes, {
  onDelete: "SET NULL"
});

// Options belongTo Polls
Options.belongTo(Polls, {
  foreignKey: "poll_id",
});

// Polls hasMany Options
Polls.hasMany(Options, {
  onDelete: "SET NULL"
});

// Polls belongTo Users
Polls.belongsTo(Users, {
  foreignKey: "user_id"
});

// Users hasMany Polls
Users.hasMany(Polls, {
  onDelete: "SET NULL"
});

// Polls hasMany Categories through PollCategories
Polls.hasMany(Categories, {
  through: PollCategories,
  foreignKey: "poll_id"
});

// Categories hasMany Polls through PollCategories
Categories.hasMany(Polls, {
  through: PollCategories,
  foreignKey: "category_id"
});
