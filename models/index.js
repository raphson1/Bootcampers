const User = require('./user');
const Applicant = require('./applicant');
const Jobs = require('./jobs');
// const Roles = require('./roles');
 
// phase2 funcationality
// User.hasOne(Applicant,{
//    foreignKey: 'user_id',
//    onDelete: 'CASCADE'
// });
 
User.hasOne(Jobs, {
   foreignKey: 'user_id',
   onDelete: 'Cascade'
});
 
// phase2 funcationality
// Applicant.belongsTo(User, {
//    foreignKey: 'user_id',
//    onDelete: 'CASCADE'
// });
 
Jobs.belongsTo(User, {
   foreignKey: 'user_id',
   onDelete: 'Cascade'
});

// phase2 funcationality
// Applicant.hasOne(Roles, {
//     foreignKey: 'dev_role_id',
//     onDelete: 'CASCADE'
// });

// Roles.belongsTo(Applicant, {
//    foreignKey: 'dev_role_id',
//    onDelete: 'Cascade'
// });

// Jobs.hasOne(Roles, {
//     foreignKey: 'dev_role_id',
// })

// Roles.belongsTo(Jobs, {
//    foreignKey: 'dev_role_id',
//    onDelete: 'Cascade'
// });


module.exports = {Jobs, Applicant, User};


