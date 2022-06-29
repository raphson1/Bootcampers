const { Jobs } = require('../models');
const jobsData = [
    {
        job_title: 'Front-End Develloper',
        company_name: 'apple',
        // role_id: 1,
        // user_id: 3
    },
    {
        job_title: 'Back-End Develloper',
        company_name: 'Google',
        // role_id: 2,
        // user_id: 4
    }
];

const roleJobs = () =>  Jobs.bulkCreate(jobsData);

module.exports = roleJobs;