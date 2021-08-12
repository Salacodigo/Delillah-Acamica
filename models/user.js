const{ Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

class User extends Model {}

User.init({

   usuario: {
      type: DataTypes.STRING,
      allowNull: false
   },
   rol: {
      type: DataTypes.STRING,
      allowNull: false
   },
   name:{
      type: DataTypes.STRING,
      allowNull: false
   },
   birthday: DataTypes.DATE

}, {
   sequelize,
   modelName: "user"
})

module.exports = User;



//  id_usuario: {},
//  usuario: {},
//  rol: {},
//  nombre: {},
//  correo: {},
//  telefono: {},
//  direccion: {},
//  contraseña: {}