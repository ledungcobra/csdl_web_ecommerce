const db = require('../config/db');

module.exports.getCart=(customerID)=>{
    return new Promise((res, rej)=>{
        db.sql.query(
            `SELECT *
                FROM GOOD_CART WHERE Id_Customer = ${customerID}`
        ).then(({recordsets}) => {

            console.log(recordsets[0])
            if (recordsets[0].length > 0) {
                res(recordsets[0][0]);
            } else {
                rej("Cart Empty");
            }
        }).catch(e => rej(e));
    })
}

module.exports.postCart = (cartItems,userid)=>{
    return new Promise((res, rej)=> {
        let query = `Insert into Good_cart (id_gd,id_customer, product_Number) values `;

        query+= cartItems.reduce((acc,data)=>acc+ `(${data.product},${userid},${data.qty} ),`,'');
        query = query.slice(0,query.length-1);

        db.sql.query( query ).then( () => { res()} ).catch((e) => {rej(e)} )


    })
}
