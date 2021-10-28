const { request, response } = require('express');


const ordersGet = (req = request, res= response) => {
   const user = req.body;

   res.json({
      msg: 'API - Get Orders',
      user

   })
}


const ordersPost = (req = request, res = response) => {
   res.json({
      msg: 'API - Post orders',
   })
}


const ordersPut = (req = request, res = response) =>{
   res.json({
      msg: 'API - Put orders'
   })
}


const ordersDelete = (req = request, res = response) => {
   const id = req.params.id;

   res.json({
      msg: 'API - Delete order',
      id
   })
}

module.exports = {
   ordersGet,
   ordersPost,
   ordersPut,
   ordersDelete

}