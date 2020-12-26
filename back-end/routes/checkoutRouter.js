const express = require('express');
const {postAddAddress} = require("../controllsers/checkoutController");
const {postCartCheckout} = require("../controllsers/checkoutController");
const {postCart} = require("../controllsers/cartControlller");
const {getWard} = require("../controllsers/checkoutController");
const {getDistrict} = require("../controllsers/checkoutController");
const {getProvince} = require("../controllsers/checkoutController");




const router = new express.Router();

/**
 * POST route /api/checkout
 */

router.get('/province',getProvince );
router.get('/district/:id',getDistrict);
router.get('/ward/:id',getWard);
router.post('/addAddress', postAddAddress);


module.exports = router;
