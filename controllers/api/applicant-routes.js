const router = require('express').Router();

const { Applicant } = require('../../models');

// find all jobs
router.get('/', async (req, res) => {
    try {
        const applicantionData = await Applicant.findAll({});

    console.log("Checking to see if this work", applicantionData);
     res.status(200).json(applicantionData);
    } catch(err) {
      res.status(500).json(err);
    }
    });

// post new application
router.post('/', async (req, res) => {
    try {
      const newApplication = await Applicant.create({...req.body
        // ONCE AUTHENTICATION IS HERE, user_id: req.session.user_id,
      });
      console.log("Checking to see if this work", newApplication);
      res.status(200).json(newApplication);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  //delete an app
// router.delete('/:id', async (req, res) => {
//   try {
//     const applicantionData = await Jobs.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!applicantionData) {
//       res.status(404).json({ message: 'No project found with this id!' });
//       return;
//     }

//     res.status(200).json(applicantionData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
