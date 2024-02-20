const router = require('express').Router();
const { Categories } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        const categoriesData = await Categories.findAll();
        res.status(200).json(categoriesData)
    } catch (error) {
        res.status(500).json(error)
    }
});

module.exports = router;