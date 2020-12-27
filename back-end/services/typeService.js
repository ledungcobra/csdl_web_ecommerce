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
module.exports.getProductByTypeService=(urlType)=>{
    return new Promise((res, rej)=>{
        const QUERY_STRING = `SELECT * FROM GoodDetail WHERE Id_TG = (Select Id_TG from typegood where TG_URL='${urlType}') ORDER BY ID_GOOD OFFSET 10 ROWS FETCH NEXT 10 ROWS ONLY`
        console.log(QUERY_STRING);
        db.sql.query(QUERY_STRING ).then(({recordsets}) => {

            console.log(recordsets[0])
            if (recordsets[0].length > 0) {
                res(recordsets[0]);
            } else {
                rej("Type Empty");
            }
        }).catch(e => rej(e));
    })
}
