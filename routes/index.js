const router = require('express').Router();
const apiRoutes = require('./api');

// use link /api
router.use('/api', apiRoutes);

module.exports = router;