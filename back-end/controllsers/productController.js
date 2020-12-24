const asyncHandler = require("express-async-handler");
const db = require("../config/db.js");

// @desc fetch all products
// @access Public
module.exports.postGetProducts = asyncHandler(
    async (req, res) => {

        let limit = parseInt(req.body.limit);
        let page = parseInt(req.body.page);

        const QUERY_STATEMENT = `SELECT * FROM GOODDETAIL ORDER BY Id_GD OFFSET ${(page - 1) * limit} ROWS FETCH NEXT ${limit} ROWS ONLY`;
        console.log(QUERY_STATEMENT)
        const {recordsets} = await db.sql.query(QUERY_STATEMENT);
        let resp = recordsets[0];


        res.json(resp);

    })
;

