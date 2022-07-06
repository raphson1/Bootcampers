const { Applicant } = require('../models');

const applicantData = [
    {
        name: 'Jenna',
        last_name: 'Richardson',
        email: 'jennaRHS@gmail.com',
        resume: 'https://github.com/',
        dev_role:'Front End Developer',
        // phase2: user_id: 1,
    },
    {
        name: 'Roberto',
        last_name: 'Hernandez',
        email: 'robear@gmail.com',
        resume: 'https://github.com/',
        dev_role: 'Back End Developer',
        //phase2: user_id: 2,
    },
];

const applicantSeeds = () => Applicant.bulkCreate(applicantData);

module.exports = applicantSeeds;