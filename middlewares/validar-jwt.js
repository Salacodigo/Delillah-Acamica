const {request , response } = require('express');
const jwt = require('jsonwebtoken');

const { User } = require('../models/user');

const validarJWT = async(req =request, res= response, next) => {

   const token = req.header('x-token');

   if(!token){
      return res.status(400).json({
         msg: 'No hay token en la petición'
      })
   }

   try{

      const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

      // Leer el usuario que corresponde al userId

      const user = await User.findByPk( uid );
      console.log( "user provisional", user);
      
      if( !user ){
         return res.status(401).json({
            msg: 'El usuario no existe en BD'
         })
      }
      
      //Verificar si el user tiene estado true
      if (!user.status ){
         return res.status(401).json({
            msg: 'Token no válido - Usuario con estado: false'
         })
      }

      req.user = user;

      next();
   } catch(error){
      return res.status(401).json({
         msg: 'Token no válido'
      })
   }

}

module.exports = {
   validarJWT
}