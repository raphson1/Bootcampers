const { Applicant } = require('../models/applicant');

const applicantData = [
    {
        applicant_name: 'Eric',
        applicant_lastname: 'Ruboneka',
        role_id: 2,
        email: 'ruboneka@gmail.com',
        user_id: 1
    },
    {
        applicant_name: 'Vincent',
        applicant_lastname: 'Vinny',
        role_id: 1,
        email: 'vinny@gmail.com',
        user_id: 2
    },
];

const seedApplicant = Applicant.bulkcreate(applicantData);

module.exports = seedApplicant;