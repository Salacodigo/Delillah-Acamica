const { User, UserSchema } = require('../models/user');
const { Role, RoleSchema } = require('./role');
const { Product, ProductSchema } = require('../models/product');
const { Order, OrderSchema } = require('../models/order');
const { OrderProduct, OrderProductSchema } = require('../models/order-product');


function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Role.init(RoleSchema, Role.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));
  OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize));

  User.associate(sequelize.models);
  Role.associate(sequelize.models);
  Product.associate(sequelize.models);
  Order.associate(sequelize.models);
}

module.exports = { setupModels };