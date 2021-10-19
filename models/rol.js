const{ Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Role = sequelize.define("role",{

   rol: {
      type: DataTypes.STRING,
      validate: {
         isIn: [['ADMIN_ROLE', 'USER_ROLE']],
      },
      unique: true,
      defaultValue: 'USER_ROLE',
      allowNull: false
   }
})

module.exports = Role;