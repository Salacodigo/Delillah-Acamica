const express = require('express');
const router = express.Router();

const{ 
   productsGet,
   productsPost,
   productsPut,
   productsDelete
} = require('../controllers/products');


router.get('/', productsGet);

router.post('/', productsPost);

router.put('/', productsPut);

router.delete('/', productsDelete);


module.exports = router;