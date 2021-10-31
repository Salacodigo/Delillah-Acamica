const express = require('express');
const router = express.Router();

const { 
   validarCampos,
   validarJWT,
   tieneRole,
   propietarioDatos
} = require('../middlewares/index');

const {
   ordersGet,
   ordersGetById,
   ordersPost,
   ordersPut,
   ordersDelete
} = require('../services/orders');



router.get('/', [
   validarJWT,
   tieneRole('ADMIN_ROLE'),
   validarCampos,
] ,ordersGet);

router.get('/:id', [
   validarJWT,
   tieneRole('ADMIN_ROLE', 'USER_ROLE'),
   propietarioDatos,
   validarCampos,
] ,ordersGetById);

router.post('/',[
   validarJWT,
   tieneRole('ADMIN_ROLE', 'USER_ROLE'),
   validarCampos
],ordersPost);

router.put('/',[
   validarJWT,
   tieneRole('ADMIN_ROLE'),
   validarCampos
], ordersPut);

router.delete('/:id',[
   validarJWT,
   tieneRole('ADMIN_ROLE'),
   validarCampos
], ordersDelete);


module.exports = router;