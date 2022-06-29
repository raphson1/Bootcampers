const { User }  = require('../models/index.js');

const usersData = [
    {
        user_name: 'eric',
        password: 'coding',
        user_role: 'Applicant'
    },
    {
        user_name: 'Vinny',
        password: 'erisuro',
        user_role: 'Applicant'
    },
    {
        user_name: 'apple',
        password: 'appleee',
        user_role: 'HR'
    },
    {
        user_name: 'google',
        password: 'googlee',
        user_role: 'HR'
    }
];

const userSeeds = User.bulkCreate(usersData);

module.exports = userSeeds