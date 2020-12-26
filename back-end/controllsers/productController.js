const asyncHandler = require("express-async-handler");
const {getProduct} = require("../services/productsService");
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
module.exports.getProduct = asyncHandler(async(req,res)=>{
    console.log(req.body);
    const result = await getProduct(req.body.id);
    res.json(result);
})

