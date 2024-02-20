const router = require('express').Router();
const { Votes, Users, Options } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const votesData = await Vote.findAll({
            indlue: [{model: User}, {model: Option}]
        });
        res.status(200).json(votesData)
    } catch (error) {
        res.status(500).json(error)
    }
});

router.post('/', async (req, res) => {
    try {
        const votesData = await Vote.create({
            vote_name: req.body.option_name,
        });
        res.status(200).json(votesData)
    } catch (error) {
        res.status(400).json(error);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const votesData = await Vote.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(votesData);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;