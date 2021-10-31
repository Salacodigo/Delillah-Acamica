const { request, response } = require('express');
const { Product } = require('../models/product');

const { models } = require('../database/db');

const productsGet = async (req = request, res = response) => {

   const options = {
      where: { status: true },
      attributes: ['id', 'img_url', 'nombre', 'nombre_corto', 'precio']
   };

   const products = await Product.findAndCountAll(options);

   if (products) {
      res.status(200).json({
         msg: ' API - Total products',
         products
      })
   } else {
      res.status(404).json({
         msg: `No existen productos en la BD`
      })
   }

}


const productsGetById = async (req = request, res = response) => {
   const { id } = req.params;

   const options = {
      where: { status: true },
      attributes: ['id', 'img_url', 'nombre', 'nombre_corto', 'precio']
   };

   const product = await Product.findByPk(id, options);

   if (product) {
      res.status(200).json({
         msg: ' API - users Get by id',
         product
      })
   } else {
      res.status(404).json({
         msg: `No existe un producto con el id ${id}`
      })
   }

}


const productsPost = async(req = request, res = response) => {

   const body = req.body;
   const { nombre_corto } = req.body;

   try {

      const existeProducto = await Product.findOne({
         where: {
            nombre_corto: nombre_corto
         }
      });

      if (existeProducto) {
         return res.status(400).json({
            msg: 'Ya existe un producto con el nombre_corto - codigo) ' + nombre_corto
         });
      }

      const newProduct = await Product.create(body);
       
      res.status(200).json({
         msg: ' API - product Post',
         newProduct
      });
       

   } catch (err) {

      console.log(err);
      res.status(500).json({
         msg: 'Hable con el administrador',
         err: err.errors
      })
   }


}

const productsPut = async(req = request, res = response) => {
   const { id } = req.params;
   const { body } = req;

   try {
      const product = await Product.findByPk(id);
      if (!product) {
         return res.status(404).json({
            msg: `No existe un product con el id ${id}`
         });
      }

      await product.update(body);
      return res.status(200).json({
         msg: ' API - product Put',
         product
      });


   } catch (error) {
      console.log(error);
      res.status(500).json({
         msg: 'Hable con el administrador',
         err: err.errors
      })
   }
}

const productsDelete = async(req = request, res = response ) =>{
   const { id } = req.params;

   const product = await Product.findByPk(id);

   if (!product) {
      console.log(`No existe un product con el id ${id}`)
      return res.status(500).json({
         msg: 'API - product delete'
      })
   }

   await product.update({ status: false });
   // await usuario.destroy();

   res.status(200).json(product);
}

module.exports = {
   productsGet,
   productsGetById,
   productsPost,
   productsPut,
   productsDelete
}