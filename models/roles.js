// const { Model, DataTypes } = require('sequelize');
 
// const sequelize = require('../config/connection.js');
// const bcrypt = require('bcrypt');
 
// class Roles extends Model {
// }
 
// //this table allows us to control the jobRole input on the frontend. So they will be able to choose form a dropdown what role they are looking for (company user) or they qualify for (applicant user)
// Roles.init(
//  {
//    // define columns
//    id: {
//      type: DataTypes.INTEGER,
//      allowNull: false,
//      primaryKey: true,
//      autoIncrement: true,
//    },
//   role_name: {
//        type: DataTypes.STRING,
//        allowNull: false,
//    }

// },{
//   sequelize,
//   timestamps: false,
//   freezeTableName: true,
//   underscored: true,
//   modelName: 'roles',
// }
 
// );
 
// module.exports = Roles;