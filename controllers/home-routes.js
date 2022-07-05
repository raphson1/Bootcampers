const router = require("express").Router();
const { User, Applicant } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  // Pass serialized data into Handlebars.js template
  res.render("homepage");
});
router.get("/applicants", withAuth, async (req, res) => {
  const applicantData = await Applicant.findAll();
  const applicants = applicantData.get({ plain: true });
  return res.send("hi");
});

// Use withAuth middleware to prevent access to route
router.get("/profile", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Applicant }],
    });

    const user = userData.get({ plain: true });

    res.render("profile", {
      // similar thing need to be created as in line 12 like "fetched applicants page" and replaced with "res.random"
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

module.exports = router;
