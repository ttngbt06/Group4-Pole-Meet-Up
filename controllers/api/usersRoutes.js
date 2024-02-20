const router = require("express").Router();
const { Users } = require("../../models");

router.post("/", async (req, res) => {
  try {
    //console.log('test - userRoutes router.post');
    //console.log(req.body);
    const usersData = await Users.create({
      username: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    //console.log(userData);
    req.session.save(() => {
      req.session.user_id = usersData.id;
      req.session.logged_in = true;

      res.status(200).json(usersData);
    });
  } catch (err) {
    console.log('error!');
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    //console.log('test - userRoutes router.post /login');
    const usersData = await Users.findOne({ where: { email: req.body.email } });
    //console.log(userData);
    if (!usersData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await usersData.checkPassword(req.body.password);
    //console.log("validPassword? " + validPassword)
    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = usersData.id;
      req.session.logged_in = true;

      res.json({ user: usersData, message: 'You are now logged in!' });
    });

  } catch (error) {
    console.log("error!");
    res.status(400).json(error);
  }
});

router.post('/logout', (req,res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end()
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
