const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = require('../models/user')

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
   //products
   //valor total
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
   //referencia a user
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


class Order extends Model {
   
   static associate(models) {
      this.belongsTo(models.User, {
         as: 'user',
      });
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