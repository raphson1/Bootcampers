const { Model, DataTypes } = require('sequelize');
 
const sequelize = require('../config/connection.js');
const bcrypt = require('bcrypt');
 
class Jobs extends Model {
}
 
Jobs.init(
 {
   // define columns
    //this data will be used once they hit [post a job button] under the company user login
   id: { //autopopulates
     type: DataTypes.INTEGER,
     allowNull: false,
     primaryKey: true,
     autoIncrement: true,
   },
   job_title: { //name of the title they are looking to hire
       type: DataTypes.STRING,
       allowNull: false,
   },
   company_name: { //name of the company posting the job. specified once the user logs in.
       type: DataTypes.STRING,
       allowNull: false,
   },
  //  dev_role_id: { // this dictates what you as a company user are looking to hire. You choose from a dropdown that references the roles table (on frontend)
  //    type: DataTypes.STRING,
  //    allowNull: false,
  //    references: {
  //       model: 'roles',
  //       keys: 'id',
  //   }
  //  },
  //  user_id: { //references the current logged in user by ID via the user model (session user_id)
  //      type: DataTypes.INTEGER,
  //      references: {
  //          model: 'user',
  //          keys: 'id',
  //      }
  //  },
 
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'jobs',
  }
 
);
 
module.exports = Jobs;
