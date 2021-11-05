const { Model, DataTypes, Sequelize } = require('sequelize');

const { ORDER_PRODUCT_TABLE } = require('../models/order-product');
const USER_TABLE = require('../models/user');

const ORDER_TABLE = 'orders';

const OrderSchema = {
   id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
   },
   status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
   },
   deliveryStatus: {
      type: DataTypes.STRING,
      validate: {
         isIn: [['NUEVO', 'CONFIRMADO', 'PREPARANDO', 'ENVIANDO', 'ENTREGADO']],
      },
      defaultValue: 'NUEVO',
      allowNull: false
   },
   paymentMethod: {
      type: DataTypes.STRING,
      validate: {
         isIn: [['CASH', 'CREDIT_CARD']],
      },
      defaultValue: 'CASH',
      allowNull: false
   },
   createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'created_at',
      defaultValue: Sequelize.NOW,
   },
   // Referencia a user
   userId: {
      field: 'user_id',
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true,
      references: {
         model: USER_TABLE,
         key: 'id'
      },
   },
}


class Order extends Model {
   
   static associate(models) {
      
      this.belongsTo(models.User, {
         as: 'user'
      });

      this.belongsToMany(models.Product, {
         as: 'items',
         // Tabla que hace el JOIN
         through: models.OrderProduct, 
         //llave de la tabla donde estoy resolviendo la relación
         foreignKey: 'orderId', 
         otherKey: 'productId' // La otra llave
      })
   }

   static config(sequelize) {
      return {
         sequelize,
         tableName: ORDER_TABLE,
         modelName: 'Order',
         timestamps: false,
      }
   }
}

module.exports = { Order, OrderSchema, ORDER_TABLE };