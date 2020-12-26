const asyncHandler = require("express-async-handler");
const {postCart} = require("../services/CartService");
const {getCart} = require("../services/CartService");

// @desc fetch all products
// @access Public
module.exports.postCart = asyncHandler(
    async (req, res) => {

        const result = await postCart(req.body.id);
        res.json(result);

    })
;
module.exports.getCart = asyncHandler(async(req,res)=>{
    console.log(req.body);
    const result = await getCart(req.body.id);
    res.json(result);
})

