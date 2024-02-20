const router = require("express").Router();
const { Polls, Options, PollCategories } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/:id", withAuth, async (req, res) => {
  console.log("get blog by id");
  try {
    const pollsData = await Polls.findAll(req.params.id, {
      include: [{ model: Options }, { model: PollCategories }],
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
      user_id: req.body.user_id,
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
    const updatedPolls = await Polls.update(
      {
        user_id: req.body.user_id,
        title: req.body.post,
        description: req.body.description,
      },
      {
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      }
    );

    res.status(200).json(updatedPolls);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const pollsData = await Polls.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(pollsData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
