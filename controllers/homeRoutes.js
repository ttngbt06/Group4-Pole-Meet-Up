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
const { Sequelize} = require("sequelize");
const Op = Sequelize.Op //https://sequelize.org/v5/manual/querying.html

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

router.get("/polls", async (req, res) => {
  console.log(new Date());
  if (req.session.logged_in) {
    const pollData = await Polls.findAll({
      where: { expiration_date : { [Op.gt]:  new Date() } },
      include: [
        {
          model: Users,
        },
      ],
    });
    //console.log(pollData);
    // Serialize data so the template can read it
    const polls = pollData.map((poll) => poll.get());
        res.render("polls", {
        polls: polls,
        logged_in: req.session.logged_in,
      });
      console.log(polls);
      return;
  }
  res.render("login");
});

router.get("/pollhistory", async (req, res) => {
  if (req.session.logged_in) {
    const pollData = await Polls.findAll({
      where: { expiration_date : { [Op.lte]:  new Date() } },
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
      console.log(polls);
      return;
  }
  res.render("login");
});

// This must be last so other APIs are found first
router.get("/", (req, res) => {
  res.render("homepage", {
    logged_in: req.session.logged_in,
  });
});

module.exports = router;
