const express = require('express');
const {postGetProducts} = require('../controllsers/productController.js');
const db = require("../config/db.js");
const {getProducts} = require("../controllsers/productController");

const router = new express.Router();

/**
 * POST route /api/products
 */

router.post('/', postGetProducts);
router.get('/search',getProducts);


module.exports = router;
