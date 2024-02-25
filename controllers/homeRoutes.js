const router = require("express").Router();
const {
  Categories,
  Options,
  PollCategories,
  Polls,
  Users,
  Votes,
} = require("../models");
//Import the custom middleware
const withAuth = require("../utils/auth");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op; //https://sequelize.org/v5/manual/querying.html

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("signup");
});

//Routes for additional pages when user is logged in:
router.get("/createpoll", withAuth, (req, res) => {
  res.render("createpoll", {
    logged_in: req.session.logged_in,
  });
});

router.get("/browse", withAuth, async (req, res) => {
  const pollData = await Polls.findAll({
    // Expiration date is greater than now (not expired)
    // Sort by expiration date
    where: { expiration_date: { [Op.gt]: new Date() } },
    order: Sequelize.literal('expiration_date ASC'),
    include: [
      {
        model: Users,
      },
    ],
  });
  const polls = pollData.map((poll) => poll.get());
  res.render("browse", {
    polls: polls,
    logged_in: req.session.logged_in,
  });
});

// Get a poll by ID
// Render it in the poll handlebars
router.get('/poll/:id', async (req, res) => {
  console.log('get poll by id');
  try {
    const pollData = await Polls.findByPk(req.params.id, {
      include: [{ all: true, nested: true }],
    });
    const poll = pollData.get({ plain: true });
    res.render('poll', {
      poll: poll,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/contactlist", withAuth, async (req, res) => {
  const userData = await Users.findAll({
    // Sort by user name
    // https://stackoverflow.com/questions/36259532/sequelize-findall-sort-order-in-nodejs
    order: Sequelize.literal('name ASC')
  });
  const users = userData.map((user) => user.get());

  res.render("contactlist", {
    users: users,
    logged_in: req.session.logged_in,
  });
});

router.get("/pollhistory", async (req, res) => {
  if (req.session.logged_in) {
    const pollData = await Polls.findAll({
      // Expiration date is less than now (expired)
      // Sort by expiration date
      where: { expiration_date: { [Op.lte]: new Date() } },
      order: Sequelize.literal('expiration_date ASC'),
      include: [
        {
          model: Users,
        },
      ],
    });
    //console.log(pollData);
    // Serialize data so the template can read it
    const polls = pollData.map((poll) => poll.get());
    res.render("pollhistory", {
      polls: polls,
      logged_in: req.session.logged_in,
    });
    //console.log(polls);
    return;
  }
  res.render("login");
});

// This must be last so other APIs are found first
router.get("/", async (req, res) => {
  const categoriesData = await Categories.findAll();
  // Serialize data so the template can read it
  const categories = categoriesData.map((category) => category.get());
  //console.log(categories);
  res.render("homepage", {
    categories: categories,
    logged_in: req.session.logged_in,
  });
});

module.exports = router;
