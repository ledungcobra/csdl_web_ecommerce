const asyncHandler = require("express-async-handler");
const service = require("../services/CartService");


// @desc fetch all products
// @access Public
module.exports.postCart1 = asyncHandler(async(req,res)=>{

    const user= req.body.user;

    const {cart} = req.body;
    const result = await service.postCart(cart,user);
    res.json(result);
})

module.exports.getCart = asyncHandler(async(req,res)=>{
    console.log(req.body);
    const result = await service.getCart(req.body.id);
    res.json(result);
})

