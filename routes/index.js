const express = require('express');

const authRouter = require('../routes/auth');
const productsRouter = require('../routes/products');
const usersRouter = require('../routes/users');
const ordersRouter = require('../routes/orders');

module.exports = {
   authRouter,
   productsRouter,
   usersRouter,
   ordersRouter,

}