const { Sequelize } = require('sequelize');
const { database } = require('./config');

const { setupModels } = require('../models/index');


const sequelize = new Sequelize(
   database.database,
   database.username,
   database.password,
   {
      host: database.host,
      dialect: "mysql",
   }
);

setupModels(sequelize);

module.exports = sequelize;