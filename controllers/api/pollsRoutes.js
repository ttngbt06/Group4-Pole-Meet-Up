const router = require('express').Router();
const { Poll, Option, PollCategory } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const pollData = await Poll.findAll({
            include: [{model: Option}, {model: PollCategory}]
        });
        res.status(200).json(pollData)
    } catch (error) {
        res.status(500).json(error)
    }
});

router.post('/', async (req, res) => {
    try {
        const pollData = await Poll.create({
            poll_name: req.body.poll_name,
        });
        res.status(200).json(pollData)
    } catch (error) {
        res.status(400).json(error);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const pollData = await Poll.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(pollData);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;