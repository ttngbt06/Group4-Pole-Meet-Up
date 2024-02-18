const router = require('express').Router();
const { Options, Categories } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const optionsData = await Options.findAll({
            include: [{model: Categories}]
        });
        res.status(200).json(optionsData)
    } catch (error) {
        res.status(500).json(error)
    }
});

router.post('/', async (req, res) => {});

module.exports = router;