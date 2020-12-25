const db = require('../config/db');

module.exports.getProducts = (page, limit) => {

    return new Promise((res, rej) => {

        const QUERY_STATEMENT = `SELECT * FROM GOODPRESENTED ORDER BY ID_GOOD OFFSET ${(page - 1) * limit} ROWS FETCH NEXT ${limit} ROWS ONLY`;

        db.sql.query(QUERY_STATEMENT)
            .then(({recordsets})=> {
                res(recordsets[0])
            })
            .catch(e => rej(e));

    });
}

