const User = require('./user');
const Applicant = require('./applicant');
// const Jobs = require('./jobs');
// const Roles = require('./roles');
 
User.hasOne(Applicant,{
   foreignKey: 'user_id',
   onDelete: 'CASCADE'
});
 
// User.hasMany(Jobs, {
//    foreignKey: 'user_id',
//    onDelete: 'Cascade'
// });
 
Applicant.belongsTo(User, {
   foreignKey: 'user_id',
   onDelete: 'CASCADE'
});
 
// Jobs.belongsTo(User, {
//    foreignKey: 'user_id',
//    onDelete: 'Cascade'
// });

// Applicant.hasOne(Roles, {
//     foreignKey: 'dev_role_id',
// });

// Jobs.hasOne(Roles, {
//     foreignKey: 'dev_role_id',
// })

// Roles.belongsTo(Jobs, {
//    foreignKey: 'dev_role_id',
//    onDelete: 'Cascade'
// });

// Roles.belongsTo(Applicant, {
//    foreignKey: 'dev_role_id',
//    onDelete: 'Cascade'
// });

// module.exports = {Jobs, Applicant, User, Roles};


module.exports = {Applicant, User};