const express = require('express');
const router = express.Router();


const {
   usersGet,
   usersGetById,
   usersPost,
   usersPut
} = require('../controllers/users')



router.get('/', usersGet);

router.get('/:id', usersGetById);

router.post('/', usersPost);

router.put('/',usersPut);


module.exports = router;