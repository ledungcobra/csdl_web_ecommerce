const express = require('express');
const db = require("../config/db.js");
const {getCart} = require("../services/CartService");
const {postCart} = require("../services/CartService");


const router = new express.Router();

/**
 * POST route /api/products
 */

router.post('/', getCart);
router.post('/addCart', postCart);

module.exports = router;
