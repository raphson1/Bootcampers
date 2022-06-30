const { Model, DataTypes } = require('sequelize');
 
const sequelize = require('../config/connection.js');
const bcrypt = require('bcrypt');
 
class Applicant extends Model {
}
 
Applicant.init(
 {
   // define columns
   //this data will be used once they hit [upload my resume button] under the applicant user login
   id: { //autopopulates
     type: DataTypes.INTEGER,
     allowNull: false,
     primaryKey: true,
     autoIncrement: true,
   },
   resume: { //show only when applicant is chosen is chosen
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlphanumeric: true,
    }
   },
  //  dev_role_id: { // this dictates what you classify yourself as an applicant user. You choose from a dropdown that references the roles table (on frontend)
  //      type: DataTypes.STRING,
  //      allowNull: false,
  //      references: {
  //       model: 'roles',
  //       keys: 'id',
  //   }
  //  },
   user_id: { //as an applicant you are logged in as 'current' user or (under the applicant userRole) so this the reference here
       type: DataTypes.INTEGER,
       references: {
           model: 'user',
           keys: 'id',
       }
   },
 
 
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'applicant',
  }
 
);
 
module.exports = Applicant;