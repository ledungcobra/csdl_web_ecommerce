const express = require('express');
const db = require("../config/db.js");
const {postCart1} = require("../controllsers/cartControlller");




const router = new express.Router();

/**
 * POST route /api/products
 */

router.post('/', postCart1);


module.exports = router;
