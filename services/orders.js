const { request, response } = require('express');

const { models } = require('../database/db');

const ordersGet = async (req = request, res= response) => {

   const options = {
      where: { status: true },
      include: [
         { 
            association: 'user',
            attributes: ['id', 'usuario', 'nombre', 'correo', 'telefono', 'direccion', 'role'],
         }
      ]
   };

   const orders = await models.Order.findAndCountAll(options);

   if (orders) {
      res.status(200).json({
         msg: 'API - Get Orders',
         orders
      })
   } else {
      res.status(404).json({
         msg: 'No existen pedidos - orders - en la base de datos'
      })
   }
};


const ordersGetById = async (req = request, res = response) => {
   
   const { id } = req.params;

   const options = {
      where: { status: true },
      include: [
         { 
            association: 'user'
         }
      ]
   };

   const order = await models.Order.findByPk(id, options);

   if(order){
      res.status(200).json({
         msg: 'API - orders get by id',
         order
      });
   } else {
      res.status(404).json({
         msg: `No existe la orden con el id ${id}`
      });
   }

};


const ordersPost = async (req = request, res = response) => {

   const body = req.body;

   try {
      const newOrder = await models.Order.create(body);
      
      res.status(200).json({
         msg: 'API - Post orders',
         newOrder
      })

   } catch (err) {
   
      res.status(500).json({
         msg: 'Hable con el administrador',
         err: err.errors
      });
   }


}


const ordersPut = async (req = request, res = response) =>{

   res.status(200).json({
      msg: 'API - Put orders'
   })
}


const ordersDelete = async (req = request, res = response) => {
   const id = req.params.id;

   res.status(200).json({
      msg: 'API - Delete order',
      id
   })
}


const orderAddItem = async ( req = request, res = response ) => {

   const body = req.body;

   const newItem = await models.OrderProduct.create( body );

   res.status(200).json({
      msg: 'API - orderAddItem',
      newItem
   })
  
}

module.exports = {
   ordersGet,
   ordersGetById,
   ordersPost,
   ordersPut,
   ordersDelete,
   orderAddItem
}