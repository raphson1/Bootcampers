const { Roles } = require('../models');

const rolesData = [
    {
        role_name: 'Front-End Developer'
    },
    {
        role_name: 'Back-End Developer',
    }
];

const roleSeeds = () =>  Roles.bulkCreate(rolesData);

module.exports = roleSeeds;