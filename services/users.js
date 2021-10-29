const { request, response } = require('express');
const sequelize = require('../database/db');
const bcryptjs = require('bcryptjs');

const { User } = require('../models/user');
const { Role } = require('../models/role');

const usersGet = async (req = request, res = response) => {
   const options = 
   {
      where: { status: true },
      attributes: ['id', 'usuario', 'nombre', 'correo', 'telefono', 'direccion'],
      include: [{
         model: Role,
         as: 'role',
         attributes: ['role']
      }]
   }
   const users = await User.findAndCountAll(options);

   if (users) {
      res.status(200).json({
         msg: ' API - Total users',
         users
      })
   } else {
      res.status(404).json({
         msg: `No existen usuarios en la BD`
      })
   }


}

const usersGetById = async (req = request, res = response) => {
   const { id } = req.params;

   const options = {
      attributes: ['id', 'usuario', 'nombre', 'correo', 'telefono', 'direccion']
   }

   const user = await User.findByPk(id, options);

   if (user) {
      res.status(200).json({
         msg: ' API - users Get by id',
         user
      })
   } else {
      res.status(404).json({
         msg: `No existe un usuario con el id ${id}`
      })
   }

}

const usersPost = async (req = request, res = response) => {

   const body = req.body;
   const {correo = "" } = req.body;

   try {

      const existeEmail = await User.findOne({
         where: {
            correo: correo
         }
      });

      if (existeEmail) {
         return res.status(400).json({
            msg: 'Ya existe un usuario con el email ' + body.correo
         });
      }

      //Encriptar la contraseña
      const salt = bcryptjs.genSaltSync();
      body.password = bcryptjs.hashSync(body.password, salt);

      const newUser = await User.create(body, 
         {include : ['role']}
      );

      res.status(200).json({
         msg: ' API - users Post',
         newUser
      });

   } catch (err) {

      console.log(err);
      res.status(500).json({
         msg: 'Hable con el administrador',
         err: err.errors
      })
   }

}

const usersPut = async (req = request, res = response) => {
   const { id } = req.params;
   const { body } = req;

   try {
      const user = await User.findByPk(id);
      if (!user) {
         return res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
         });
      }

      await user.update(body);
      return res.status(200).json({
         msg: ' API - users Put',
         user
      });


   } catch (error) {
      console.log(error);
      res.status(500).json({
         msg: 'Hable con el administrador',
         err: err.errors
      })
   }

}

const usersDelete = async (req = request, res = response) => {
   const { id } = req.params;

   const user = await User.findByPk(id);

   if (!user) {
      console.log(`No existe un usuario con el id ${id}`)
      return res.status(500).json({
         msg: 'API - users delete'
      })
   }

   await user.update({ status: false });
   // await usuario.destroy();


   res.status(200).json(user);
}


module.exports = {
   usersGet,
   usersGetById,
   usersPost,
   usersPut,
   usersDelete
}