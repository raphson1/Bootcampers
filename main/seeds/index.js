const sequelize = require('../config/connection');
const { Jobs } = require('../models/index.js');
const jobSeeds = require('./jobs-seeds');
// const userSeeds = require('./user-seeds');
// const roleSeeds = require('./roles-seed');
// const applicantSeeds = require('./applicant-seeds');

const seedAll = async() => {
    await sequelize.sync({ force: true });

    Jobs.bulkCreate(jobSeeds);
    process.exit(0);
};

seedAll()
