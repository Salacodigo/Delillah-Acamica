const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const { 
   validarCampos,
   validarJWT,
   tieneRole,
   propietarioDatos
} = require('../middlewares/index');


const {
   usersGet,
   usersGetById,
   usersPost,
   usersPut,
   usersDelete
} = require('../controllers/users')



router.get('/',
[ 
   validarJWT,
   tieneRole('ADMIN_ROLE'),
   validarCampos
], 
usersGet);

router.get('/:id',
[ 
   validarJWT,
   tieneRole('ADMIN_ROLE', 'USER_ROLE'),
   propietarioDatos,
   validarCampos
]
,usersGetById);

router.post('/', 
[ 
   validarJWT,
   tieneRole('ADMIN_ROLE'),
   validarCampos
]
,usersPost);

router.put('/:id',
[ 
   validarJWT,
   tieneRole('ADMIN_ROLE'),
   validarCampos
]
,usersPut);

router.delete('/:id',
[ 
   validarJWT,
   tieneRole('ADMIN_ROLE'),
   validarCampos
]
,usersDelete);


module.exports = router;