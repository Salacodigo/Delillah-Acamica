const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
   id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
  },
   usuario: {
      allowNull: false,
      notEmpty: true,
      type: DataTypes.STRING,
      validate:{
         len: [2,50]
      },
   },
   nombre:{
      notEmpty: true,
      allowNull: false,
      type: DataTypes.STRING,
      validate:{
         len: [2,50]
      },
   },
   correo:{
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate:{
         isEmail: true,
         len: [5,90],
      },
   },
   telefono:{
      allowNull: false,
      type: DataTypes.STRING,
      validate:{
         len: [5,20],
      },
      notEmpty: true,
   },
   direccion: {
      allowNull: false,
      type: DataTypes.STRING,
      notEmpty: true,
   },
   password: {
      allowNull: false,
      type: DataTypes.STRING,
      notEmpty: true,
   },
   status:{
      type: DataTypes.BOOLEAN,
      defaultValue: true
   },

   // rol: {
   //    allowNull: true,
   //    type: DataTypes.STRING,
   //    validate: {
   //       isIn: [['ADMIN_ROLE', 'USER_ROLE']]
   //    },
   //    defaultValue: "USER_ROLE",
   // },
}

class User extends Model {

   static associate(models) {
      this.hasOne(models.Role, {
         as: 'role',
         foreignKey: 'user_id',
      });

      this.hasMany(models.Order, {
         as: 'orders',
         foreignKey: 'customerId'
      })

   }

   static config(sequelize) {
      return {
         sequelize,
         tableName: USER_TABLE,
         modelName: 'User',
         timestamps: true,
      }
   }
}

module.exports = { USER_TABLE, UserSchema, User }