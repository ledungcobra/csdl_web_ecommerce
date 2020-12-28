const db = require('../config/db');

module.exports.getType=()=>{
    return new Promise((res, rej)=>{
        db.sql.query(
            `SELECT * FROM TypeGood`
        ).then(({recordsets}) => {

            if (recordsets[0].length > 0) {
                res(recordsets[0]);
            } else {
                rej("Cart Empty");
            }
        }).catch(e => rej(e));
    })
}
module.exports.getProductByTypeService=(urlType,paging)=>{
    return new Promise((res, rej)=>{
        console.log(paging.page)
        const page = paging.page||1;
        const limit = paging.limit||10;
        const QUERY_STRING = `SELECT * FROM GoodDetail WHERE Id_TG = (Select Id_TG from typegood where TG_URL='${urlType}') ORDER BY ID_GOOD OFFSET ${(page-1)*limit} ROWS FETCH NEXT ${limit} ROWS ONLY`
        console.log(QUERY_STRING);
        db.sql.query(QUERY_STRING ).then(({recordsets}) => {

            if (recordsets[0].length > 0) {
                res(recordsets[0]);
            } else {
                rej("Type Empty");
            }
        }).catch(e => rej(e));
    })
}
