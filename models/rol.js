const{ Model, DataTypes, Sequelize} = require('sequelize');
const sequelize = require('../database/db');

const ROLE_TABLE = 'roles';

const RoleSchema = {

   rol: {
      type: DataTypes.STRING,
      validate: {
         isIn: [['ADMIN_ROLE', 'USER_ROLE']],
      },
      unique: true,
      defaultValue: 'USER_ROLE',
      allowNull: false
   }
}

class Role extends Model {

   static associate(models) {
      //
   }

   static config (sequelize) {
      return {
         sequelize,
         tableName: ROLE_TABLE,
         modelName: 'Role',
         timestamps: true,
      }
   }
}

module.exports = { ROLE_TABLE, RoleSchema, Role}