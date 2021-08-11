const { request, response } = require('express');


const usersGet = (req = request, res = response) => {
   res.json({
      msg: ' API - users Get'
   })
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