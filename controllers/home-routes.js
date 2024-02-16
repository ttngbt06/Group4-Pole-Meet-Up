const router = require('express').Router();

//Import the custom middleware
const withAuth = require('../Ulits/auth');

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;