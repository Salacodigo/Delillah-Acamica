const{ Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const User = sequelize.define("user",{

   usuario: {
      type: DataTypes.STRING,
      allowNull: false
   },
   rol: {
      type: DataTypes.STRING,
      defaultValue: "USER",
      allowNull: true
   },
   nombre:{
      type: DataTypes.STRING,
      allowNull: false
   },
   correo:{
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
   },
   telefono:{
      type: DataTypes.STRING,
      allowNull: false
   },
   direccion: {
      type: DataTypes.STRING,
      allowNull: false
   },
   password: {
      type: DataTypes.STRING,
      allowNull: false
   },
   status:{
      type: DataTypes.BOOLEAN,
      defaultValue: true
   }

})

module.exports = User;