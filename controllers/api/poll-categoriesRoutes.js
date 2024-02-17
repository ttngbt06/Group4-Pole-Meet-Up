const router = require('express').Router();
const { PollCategory, Poll, Category } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const pollCategoryData = await PollCategory.findAll({
            include: [{model: Poll }, {model: Category}],
        });
        res.status(200).json(pollCategoryData);
    } catch (error) {
        res.status(500).json(error)
    }
});

module.exports = router;