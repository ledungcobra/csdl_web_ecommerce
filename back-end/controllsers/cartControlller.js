const asyncHandler = require("express-async-handler");
const service = require("../services/CartService");


// @desc fetch all products
// @access Public
module.exports.postCart1 = asyncHandler(async(req,res)=>{

    const user= req.body.user;
    const {cartItems} = req.body;
    const result = await service.postCart(cartItems,user);
    res.json(result);
})

module.exports.getCart = asyncHandler(async(req,res)=>{
    const {id} = req.query
    const result = await service.getCart(id);
    res.json(result);
});


