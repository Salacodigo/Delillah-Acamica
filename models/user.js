const{ Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const User = sequelize.define("user",{

   usuario: {
      type: DataTypes.STRING,
      notEmpty: true,
      allowNull: false
   },
   rol: {
      type: DataTypes.STRING,
      validate: {
         isIn: [['ADMIN_ROLE', 'USER_ROLE']],
      },
      defaultValue: "USER_ROLE",
      allowNull: true
   },
   nombre:{
      type: DataTypes.STRING,
      notEmpty: true,
      allowNull: false
   },
   correo:{
      type: DataTypes.STRING,
      validate:{
         unique: true,
      },
      isEmail: true,
      allowNull: false
   },
   telefono:{
      type: DataTypes.STRING,
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