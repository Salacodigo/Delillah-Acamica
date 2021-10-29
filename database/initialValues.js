//Script reservado para inicializar los valores de la base de datos
const sequelize   = require('../database/db');
const bcryptjs    = require('bcryptjs');

const { User }    = require('../models/user');
const { Role }    = require('../models/role');
const { Product } = require('../models/product');


//usuarios
const seedUsers = [
   {
      usuario: "SantiUser1",
      role: "ADMIN_ROLE",
      nombre: "SantiagoCliente",
      correo: "cliente1@email.com",
      telefono: "8555555",
      direccion: "Carrera 1 #23-23",
      password: "123456"
   },
   {
      usuario: "SantiUser2",
      role: "USER_ROLE",
      nombre: "SantiagoCliente",
      correo: "cliente2@email.com",
      telefono: "5888888",
      direccion: "Calle 1 #23-23",
      password: "123456"
   },
   {
      usuario: "SantiUser3",
      role: "USER_ROLE",
      nombre: "SantiagoCliente",
      correo: "cliente3@email.com",
      telefono: "9777777",
      direccion: "Diagonal 1 #23-23",
      password: "123456"
   }
]

const createBasicUsers = async () => {
   
   try {
      
      console.log("U S U A R I O S:");
      seedUsers.forEach( seedUser => {

         //Encriptar la contraseña
         const salt = bcryptjs.genSaltSync();
         seedUser.password = bcryptjs.hashSync(seedUser.password, salt);

         User.create(seedUser)
            .then( user => {
               console.log({
                  msg: "Se ha guardado el usuario",
                  user: user.dataValues
               })
            })
            .catch(err => {
               console.log(err)
            })
      })
      
   } catch (err) {
      console.log({
         msg: 'Error creando los usuarios iniciales',
         err: err.errors
      })
   }

}

//roles
const seedRoles = [
   {  
      role: 'ADMIN_ROLE',
      userId: 1,
   },
   {  
      role: 'USER_ROLE',
      userId: 2,
   },
   {  
      role: 'USER_ROLE',
      userId: 3,
   },
]

const createBasicRoles = async () => {
   
   try {
      
      console.log("R O L E S:");
      seedRoles.forEach( seedRole =>{
         Role.create(seedRole)
         .then( role => {
               console.log({
                  msg: "Se ha guardado el rol",
                  role: role.dataValues
               })
         })
         .catch(err => {
            console.log(err)
         })
      })
      
   } catch (err) {
      console.log({
         msg: 'Error creando los roles iniciales',
         err: err.errors
      })
   }

}

//products
const seedProducts = [
   {
      img_url: "https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_960_720.jpg",
      nombre: "esparragos",
      nombre_corto: "ESPA",
      precio: 20000,
      status: true,
  },
  {
      img_url: "https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_960_720.jpg",
      nombre: "pasta",
      nombre_corto: "PASTA",
      precio: 10000,
      status: true,
  }
]

const createBasicProducts = async () => {
   
   try {
      
      console.log("P R O D U C T O S:");
      seedProducts.forEach( seedProduct =>{
         Product.create(seedProduct)
         .then( product => {
               console.log({
                  msg: "Se ha guardado el producto",
                  product: product.dataValues
               })
         })
         .catch(err => {
            console.log(err)
         })
      })
      
   } catch (err) {
      console.log({
         msg: 'Error creando los productos iniciales',
         err: err.errors
      })
   }

}

//Pedidos

const initSeedValues = async () => {
   createBasicUsers();
   createBasicRoles();
   createBasicProducts();
}

module.exports = {
   initSeedValues,
}


