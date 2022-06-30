const { Applicant } = require('../models');

const applicantData = [
    {
        resume: 'link goes here',
        // dev_role_id: 'Front-End Develloper',
        user_id: 1,
    },
    {
        resume: 'link goes here',
        // dev_role_id: 'Back-End Develloper',
        user_id: 2,
    },
];

const applicantSeeds = () => Applicant.bulkCreate(applicantData);

module.exports = applicantSeeds;