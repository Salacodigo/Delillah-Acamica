const { request, response } = require('express');


const productsGet = (req = request, res = response) => {

   res.json({
      msg: 'API - products Get'
   })
}

const productsPost = (req = request, res = response) => {
   
   res.json({
      msg: 'API - products Post'
   })
}

const productsPut = (req = request, res = response) => {
   res.json({
      msg: 'API - products Put'
   })
}

const productsDelete = (req = request, res = response ) =>{
   res.json({
      msg: 'API - products Delete'
   })
}

module.exports = {
   productsGet,
   productsPost,
   productsPut,
   productsDelete
}