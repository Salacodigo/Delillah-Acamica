const{ Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../database/db');

const { ORDER_PRODUCT_TABLE } = require('../models/order-product');
const PRODUCT_TABLE = 'products';

const ProductSchema = {

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
      unique: true,
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
}

class Product extends Model {
   
   static associate(models){
      //
   }

   static config (sequelize) {
      return {
         sequelize,
         tableName: PRODUCT_TABLE,
         modelName: 'Product',
         timestamps: true,
      }
   }
}

module.exports = { PRODUCT_TABLE, ProductSchema, Product } ;