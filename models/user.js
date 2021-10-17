const{ Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const User = sequelize.define("user",{

   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
  },
   usuario: {
      type: DataTypes.STRING,
      validate:{
         len: [2,50]
      },
      notEmpty: true,
      allowNull: false
   },
   rol: {
      type: DataTypes.STRING,
      validate: {
         isIn: [['ADMIN_ROLE', 'USER_ROLE']]
      },
      defaultValue: "USER_ROLE",
      allowNull: true
   },
   nombre:{
      type: DataTypes.STRING,
      validate:{
         len: [2,50]
      },
      notEmpty: true,
      allowNull: false
   },
   correo:{
      type: DataTypes.STRING,
      unique: true,
      validate:{
         isEmail: true,
         len: [5,90],
      },
      allowNull: false
   },
   telefono:{
      type: DataTypes.STRING,
      validate:{
         len: [5,20],
      },
      notEmpty: true,
      allowNull: false
   },
   direccion: {
      type: DataTypes.STRING,
      notEmpty: true,
      allowNull: false
   },
   password: {
      type: DataTypes.STRING,
      notEmpty: true,
      allowNull: false
   },
   status:{
      type: DataTypes.BOOLEAN,
      defaultValue: true
   }
})

module.exports = User;