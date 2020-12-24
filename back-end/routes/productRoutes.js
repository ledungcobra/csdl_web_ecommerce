const express = require('express');
const {postGetProducts} = require('../controllsers/productController.js');
const db = require("../config/db.js");

const router = new express.Router();

/**
 * POST route /api/products
 */

router.post('/', postGetProducts);

module.exports = router;
