const db = require('../config/db');

module.exports.getCustomerAuth = (email) => {
    return new Promise((res, rej) => {
        db.sql.query(
            `SELECT CUSTOMER_EMAIL,ID_CUSTOMER,CUSTOMER_PASSWORD
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
       select c.Id_Customer,
                c.Customer_Phone,
                c.Customer_Email,
                ci.Customer_Name,
                ci.Customer_Gender,
                ci.Customer_Birthday
        from Customer c join CustomerInfo ci 
        ON c.Id_Customer = ci.Id_Customer
        where c.customer_email = '${email}'
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
                    customer(customer_email,customer_phone,customer_password) 
                    values('${email}', '${phoneNumber}', '${password}')
                   
                    select id_customer
                    from customer
                    where customer_email = '${email}'
                    `

        db.sql.query(query)
            .then((re)=>{
                res(true);
            })
            .catch(e=>rej(e));

    })
}

module.exports.updateCustomer = (name, email, gender, birthday, phoneNumber, password)=>{
    return new Promise((res,rej)=>{
        const query = `update customer 
                        set customer_name = '${name}',
                        customer_email = '${email}',
                        customer_gender = ${gender},
                        customer_birthday = '${birthday}',
                        `
        db.sql.query(query).then(result=>{

        }).catch(e=>{

        });

    });
}