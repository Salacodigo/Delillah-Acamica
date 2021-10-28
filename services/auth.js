const { request, response} = require('express');
const bcryptjs = require('bcryptjs');

const { User }  = require('../models/user');
const { generarJWT } = require('../helpers/generar-jwt');


const login = async ( req = request, res = response) => {

   const { correo, password } = req.body;

   try{

      //Verificar si email existe
      const user = await User.findOne({ where:{correo} });


      if( !user ) {
         return res.status(400).json({
            msg: 'Usuario / Password no son correctos - correo'
         });
      }

      //Verificar si usuario está activo
      if ( user.estado ){
         return res.status(400).json({
            msg: 'Usuario / Password no son correctos - estado: false'
         })
      }

      //Verificar la contraseña
      const validPassword = bcryptjs.compareSync( password, user.password );
      if( !validPassword ){
         return res.status(400).json({
            msg: 'Usuario / Passsword no son correctos - password'
         });
      }

      //Generar el JWT
      const token = await generarJWT( user.id );

      res.status(200).json({
         msg: 'Login ok',
         token,
      })

   } catch (error) {
      console.log(error);
      res.status(500).json({
         msg: 'Error. Contacte el administrador'
      })
   }
}

module.exports = {
   login
}