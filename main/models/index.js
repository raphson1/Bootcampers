const User = require('./user');
const Applicant = require('./applicant');
const Job = require('./jobs');
const Roles = require('./roles');
 
User.hasMany(Applicant,{
   foreignKey: 'user_id',
   onDelete: 'Cascade'
});
 
User.hasMany(Job, {
   foreignKey: 'user_id',
   onDelete: 'Cascade'
});
 
Applicant.belongs(User, {
   foreignKey: 'user_id',
   onDelete: 'Cascade'
});
 
Job.belongsTo(User, {
   foreignKey: 'user_id',
   onDelete: 'Cascade'
});

Applicant.hasOne(Roles, {
    foreignKey: 'role_id',
});

Job.hasOne(Roles, {
    foreignKey: 'role_id',
})
 
module.exports = {User, Applicant, Job, Roles};