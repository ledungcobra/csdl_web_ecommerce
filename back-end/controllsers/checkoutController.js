const asyncHandler = require("express-async-handler");

const checkoutService = require("../services/checkoutService");



// @desc fetch all products
// @access Public
module.exports.getProvince = asyncHandler(
    async (req, res) => {
        console.log("Hello")
        const result = await checkoutService.getProvince();
        res.json(result);

    })
;
module.exports.getDistrict = asyncHandler(async(req,res)=>{
    console.log(req.params);
    const result = await checkoutService.getDistrict(req.params.id);
    res.json(result);
})

module.exports.getWard = asyncHandler(async(req,res)=>{

    const result = await checkoutService.getWard(req.params.id);
    res.json(result);
})


module.exports.postAddAddress = asyncHandler(async(req,res)=>{
    const result =  checkoutService.postAddressService(req.body.shippingData,req.body.userid);
    res.json(result);
});




