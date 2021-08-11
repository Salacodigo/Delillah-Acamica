const express = require('express');
const cors = require('cors');

//Se crea una clase que maneja el servidor 
class Server {

   constructor(){
      this.app = express();
      this.port = process.env.PORT || 3000;
      
      //Rutas utilizadas
      this.productsPath = '/api/products';
      this.usersPath = '/api/users';
      this.ordersPath = '/api/orders';

      //Conectar a base de datos

      //Middlewares
      this.middlewares();

      //Rutas de mi aplicación
      this.routes();

   }

   middlewares(){
      //CORS
      this.app.use( cors() );

      //Lctura y parseo del body
      this.app.use(express.json());

   }

   routes(){
      this.app.use(this.productsPath, require('../routes/products'));
      this.app.use(this.usersPath, require('../routes/users'))
      this.app.use(this.ordersPath, require('../routes/orders'))
   }


   listen(){
      this.app.listen(this.port, ()=> {
         console.log(`Servidor corriendo en el puerto ${this.port}`);
      })
   }

}


module.exports =  Server;