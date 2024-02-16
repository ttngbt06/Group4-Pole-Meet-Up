const router = require('express').Router();
const { Category } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        categoryData = await Category.findAll();
        res.status(200).json(categoryData)
    } catch (error) {
        res.status(500).json(error)
    }
});

module.exports = router;