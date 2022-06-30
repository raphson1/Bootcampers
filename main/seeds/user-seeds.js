const { User }  = require('../models');

const usersData = [
    {
        applicant_name: 'eric',
        email: 'eric@gmail.com',
        password: 'coding',
        user_role: 'Applicant'
    },
    {
        applicant_name: 'Vinny',
        email: 'vinny@gmail.com',
        password: 'erisuro',
        user_role: 'Applicant'
    }
];

const userSeeds = () => User.bulkCreate(usersData);

module.exports = userSeeds;