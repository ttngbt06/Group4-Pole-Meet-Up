const router = require('express').Router();
const socket = require("socket.io");

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/socket.io', socket);

module.exports = router;