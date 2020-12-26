const db = require('../config/db');

module.exports.getType=()=>{
    return new Promise((res, rej)=>{
        db.sql.query(
            `SELECT * FROM TypeGood`
        ).then(({recordsets}) => {

            console.log(recordsets[0])
            if (recordsets[0].length > 0) {
                res(recordsets[0]);
            } else {
                rej("Cart Empty");
            }
        }).catch(e => rej(e));
    })
}