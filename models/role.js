const{ Model, DataTypes, Sequelize} = require('sequelize');
const sequelize = require('../database/db');

const { USER_TABLE } = require('./user');

const ROLE_TABLE = 'roles';

const RoleSchema = {

   role: {
      type: DataTypes.STRING,
      validate: {
         isIn: [['ADMIN_ROLE', 'USER_ROLE']],
      },
      defaultValue: 'USER_ROLE',
      allowNull: false
   },
   userId: {
      field: 'user_id',
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true,
      references: {
         model: USER_TABLE,
         key: 'id'
      },

   }
}

class Role extends Model {

   static associate(models) {
      this.belongsTo(models.User, { 
         as: 'user',
         foreignKey: 'user_id', 
      });
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