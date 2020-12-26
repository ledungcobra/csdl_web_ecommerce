const asyncHandler = require("express-async-handler");
const {getType} = require("../services/typeService");


// @desc fetch all products
// @access Public
module.exports.getType = asyncHandler(
    async (req, res) => {

        const result = await getType();
        res.json(result);

    })
;
