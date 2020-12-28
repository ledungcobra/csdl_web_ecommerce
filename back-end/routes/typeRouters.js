const express = require('express');
const {getProductByType} = require("../controllsers/typeController");

const {getType} = require("../controllsers/typeController");



const router = new express.Router();

/**
 * POST route /api/types
 */

router.post('/', getType);
router.get('/:type', getProductByType);

module.exports = router;
