const express = require('express');
const router = express.Router();

const {
   ordersGet,
   ordersPost,
   ordersPut,
   ordersDelete
} = require('../controllers/orders');



router.get('/', ordersGet);

router.post('/', ordersPost);

router.put('/', ordersPut);

router.delete('/:id', ordersDelete);




module.exports = router;