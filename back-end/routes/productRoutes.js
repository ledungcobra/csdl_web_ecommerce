const express = require('express');
const {postGetProducts} = require('../controllsers/productController.js');
const db = require("../config/db.js");
const {getProduct} = require("../controllsers/productController");

const router = new express.Router();

/**
 * POST route /api/products
 */

router.post('/', postGetProducts);
router.post('/addCart', getProduct);
module.exports = router;
