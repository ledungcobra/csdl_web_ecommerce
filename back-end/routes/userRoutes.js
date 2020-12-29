const express = require('express');
const protect = require("../middleware/authMiddleware.js");
const {getInvoiceCartController} = require("../controllsers/userController");
const {getInvoicesController} = require("../controllsers/userController");
const {rateGoodController} = require("../controllsers/userController");
const {putChangeCustomerProfile} = require("../controllsers/userController");
const {registerCustomer} = require("../controllsers/userController");
const {authCustomer} = require("../controllsers/userController");
const {getCustomerProfile} = require("../controllsers/userController");

const router = new express.Router();

router.route('/register').post(registerCustomer);
router.route('/login').post(authCustomer);
router.route('/profile').get(protect, getCustomerProfile);
router.route('/profile').put(protect,putChangeCustomerProfile);
router.route('/rate').post(rateGoodController);
router.route('/invoice').get(getInvoicesController);
router.route('/invoice/cart').get(getInvoiceCartController);

module.exports = router;