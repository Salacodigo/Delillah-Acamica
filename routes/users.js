const express = require('express');
const router = express.Router();


const {
   usersGet,
   usersGetById,
   usersPost,
   usersPut,
   usersDelete
} = require('../controllers/users')



router.get('/', usersGet);

router.get('/:id', usersGetById);

router.post('/', usersPost);

router.put('/:id',usersPut);

router.delete('/:id',usersDelete);


module.exports = router;