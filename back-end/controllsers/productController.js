const asyncHandler = require("express-async-handler");
const {getProducts}  = require('../services/productsService');

// @desc fetch all products
// @access Public
module.exports.postGetProducts = asyncHandler(
    async (req, res) => {

        let limit = parseInt(req.body.limit);
        let page = parseInt(req.body.page);

        const result = await getProducts(page,limit);
        res.json(result);

    })
;

