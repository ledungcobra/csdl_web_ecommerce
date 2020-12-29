const express = require('express');
const {postGetProducts} = require('../controllsers/productController.js');
const db = require("../config/db.js");
const {getProductByID} = require("../controllsers/productController");
const {getProducts} = require("../controllsers/productController");
const {getProduct} = require("../controllsers/productController");

const router = new express.Router();

/**
 * POST route /api/products
 */

router.post('/', postGetProducts);
router.get('/search',getProducts);

router.post('/addCart', getProduct);

router.get('/:id',getProductByID);

module.exports = router;
