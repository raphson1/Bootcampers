const { Jobs } = require('../models');

const jobsData = [
    {
        job_title: 'Front End Developer',
        company_name: 'Apple',
        // dev_role_id: 1,
        user_id: 1
    },
    {
        job_title: 'Back-End Developer',
        company_name: 'Google',
        // dev_role_id: 2,
        user_id: 2
    }
];

const roleJobs = () =>  Jobs.bulkCreate(jobsData);

module.exports = roleJobs;