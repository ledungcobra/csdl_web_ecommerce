const db = require('../config/db');

module.exports.getCart=(customerID)=>{
    return new Promise((res, rej)=>{
        db.sql.query(
            `SELECT gc.id_gd product, gc.gd_name name, gc.product_number qty
                , gd.thumbnail_url image, gd.gd_price price, gd.gd_discount_rate discount,
                gd.gd_remain remain
                FROM GOOD_CART gc join gooddetail gd on gd.id_gd = gc.id_gd WHERE Id_Customer = ${customerID}`
        ).then(({recordsets}) => {
            if (recordsets[0].length > 0) {
                res(recordsets[0]);
            } else {
                rej("Cart Empty");
            }
        }).catch(e => rej(e));
    })
}
/*
* cart:{
*   product:
*
* }
* */
module.exports.postCart = (cartItems,userid)=>{
    return new Promise((res, rej)=> {
        if(cartItems.length === 0) return res();
        let query = `Insert into Good_cart (id_gd,id_customer, product_Number) values `;

        query+= cartItems.reduce((acc,data)=>acc+ `(${data.product},${userid},${data.qty} ),`,'');
        query = query.slice(0,query.length-1);

        db.sql.query( query ).then( () => { res()} ).catch((e) => {rej(e)} )


    })
}
