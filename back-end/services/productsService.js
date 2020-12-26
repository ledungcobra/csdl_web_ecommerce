const db = require('../config/db');

module.exports.getProducts1 = (page, limit) => {

    return new Promise((res, rej) => {

        const QUERY_STATEMENT = `SELECT * FROM GOODPRESENTED ORDER BY ID_GOOD OFFSET ${(page - 1) * limit} ROWS FETCH NEXT ${limit} ROWS ONLY`;

        db.sql.query(QUERY_STATEMENT)
            .then(({recordsets}) => {
                res(recordsets[0])
            })
            .catch(e => rej(e));

    });
}
module.exports.getProduct = (id) => {

    return new Promise((res, rej) => {
        const QUERY_STATEMENT = `SELECT * FROM GOODDETAIL where ID_GD = ${id}`;
        db.sql.query(QUERY_STATEMENT)
            .then(({recordsets})=> {
                if (recordsets[0].length > 0) {
                    res(recordsets[0])
                }
                else {
                    rej(recordsets[0][0])
                }
            })
            .catch(e => rej(e));

    });
}


module.exports.getProducts = (keyword, page, limit) => {

    return new Promise((res, rej) => {
        const QUERY_STATEMENT = `SELECT * 
                        FROM GOODPRESENTED 
                        WHERE dbo.ufn_removeMark(GD_NAME) LIKE dbo.ufn_removeMark('%${keyword}%')
                        ORDER BY ID_GOOD 
                        OFFSET ${(page - 1) * limit} 
                        ROWS FETCH NEXT ${limit} ROWS ONLY
                      `;
        console.log(QUERY_STATEMENT);

        db.sql.query(QUERY_STATEMENT)
            .then(({recordsets}) => {

                if(recordsets[0].length>0){
                    res(recordsets[0])
                }else{
                    rej("Cannot find any products");
                }

            })
            .catch(e => rej(e));

    });
}

module.exports.getProductDetail = (id) => {

    return new Promise((res, rej) => {
        const QUERY_STATEMENT = `SELECT * FROM Gooddetail where ID_GOOD = ${id}`;
        db.sql.query(QUERY_STATEMENT)
            .then(({recordsets})=> {

                if (recordsets[0].length > 0) {
                    res(recordsets[0])
                }
                else {
                    res(recordsets[0][0])
                }
            })
            .catch(e => rej(e));

    });
}
