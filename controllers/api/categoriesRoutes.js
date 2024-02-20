const router = require('express').Router();
const { Categories } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/:id', withAuth, async (req, res) => {
    console.log('get categories by id');
    try {
        const categoriesData = await Categories.findAll(req.params.id, {
            
        });

        const categories = categoriesData.get({ plain: true });

        res.status(200).json(categoriesData)
    } catch (error) {
        res.status(500).json(error)
    }
});

module.exports = router;