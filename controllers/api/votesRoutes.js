const router = require('express').Router();
const { Votes, Polls, Options } = require('../../models');
const withAuth = require("../../utils/auth");


// We are already "getting" this information from get poll by id
    // I do not believe we are going to need this "get"

// router.get('/:id', withAuth, async (req, res) => {
//     try {
//         const votesData = await Votes.findAll({
//             where: { poll_id: req.params.id },
//             include: [{ all: true, nested: true }],
//         });
//         res.status(200).json(votesData)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// });

router.post('/', withAuth,  async (req, res) => {
    try {
        const votesData = await Votes.create({
            option_id: req.body.option_id,
            user_id: req.body.user_id,
        });
        res.status(200).json(votesData)
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