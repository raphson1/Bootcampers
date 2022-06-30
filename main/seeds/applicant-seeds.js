const { Applicant } = require('../models');

const applicantData = [
    {
        resume: 'link goes here',
        dev_role_id: 1,
        user_id: 1,
    },
    {
        resume: 'link goes here',
        dev_role_id: 2,
        user_id: 2,
    },
];

const applicantSeeds = () => Applicant.bulkCreate(applicantData);

module.exports = applicantSeeds;