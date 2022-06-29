const { Model, DataTypes } = require('sequelize');
 
const sequelize = require('../config/connection.js');
const bcrypt = require('bcrypt');
 
class User extends Model {
   checkPassword(loginPW) {
       return bcrypt.compareSync(loginPW, this.password);
   }
}
 
User.init(
 {
   // define columns
   id: {
     type: DataTypes.INTEGER,
     allowNull: false,
     primaryKey: true,
     autoIncrement: true,
   },
   user_name: {
       type: DataTypes.STRING,
       allowNull: false,
   },
   password: { 
       type: DataTypes.STRING,
       allowNull: false,
       validate: {
           len: [8],
       },
   },
   user_role: {
    // 1. This field (on frontend) will dictate if you are an applicant or a company representative. Once this has been selected, you will log in and be routed to the correct information specified by the role you selected.
    //2. LOGIC is needed to achieve this (this will be determined within the handlebars files) --->:
    //-----> If company: [post a job button][view all applicants button] will show
    //-----> If applicant: [Upload Resume button] [View All Jobs] will show. 
     
    type: DataTypes.STRING,
     allowNull: false,
   }
},
{
   hooks: {
     beforeCreate: async (newUserData) => {
       newUserData.password = await bcrypt.hash(newUserData.password, 10);
       return newUserData;
     },
     beforeUpdate: async (updatedUserData) => {
       if (updatedUserData.password) {
       updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
       }
       return updatedUserData;
     },
   },
   sequelize,
   timestamps: false,
   freezeTableName: true,
   underscored: true,
   modelName: 'user',
 }
);
 
module.exports = User;
 
