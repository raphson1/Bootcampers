const User = require('./user');
const Applicant = require('./applicant');
const Jobs = require('./jobs');
const Roles = require('./roles');
 
// User.hasMany(Applicant,{
//    foreignKey: 'user_id',
//    onDelete: 'Cascade'
// });
 
// User.hasMany(Jobs, {
//    foreignKey: 'user_id',
//    onDelete: 'Cascade'
// });
 
// Applicant.belongsTo(User, {
//    foreignKey: 'user_id',
//    onDelete: 'Cascade'
// });
 
// Jobs.belongsTo(User, {
//    foreignKey: 'user_id',
//    onDelete: 'Cascade'
// });

// Applicant.hasOne(Roles, {
//     foreignKey: 'role_id',
// });

// Jobs.hasOne(Roles, {
//     foreignKey: 'role_id',
// })

// Roles.belongsTo(Jobs, {
//    foreignKey: 'role_id',
//    onDelete: 'Cascade'
// });
 
// module.exports = {User, Applicant, Jobs, Roles};

module.exports = {Jobs, Applicant, User, Roles};
