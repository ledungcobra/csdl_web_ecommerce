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

module.exports.postCart = (customerID)=>{
    const dataCart = JSON.parse(localStorage.getItem("cartItems"));
    dataCart.map((data)=>{
        db.sql.query(
            `Insert Into Good_Cart(Id_GD,Id_Customer,GC_Number)
                Values(${data.product}, ${customerID}, ${data.qty}`
        ).then(({recordsets}) => {
            console.log(recordsets);}).catch(e => console.log(e));
    })
}
