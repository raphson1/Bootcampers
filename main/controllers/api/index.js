const router = require('express').Router();
const jobRoutes = require('./job-routes');

router.use('/jobs', jobRoutes);

module.exports = router;
