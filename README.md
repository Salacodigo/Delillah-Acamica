# sprintBackend

Sprint 3 Project

# Delillah-Restó (English)


## Project

API for a restaurant

It allows you to manage Create, Read, Update, Delete items from a restaurant such as users, products and orders.

Project made in sprint 3 of the learning path for Fullstack-Developer in Acámica.

Technologies used:

* MySQL database

* Javascript with sequelize ORM

```
"dependencies": {
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^9.0.2",
    "express": "^4.17.1",
    "express-validator": "^6.12.1",
    "jsonwebtoken": "^8.5.1",
    "mysql2": "^2.3.0",
    "nodemon": "^2.0.12",
    "sequelize": "^6.6.5"
  }
```
## Intallation of dependencies
In the terminal, located into the project folder type:


```
npm install 
```

# Database configuration

Configure the database with the following data access.
path: Delillah-Acamica/database/config.js 

```
const database = {
  username: "root",             // user name
  password: "passSantiago2021", // password
  database: "delillah_db",      // database name
  host: "localhost",            // host
}
module.exports = {
  database
}
```


path: Delillah-Acamica/database/db.js 
```
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
```


The port is assigned in
path: Delillah-Acamica/models/server.js

```
class Server {

   constructor() {
      this.app = express();
      this.port = process.env.PORT || 3000;
    
```



## Init values

Default values of the database are in the path: Delillah-Acamica/database/initialValues.js

These values are created automatically when you type:

```
npm start
```


## Run the project

The project create the database connection automatically and the initial tables with the following instruction.

In the terminal, located into the project folder type:

```
npm start
```


## Documentation
[Swagger API](https://app.swaggerhub.com/apis/Salacodigo/Delillah-Acamica-API/1.0.0)

[Postman API](https://documenter.getpostman.com/view/13934848/UVC3j7rt)


## Branchs

The master branch is the main branch

The modelosComoClases branch was useful to change the architecture of the project.


## Author

* Santiago Salamanca. [See LinkedIn](https://www.linkedin.com/in/santiagosalamancadev
)




# sprintBackend

Proyecto Sprint 3

# Delillah-Restó (Español)

## Proyecto

API para un restaurante

Te permite crear, leer, actualizar y eliminar items de un restaurante como usuarios, productos y ordenes.

Proyecto realizado para el sprint 3 para la ruta de aprendizaje Desarrollo-Fullstack en Acámica.

Tecnologías utilizadas:

* MySQL Base de datos

* Javascript con sequelize ORM

```
"dependencies": {
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^9.0.2",
    "express": "^4.17.1",
    "express-validator": "^6.12.1",
    "jsonwebtoken": "^8.5.1",
    "mysql2": "^2.3.0",
    "nodemon": "^2.0.12",
    "sequelize": "^6.6.5"
  }
```
## Instalación de dependencias
En la terminal, ubicado en la carpeta del proyecto, escribe:

```
npm install 
```

## Configuración de la base de datos

Para configurar los datos de acceso a la base de datos utilizamos los siguientes archivos:

Ruta: Delillah-Acamica/database/config.js 
```
const database = {
  username: "root",             // user name
  password: "passSantiago2021", // password
  database: "delillah_db",      // database name
  host: "localhost",            // host
}
module.exports = {
  database
}
```


Ruta: Delillah-Acamica/database/db.js 
```
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
```


El puerto es asignado en la
ruta: Delillah-Acamica/models/server.js

```
class Server {

   constructor() {
      this.app = express();
      this.port = process.env.PORT || 3000;
    
```



## Valores iniciales

Los valores iniciales de la base de datos se encuentran en
la ruta: Delillah-Acamica/database/initialValues.js

Estos valores se crean automaticamente al utilizar el comando:

```
npm start
```

## Correr el proyecto

El proyecto crea la conexión con la base de datos y las tablas iniciales con el comando que se muestra a continuación.

En la terminal, ubicado en la carpeta del proyecto, escribe:

```
npm start
```


## Documentación
[Swagger API](https://app.swaggerhub.com/apis/Salacodigo/Delillah-Acamica-API/1.0.0)

[Postman API](https://documenter.getpostman.com/view/13934848/UVC3j7rt)


## Branchs
La rama master es la principal

La rama modelosComoClases fue util para cambiar la arquitectura del proyecto.

## Autor

* Santiago Salamanca. [See LinkedIn](https://www.linkedin.com/in/santiagosalamancadev
)

