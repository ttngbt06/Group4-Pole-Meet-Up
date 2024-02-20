const router = require('express').Router();
const { Categories, Options, PollCategories, Polls, Users, Votes } = require('../models');
//Import the custom middleware
const withAuth = require('../utils/auth');

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});


// This must be last so other APIs are found first
router.get('/', async (req, res) => {
  //console.log('test');
  try {
    res.render('homepage', {
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    console.log('error!');
    res.status(500).json(err);
  }
});

module.exports = router;