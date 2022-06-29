const sequelize = require('../config/connection');
// const { Jobs } = require('../models/index.js');
const jobSeeds = require('./jobs-seeds');
const userSeeds = require('./user-seeds');
const roleSeeds = require('./roles-seeds');
const applicantSeeds = require('./applicant-seeds');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    // Jobs.bulkCreate(jobSeeds);
    await jobSeeds();
    console.log('\n----- JOBS SYNCED -----\n');
    await applicantSeeds();
    console.log('\n----- APPLICANT SYNCED -----\n');
    await userSeeds();
    console.log('\n----- USER SYNCED -----\n');
    await roleSeeds();
    console.log('\n----- ROLES SYNCED -----\n');

    process.exit(0);
};

seedAll()
