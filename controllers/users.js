const { request, response } = require('express');
const  User  = require('../models/user');
const sequelize = require('../database/db');

const usersGet = async (req = request, res = response) => {
   await User.create({
      usuario: "SantiUser",
      name: "SantiagoAcamica", 
      birthday: new Date(1996, 12, 7)
   }).then( user => {
      res.json({
         msg: ' API - users Get',
         user
      });
   });
   
}

const usersGetById = (req = request, res = response ) => {
   const id = req.params.id;

   res.json({
      msg: ' API - users Get by id',
      id
   })
}

const usersPost = (req = request, res = response) => {
   res.json({
      msg: ' API - users Post'
   })
}

const usersPut = (req = request, res = response) => {
   res.json({
      msg: ' API - users Put'
   })
}


module.exports = {
   usersGet,
   usersGetById,
   usersPost,
   usersPut
}