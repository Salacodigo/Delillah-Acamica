const{ Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Product = sequelize.define("product",{

   img_url: {
      type: DataTypes.STRING,
      validate:{
         isUrl: true,
      },
      notEmpty: true,
      allowNull: false
   },
   nombre: {
      type: DataTypes.STRING,
      notEmpty: true,
      allowNull: false
   },
   nombre_corto:{
      type: DataTypes.STRING,
      notEmpty: true,
      allowNull: false
   },
   correo:{
      type: DataTypes.STRING,
      unique: true,
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

module.exports = Product;