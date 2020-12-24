const express = require('express');
const {authUser, getUserProfile, registerUser} = require("../controllsers/userController.js");
const {protect} = require("../middleware/authMiddleware.js");

const router = new express.Router();
// router.route('/').post(registerUser);
router.route('/login').post(authUser);
// router.route('/profile').get(protect, getUserProfile);
module.exports = router;