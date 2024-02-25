const router = require("express").Router();
const { Polls, Options, PollCategories } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/user/:id", withAuth, async (req, res) => {
  console.log("get polls by user id");
  try {
    const pollsData = await Polls.findAll({ 
      where: {user_id: req.params.id},
      include: [{ all: true, nested: true }],
    });

    res.status(200).json(pollsData);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/:id", withAuth, async (req, res) => {
  console.log("get poll by id");
  try {
    const pollsData = await Polls.findByPk(req.params.id, {
      // Include all associated models
      // https://stackoverflow.com/questions/46614290/sequelize-eager-loading-error
      include: [{ all: true, nested: true }],
    });

    const polls = pollsData.get({ plain: true });
    res.status(200).json(pollsData);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/", withAuth, async (req, res) => {
  console.log('pollsRoutes post "/"');
  //console.log(req.body);
  try {
    const newPollsData = await Polls.create({
      user_id: req.session.user_id,
      title: req.body.title,
      description: req.body.description,
    });
    res.status(200).json(newPollsData);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  try {
    console.log("polls update - " + req.params.id);
    const updatedPoll = await Polls.update(req.body, 
      {
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      }
    );

    res.status(200).json(updatedPoll);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const pollsData = await Polls.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    res.status(200).json(pollsData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
