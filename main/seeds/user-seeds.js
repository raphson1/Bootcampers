const { User }  = require('../models');

const usersData = [
    {
        applicant_name: 'eric',
        email: 'eric@gmail.com',
        password: 'coding12',
        user_role: 'Applicant'
    },
    {
        applicant_name: 'Vinny',
        email: 'vinny@gmail.com',
        password: 'erisuro1',
        user_role: 'Applicant'
    }
];

const userSeeds = () => User.bulkCreate(usersData);

module.exports = userSeeds;