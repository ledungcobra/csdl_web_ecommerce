const asyncHandler = require("express-async-handler");
const service = require("../services/typeService");
const {getType} = require("../services/typeService");


// @desc fetch all products
// @access Public
module.exports.getType = asyncHandler(
    async (req, res) => {

        const result = await getType();
        res.json(result);

    })
;
module.exports.getProductByType = asyncHandler(async(req,res)=>{
    console.log(req.params)
    const result = await service.getProductByTypeService(req.params.type);
    res.json(result);
})

