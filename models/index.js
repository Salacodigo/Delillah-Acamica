const { User, UserSchema } = require('../models/user');
const { Role, RoleSchema } = require('../models/rol');
const { Product, ProductSchema } = require('../models/product');
const { Order, OrderSchema } = require('../models/order');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Role.init(RoleSchema, Role.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));

  // User.associate(sequelize.models);
  // Role.associate(sequelize.models);
  // Product.associate(sequelize.models);
}

module.exports = { setupModels };