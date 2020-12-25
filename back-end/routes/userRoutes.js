const express = require('express');
const protect = require("../middleware/authMiddleware.js");
const {putChangeCustomerProfile} = require("../controllsers/userController");
const {registerCustomer} = require("../controllsers/userController");
const {authCustomer} = require("../controllsers/userController");
const {getCustomerProfile} = require("../controllsers/userController");

const router = new express.Router();

router.route('/register').post(registerCustomer);
router.route('/login').post(authCustomer);
router.route('/profile').get(protect, getCustomerProfile);
router.route('/profile').put(protect,putChangeCustomerProfile);

module.exports = router;