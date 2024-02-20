const router = require("express").Router();
const { Options, Poll } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/:id", withAuth, async (req, res) => {
  try {
    const optionsData = await Options.findAll({
      where: { poll_id: req.params.id },
    });
    res.status(200).json(optionsData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", withAuth, async (req, res) => {
  try {
    const newOptionsData = await Options.create({
      poll_id: req.body.poll_id,
      name: req.body.name,
    });
    res.status(200).json(newOptionsData);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put("/:id", withAuth, async (req, res) => {
    try {
      console.log("polls update - " + req.params.id);
      const updatedPoll = await Options.update(req.body, 
        {
          where: {
            id: req.params.id
          },
        }
      );
  
      res.status(200).json(updatedPoll);
    } catch (error) {
      res.status(400).json(error);
    }
  });

module.exports = router;
