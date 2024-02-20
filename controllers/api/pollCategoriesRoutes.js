// const router = require('express').Router();
// const { PollCategories, Polls, Categories } = require('../../models');

// router.get('/', async (req, res) => {
//     try {
//         const pollCategoriesData = await PollCategories.findAll({
//             include: [{model: Polls }, {model: Categories}],
//         });
//         res.status(200).json(pollCategoriesData);
//     } catch (error) {
//         res.status(500).json(error)
//     }
// });

// module.exports = router;