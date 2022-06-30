const router = require('express').Router();
const userRoutes = require('./userRoutes');
const jobRoutes = require('./job-routes');
const applicantRoutes = require('./applicant-routes');

router.use('/users', userRoutes);
router.use('/jobs', jobRoutes);
router.use('./applicant', applicantRoutes);

module.exports = router;