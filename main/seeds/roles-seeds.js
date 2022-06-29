const { Roles } = require('../models');

const rolesData = [
    {
        role_name: 'Front-End Develloper'
    },
    {
        role_name: 'Back-End Develloper',
    },
    {
        role_name: 'FullStack Develloper',
    },
    {
        role_name: 'Network Engineer'
    }
];

const roleSeeds = () =>  Roles.bulkCreate(rolesData);

module.exports = roleSeeds;