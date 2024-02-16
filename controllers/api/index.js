const router = require('express').Router();
const categoriesRoutes = require('./categoriesRoutes');
const optionsRoutes = require('./optionsRoutes');
const pollCategoriesRoutes = require('./poll-categoriesRoutes');
const pollsRoutes = require('./pollRoutes');
const usersRoutes = require('./usersRoutes');
const votesRoutes = require('./votesRoutes');

router.use('/categories', categoriesRoutes);
router.use('/options', optionsRoutes);
router.use('/poll-categories', pollCategoriesRoutes);
router.use('/polls', pollsRoutes);
router.use('/users', usersRoutes);
router.use('/votes', votesRoutes);

module.exports = router;