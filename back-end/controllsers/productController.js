const asyncHandler =require("express-async-handler");
const db =require("../config/db.js");

// @desc fetch all products
// @access Public
module.exports.postGetProducts = asyncHandler(async (req, res,next) => {

    const {limit,page} = req.body;
    console.log(req.body);
    const QUERY_STATEMENT = `SELECT TOP ${limit} * FROM GOODDETAIL OFFSET ${(page-1)*limit} ROWS`;
    console.log(QUERY_STATEMENT)
    const {recordsets} = await db.sql.query(QUERY_STATEMENT);

    res.json(recordsets[0]);
});

