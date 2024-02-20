const router = require('express').Router();
const optionsRoutes = require('./optionsRoutes');
const categoriesRoutes = require('./categoriesRoutes');
const pollCategoriesRoutes = require('./pollCategoriesRoutes');
const pollRoutes = require('./pollsRoutes');
const userRoutes = require('./usersRoutes');
const votesRoutes = require('./votesRoutes');


router.use('/options', optionsRoutes);
router.use('/categories', categoriesRoutes);
router.use('/pollCategories', pollCategoriesRoutes);
router.use('/poll', pollRoutes);
router.use('/user', userRoutes);
router.use('/votes', votesRoutes);

module.exports = router;
