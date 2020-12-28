const asyncHandler = require("express-async-handler");

const checkoutService = require("../services/checkoutService");



// @desc fetch all products
// @access Public
module.exports.getProvince = asyncHandler(
    async (req, res) => {
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
module.exports.getUserAddress = asyncHandler(async(req,res)=>{
    const result =  await checkoutService.getUserAddressService(req.params.userID);
    res.json(result);
});

module.exports.getTypePay = asyncHandler(async(req,res)=>{
   const result = await checkoutService.getTypePay();
   res.json(result);
});

module.exports.getVoucher = asyncHandler(async (req,res)=>{
    const {type} = req.query;
    const {id} = req.query ;

    const result = await checkoutService.getVoucher(type,id);
    res.json(result);

});


module.exports.postInvoice = asyncHandler(async(req,res)=>{

    const {totalPrice,shippingVoucherID,invoiceVoucherID,typePayID,userID,diID,cartItems} = req.body;
    await checkoutService.addAnInvoice(totalPrice,shippingVoucherID,invoiceVoucherID,typePayID,diID,userID,cartItems)
    res.json({
        message:'Oke'
    });

})
