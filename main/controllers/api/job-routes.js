const router = require('express').Router();
const { Jobs, Roles, User } = require('../../models');


// find all jobs
router.get('/', async (req, res) => {
    try {
        const jobData = await Jobs.findAll();

    //  const jobData = await Jobs.findAll({
    // include: [
    //     {model: Roles}, {model: User},
    //   ],
    //  });
    
     res.status(200).json(jobData);
     console.log("Checking to see if this work", jobData);
    } catch(err) {
      res.status(500).json(err);
    }
    });



// post new job
// router.post('/', async (req, res) => {
//   try {
//     const newJob = await Jobs.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(newJob);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

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
