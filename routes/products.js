const express = require('express');
const router = express.Router();

const { 
   validarCampos,
   validarJWT,
   tieneRole,
   propietarioDatos
} = require('../middlewares/index');

const{ 
   productsGet,
   productsGetById,
   productsPost,
   productsPut,
   productsDelete
} = require('../services/products');


router.get('/',[
   validarJWT
],
 productsGet);

 router.get('/:id',[
   validarJWT
],
 productsGetById); 

router.post('/', [
   validarJWT,
   tieneRole('ADMIN_ROLE'),
   validarCampos
],
productsPost);

router.put('/:id', [
   validarJWT,
   tieneRole('ADMIN_ROLE'),
   validarCampos
],
productsPut);

router.delete('/:id', [
   validarJWT,
   tieneRole('ADMIN_ROLE'),
   validarCampos
],
productsDelete);


module.exports = router;