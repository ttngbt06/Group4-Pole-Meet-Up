const router = require('express').Router();
const { Option, Category } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const optionData = await Option.findAll({
            include: [{model: Category}]
        });
        res.status(200).json(optionData)
    } catch (error) {
        res.status(500).json(error)
    }
});

router.post('/', async (req, res) => {});

module.exports = router;