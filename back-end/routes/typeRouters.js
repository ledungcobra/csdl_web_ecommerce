const express = require('express');

const {getType} = require("../controllsers/typeController");



const router = new express.Router();

/**
 * POST route /api/types
 */

router.post('/', getType);


module.exports = router;
