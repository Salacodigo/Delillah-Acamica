const express = require('express');
const cors = require('cors');
const sequelize = require('../database/db');


const { initSeedValues }  = require('../database/initialValues');
const {  authRouter,
         productsRouter,
         usersRouter,
         ordersRouter,
      } = require('../routes/index')

//Se crea una clase que maneja el servidor 
class Server {

   constructor() {
      this.app = express();
      this.port = process.env.PORT || 3000;

      //Rutas utilizadas
      this.productsPath = '/api/products';
      this.usersPath = '/api/users';
      this.authPath  = '/api/auth';
      this.ordersPath = '/api/orders';

      //Conectar a base de datos
      this.connectDB();

      //Middlewares
      this.middlewares();

      //Rutas de mi aplicación
      this.routes();

   }

   middlewares() {
      //CORS
      this.app.use(cors());

      //Lctura y parseo del body
      this.app.use(express.json());

   }

   async connectDB() {
      console.log('');
      console.log('');
      console.log('');
      console.log('');
      console.log('');
      //Conectarse a la base de datos
      await sequelize.sync({ force: true })
         .then(() => {
         console.log("Se realiza la conexión a la base de datos...");
      }).catch(error => {
         console.log('Se ha producido un error', error);
      });
      await initSeedValues();
   }

   routes() {
      this.app.use(this.authPath, authRouter);

      this.app.use(this.productsPath, productsRouter);
      
      this.app.use(this.usersPath, usersRouter);

      this.app.use(this.ordersPath, ordersRouter);
   }


   listen() {
      this.app.listen(this.port, () => {
         console.log(`Servidor corriendo en el puerto ${this.port}`);
      })
   }

}


module.exports = Server;