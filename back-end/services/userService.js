const db = require('../config/db');
const mssql = require('mssql')
module.exports.getCustomerAuth = (email) => {
    return new Promise((res, rej) => {
        db.sql.query(
            `SELECT CUSTOMER_EMAIL,ID_CUSTOMER,CUSTOMER_PASSWORD,CUSTOMER_NAME
                FROM CUSTOMER
                WHERE CUSTOMER_EMAIL = '${email}'`
        ).then(({recordsets}) => {

            console.log(recordsets[0])
            if (recordsets[0].length > 0) {
                res(recordsets[0][0]);
            } else {
                rej("Cannot find this user");
            }
        }).catch(e => rej(e));
    });
}

/**
 *
 * @param email
 * @returns {
Id_Customer,
Customer_Phone,
Customer_Email,
Customer_Name,
Customer_Gender,
Customer_Birthday
 * }
 */
module.exports.getCustomerInfoDetail = (email) => {
    return new Promise((res, rej) => {
        db.sql.query(`
       select Id_Customer,
                Customer_Phone,
                Customer_Email,
                CUSTOMER_NAME,
                Customer_Gender,
                Customer_Birthday
        from Customer
        where customer_email = '${email}'
       `).then(({recordsets}) => {
            if (recordsets[0].length > 0) {
                res(recordsets[0][0]);
            } else {
                rej('Cannot find this user');
            }
        }).catch(e => rej(e));
    });
}

module.exports.checkIfExistCustomer = (email) => {
    return new Promise((res, rej) => {
        db.sql.query(`select id_customer from customer where customer_email = '${email}'`)
            .then(({recordsets}) => {
                if(recordsets[0].length>0){
                    res(true);
                }else{
                    res(false);
                }
            }).catch(e=>rej(e));
    })

}

module.exports.addNewCustomer = (name, email, gender, password, phoneNumber, birthday) => {
    return new Promise((res,rej)=>{

        const query = `
                    insert into 
                    customer(customer_email,customer_phone,customer_password, customer_name,customer_gender,customer_birthday) 
                    values('${email}', '${phoneNumber}', '${password}',N'${name}',${gender},'${birthday}')

                    
                    select id_customer
                    from customer
                    where customer_email = '${email}'
                    `


        console.log(query);

        db.sql.query(query)
            .then(({recordsets})=>{
               if(recordsets[0].length>0){
                   res(true)
               }
            })

            .catch(e=>rej(e));

    })
}

module.exports.rateGoodService= (userid, goodid, rate) => {
    return new Promise((res,rej)=>{
        var request = db.sql.request();
        request.input('id_customer',mssql.INT,userid)
        request.input('id_GD', mssql.INT,goodid)
        request.input('rate', mssql.INT,rate)
        request.execute('RatingGood',(err, result) =>{
            console.dir(err);
            res(result.returnValue)
            rej(err)
        })
    });
}


module.exports.getInvoicesService= (userid) => {
    return new Promise((res,rej)=>{
    db.sql.query(`   select * from Invoice  where Id_Customer = '${userid}'
       `).then(({recordsets}) => {
        if (recordsets[0].length > 0) {
            res(recordsets[0]);
        } else {
            rej('Cannot find invoice this user');
        }
    }).catch(e => rej(e));
});
}

module.exports.getInvoiceCartService= (invoiceid) => {
    return new Promise((res,rej)=>{
    db.sql.query(`select gi.Id_GD ,gi.GD_Name GD_Name,gi.GD_Price GD_Price,gi.Supplier_Name Supplier_Name, gi.GI_Number GI_Number, Thumbnail_URL from Good_Invoice gi,GoodDetail gd  where gi.Id_Invoice = gd.Id_GD and gi.Id_Invoice= ${invoiceid}
       `).then(({recordsets}) => {
        if (recordsets[0].length > 0) {
            res(recordsets[0]);
            console.log(recordsets)
        } else {
            rej('Cannot find invoice this user');
        }
    }).catch(e => rej(e));
});
}

module.exports.updateCustomer = (name, email, gender, birthday, phoneNumber, password)=>{
    return new Promise((res,rej)=>{
        const query = `update customer 
                        set customer_name = '${name}',
                        customer_email = '${email}',
                        customer_gender = ${gender},
                        customer_birthday = '${birthday}'
                        `
        db.sql.query(query).then(result=>{

        }).catch(e=>{

        });

    });
}