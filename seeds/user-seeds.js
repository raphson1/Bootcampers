const { User }  = require('../models');

const usersData = [
    {
        name: 'eric',
        last_name: 'jones',
        email: 'eric@gmail.com',
        password: 'coding12',
        user_role: 'Hiring Manager'
    },
    {
        name: 'Vinny',
        last_name: 'Monaco',
        email: 'vinny@gmail.com',
        password: 'erisuro1',
        user_role: 'Team Lead'
    }
];

const userSeeds = () => User.bulkCreate(usersData);

module.exports = userSeeds;