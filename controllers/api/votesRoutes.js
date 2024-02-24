const router = require("express").Router();
const { Votes, Polls, Options } = require("../../models");
const withAuth = require("../../utils/auth");

// Get votes for this poll by user
// Used to determine if they have already voted
router.get("/byuser/:id", withAuth, async (req, res) => {
    try {
      const votesData = await Votes.findAll({
        where: { user_id: req.session.user_id },
        include: [
          {
            model: Options,
            where: {
              poll_id: req.params.id
            },
          },
        ],
      });
      res.status(200).json(votesData);
    } catch (error) {
      res.status(500).json(error);
    }
  });
    
// Get votes by Poll ID
router.get("/:id", withAuth, async (req, res) => {
  try {
    const votesData = await Votes.findAll({
      include: [
        {
          model: Options,
          where: { poll_id: req.params.id },
        },
      ],
    });
    res.status(200).json(votesData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Save a vote
router.post("/", withAuth, async (req, res) => {
  try {
    const votesData = await Votes.create({
      option_id: req.body.option_id,
      user_id: req.session.user_id,
    });
    res.status(200).json(votesData);
  } catch (error) {
    res.status(400).json(error);
  }
});

// We should not need to delete votes, but in case we want to add it

// router.delete('/:id', async (req, res) => {
//     try {
//         const votesData = await Vote.destroy({
//             where: {
//                 id: req.params.id,
//             },
//         });
//         res.status(200).json(votesData);
//     } catch (error) {
//         res.status(500).json(error);
//     }
// });

module.exports = router;
