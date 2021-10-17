//Script reservado para inicializar los valores de la base de datos
const sequelize = require('../database/db');
const bcryptjs = require('bcryptjs');

const User = require('../models/user');

//roles


//usuarios
const seedUsers = [
   {
      usuario: "SantiUser1",
      rol: "ADMIN_ROLE",
      nombre: "SantiagoCliente",
      correo: "cliente1@email.com",
      telefono: "8555555",
      direccion: "Carrera 1 #23-23",
      password: "123456"
   },
   {
      usuario: "SantiUser2",
      rol: "USER_ROLE",
      nombre: "SantiagoCliente",
      correo: "cliente2@email.com",
      telefono: "5888888",
      direccion: "Calle 1 #23-23",
      password: "123456"
   },
   {
      usuario: "SantiUser3",
      rol: "USER_ROLE",
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
      seedUsers.forEach( seedUser =>{

         //Encriptar la contraseña
         const salt = bcryptjs.genSaltSync();
         seedUser.password = bcryptjs.hashSync(seedUser.password, salt);

         User.create(seedUser)
            .then( user => {
               console.log({
                  msg: "Se ha guardado",
                  user: user.dataValues
               })
            })
            .catch(err => {
               console.log(err)
            })
      })
      
   } catch (err) {
      console.log({
         msg: 'Error creando los valores iniciales',
         err: err.errors
      })
   }

}

createBasicUsers();

module.exports = {
   createBasicUsers
}



//Platos



//Pedidos
