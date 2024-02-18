const router = require('express').Router();
const { Polls, Options, PollCategories } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const pollsData = await Polls.findAll({
            include: [{model: Options}, {model: PollCategories}]
        });
        res.status(200).json(pollsData)
    } catch (error) {
        res.status(500).json(error)
    }
});

router.post('/', async (req, res) => {
    try {
        const pollsData = await Polls.create({
            poll_name: req.body.poll_name,
        });
        res.status(200).json(pollsData)
    } catch (error) {
        res.status(400).json(error);
    }
});

router.delete('/:id', async (req, res) => {
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