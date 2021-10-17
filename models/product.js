const{ Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Product = sequelize.define("product",{

   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
   },
   img_url: {
      type: DataTypes.STRING,
      validate:{
         isUrl: true
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
      unique: true,
      notEmpty: true,
      allowNull: false
   },
   precio:{
      type: DataTypes.INTEGER,
      isFloat: true,
      allowNull: false
   },
   status:{
      type: DataTypes.BOOLEAN,
      defaultValue: true
   }
})

module.exports = Product;