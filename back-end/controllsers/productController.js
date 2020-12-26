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


module.exports.getProducts = asyncHandler(async (req,res)=>{
    const limit = parseInt(req.query.limit);
    const page = parseInt(req.query.page);
    const keyword = req.query.keyword;

    try{

        const result = await getProducts(keyword,page,limit);
        res.json(result);

    }catch (e){
        res.status(400);
        throw new Error('Oops there is no products here');
    }
});
