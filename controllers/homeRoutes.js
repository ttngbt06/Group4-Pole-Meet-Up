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

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

// This must be last so other APIs are found first
router.get("/", async (req, res) => {
  // Get all polls and JOIN with user data
  const pollData = await Polls.findAll({
    include: [
      {
        model: Users,
      },
    ],
  });
  // Serialize data so the template can read it
  const polls = pollData.map((poll) => poll.get({plain:true}));
      res.render("homepage", {
      polls,
      logged_in: req.session.logged_in,
    });

});
router.get("/option", async (req, res) => {
  // Get all options, JOIN polls, and include poll user
  const optionsData = await Options.findAll({
    include: [
      {
        model: Polls,
        include: [{model: Users, attributes: ["name"]}]
      },
    ],
  });
  // Serialize data so the template can read it
  const options = optionsData.map((poll) => poll.get({plain:true}));
      console.log(options)
      res.render("browse", {
      options,
      logged_in: req.session.logged_in,
    });

});

router.get("/poll/:id", async (req, res) => {
  // Get all options, JOIN polls, and include poll user
  const pollData = await Polls.findByPk(req.params.id, {
        include: [{model: Users, attributes: ["name"]}]
  });
  // Serialize data so the template can read it
  const poll = pollData.get({plain:true})
      res.render("poll", {
      poll,
      logged_in: req.session.logged_in,
    });

});

// router.get("/user", async (req, res) => {
//   // Get all users who are contacts
//   const usersData = await Users.findAll({
//     include: [{model: Users, attributes: []}]
//   })
// })

  //console.log('test');

  // Go get all polls to be displayed on the homepage if would like
//   try {
//     res.render("homepage", {
//       polls: polls,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     console.log("error!");
//     res.status(500).json(err);
//   }
// });

module.exports = router;
