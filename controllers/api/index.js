const router = require('express').Router();
const optionsRoutes = require('./optionsRoutes');
const categoriesRoutes = require('./categoriesRoutes');
const pollCategoriesRoutes = require('./pollCategoriesRoutes');
const pollsRoutes = require('./pollsRoutes');
const usersRoutes = require('./usersRoutes');
const votesRoutes = require('./votesRoutes');


router.use('/options', optionsRoutes);
// router.use('/categories', categoriesRoutes);
router.use('/pollCategories', pollCategoriesRoutes);
router.use('/polls', pollsRoutes);
router.use('/users', usersRoutes);
router.use('/votes', votesRoutes);

module.exports = router;
