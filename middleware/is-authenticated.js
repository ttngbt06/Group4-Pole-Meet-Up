// If the user is not logged redirect to log in OR if they are logged in got to the next step.
// (1:20 3rd day)
function isAuthenticatedUser(req, res, next) {
  return !req.session.loggedIn ? res.redirect("/login") : next();
}

module.exports = {
  isAuthenticatedUser
};