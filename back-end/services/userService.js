const db = require('../config/db');

module.exports.getCustomerAuth = (email) => {
    return new Promise((res, rej) => {
        db.sql.query(
            `SELECT CUSTOMER_EMAIL,c.ID_CUSTOMER,CUSTOMER_PASSWORD,ci.CUSTOMER_NAME
                FROM CUSTOMER c  JOIN CUSTOMERINFO ci on c.ID_CUSTOMER = ci.ID_CUSTOMER
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
                ci.CUSTOMER_NAME,
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


        console.log(query);

        db.sql.query(query)
            .then(({recordsets})=>{
               if(recordsets[0].length>0){
                   return recordsets[0][0];
               }
            })
            .then(record=>{
                const nextQuery = `    
                    insert into 
                    customerinfo(id_customer,customer_name,customer_gender,customer_birthday)
                    values(${record.id_customer},N'${name}',${gender},'${birthday}')`
                db.sql.query(nextQuery)
                    .then(result=>res(true))
                    .catch(e=>rej(e));
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
                        customer_birthday = '${birthday}'
                        `
        db.sql.query(query).then(result=>{

        }).catch(e=>{

        });

    });
}