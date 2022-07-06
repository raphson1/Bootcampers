const router = require('express').Router();
const { User, Applicant, Jobs, Roles } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    // Pass serialized data into Handlebars.js template
    res.render('homepage');
  }
);

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Jobs }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// DASHBOARD ROUTES

// find all jobs button route
router.get('/allJobs/', withAuth, async (req, res) => {
  try {
    // Get all users, sorted by name
    const userData = await Jobs.findAll({
      attributes: { exclude: ['password'] },
      order: [['job_title', 'ASC']],
      include: [{ model: User, attributes:['name', 'last_name','email']}],
      // , { model: Roles, attributes:['id', 'role_name']} ],
    });
  
    // Serialize user data so templates can read it
    const jobs = userData.map((jobs) => jobs.get({ plain: true }));
  
    // Pass serialized data into Handlebars.js template
    res.render('jobs', { jobs, logged_in: req.session.logged_in, });
  } catch (err) {
    res.status(500).json(err);
  }
 });

 //create jobs form route
 router.get('/createJobs/', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Jobs }],
    });

    const user = userData.get({ plain: true });

    res.render('create-jobs', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
 });
 
 // find all jobs button route
router.get('/allApplicants/', withAuth, async (req, res) => {
  try {
    // Get all users, sorted by name
    const userData = await Applicant.findAll({
      attributes: { exclude: ['password'] },
      // include: [{ model: User, attributes:['name','last_name','email'], order: [['name', 'ASC']],}],
    });
  
    // Serialize user data so templates can read it
    const applicants = userData.map((applicant) => applicant.get({ plain: true }));
  
    // Pass serialized data into Handlebars.js template
    res.render('all-applicants', { applicants, logged_in: req.session.logged_in, });
  } catch (err) {
    res.status(500).json(err);
  }
 });

 router.get('/graduates', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  // if (!req.session.logged_in) {

  //   if(req.session.user_role === "company"){
  //     res.redirect('/profile')
  //   } else{
  //     res.redirect('/profile');
  //   }
   
  //   return;
  // }

  res.render('graduates');
});

router.get('/openPosition/', async (req, res) => {
  try {
    // Get all users, sorted by name
    const userData = await Jobs.findAll({
      attributes: { exclude: ['password'] },
      order: [['job_title', 'ASC']],
      include: [{ model: User, attributes:['name', 'last_name', 'user_role','email']}],
      // , { model: Roles, attributes:['id', 'role_name']} ],
    });
  
    // Serialize user data so templates can read it
    const jobs = userData.map((jobs) => jobs.get({ plain: true }));
  
    // Pass serialized data into Handlebars.js template
    res.render('jobs', { jobs });
  } catch (err) {
    res.status(500).json(err);
  }
 });

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    if(req.session.user_role === "freelance"){
      res.redirect('/profile')
    } else{
      res.redirect('/profile');
    }
   
    return;
  }

  res.render('login');
});

module.exports = router;

