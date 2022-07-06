const router = require('express').Router();
const { Jobs, Roles, User } = require('../../models');
const withAuth = require('../../utils/auth')


// find all jobs
router.get('/', async (req, res) => {
    try {
        const jobData = await Jobs.findAll({});

    //  const jobData = await Jobs.findAll({
    // include: [
    //     {model: Roles}, {model: User},
    //   ],
    //  });
    // console.log("Checking to see if this work", jobData);
     res.status(200).json(jobData);
    } catch(err) {
      res.status(500).json(err);
    }
    });



// post new job
router.post('/',withAuth, async (req, res) => {
  const body = req.body;
  console.log(body)
  try {
    const newJob = await Jobs.create({
      ...body,
      user_id: req.session.user_id
    });
    console.log("Here is a New job", newJob);
    res.status(200).json(newJob);
  } catch (err) {
    console.log("it failed,", err)
    res.status(400).json(err);
  }
});

//delete a job
// router.delete('/:id', async (req, res) => {
//   try {
//     const jobData = await Jobs.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!jobData) {
//       res.status(404).json({ message: 'No project found with this id!' });
//       return;
//     }

//     res.status(200).json(jobData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
