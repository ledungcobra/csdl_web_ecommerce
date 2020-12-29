const express = require('express');
const {postInvoice} = require("../controllsers/checkoutController");
const {getVoucher} = require("../controllsers/checkoutController");
const {getTypePay} = require("../controllsers/checkoutController");
const {getUserAddress} = require("../controllsers/checkoutController");
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
router.post('/',postInvoice);

router.get('/province',getProvince );

router.get('/district/:id',getDistrict);
router.get('/ward/:id',getWard);
router.get('/address/:userID',getUserAddress);
router.post('/addAddress', postAddAddress);
router.get('/typepay', getTypePay);
router.get('/voucher', getVoucher);

module.exports = router;
