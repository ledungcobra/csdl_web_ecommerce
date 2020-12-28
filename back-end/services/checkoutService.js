const db = require('../config/db');

module.exports.getProvince = () => {
    return new Promise((res, rej) => {
        db.sql.query(
            `SELECT id,name,
                delivery_price price
                FROM Province`
        ).then(({recordsets}) => {


            if (recordsets[0].length > 0) {
                res(recordsets[0]);
            } else {
                res("Province Empty");
            }
        }).catch(e => rej(e));
    })
}

module.exports.getDistrict = (id) => {
    return new Promise((res, rej) => {

        db.sql.query(
            `Select id,name from District where ProvinceId=${id} order by name `
        ).then(({recordsets}) => {
            console.log(recordsets);
            if (recordsets[0].length > 0) {
                res(recordsets[0]);
            } else {
                res("District Empty");
            }
        }).catch(e => console.log(e));
    })
}
module.exports.getWard = (id) => {
    return new Promise((res, rej) => {
        db.sql.query(
            `Select id,name from Ward where DistrictID=${id} `
        ).then(({recordsets}) => {
            if (recordsets[0].length > 0) {
                res(recordsets[0]);
            } else {
                res("Ward Empty");
            }
        }).catch(e => console.log(e));
    })
}
module.exports.postAddressService = (addressData, userid) => {

    return new Promise((res, rej) => {

        let QUERY_STRING = `Insert into DeliveryInformation(Id_Customer,DI_Name,DI_PhoneNumber,
            DI_Province_Id,DI_District_Id,DI_Ward_Id,DI_Address) values (${userid},N'${addressData.name}',
            '${addressData.phoneNumber}',${addressData.provinceOrCity},${addressData.district},${addressData.ward},N'${addressData.address}')`
        console.log(QUERY_STRING)
        db.sql.query(QUERY_STRING).then(() => res()).catch(e => rej(e));
    })
}


module.exports.getUserAddressService = (userid) => {
    return new Promise((res, rej) => {

        let QUERY_STRING = `select di_address+', '+ di_ward_name+','+di_district_name+','+di_province_name address, di_ward_name ward,di_district_name district,di_province_name province, 
                           DI_PhoneNumber phonenumber,di.id_di id,di_name name, p.delivery_price price 
                           from DeliveryInformation di join province p on di.di_province_id = p.id where id_customer = ${userid}`
        db.sql.query(QUERY_STRING).then(({recordsets}) => {
            if (recordsets[0].length > 0) {
                res(recordsets[0])
            } else {
                rej('Not found');
            }
        }).catch(e => rej(e));
    })
}

module.exports.getTypePay = () => {
    return new Promise((res, rej) => {

        let QUERY_STRING = `select tp_name name, id_tp id from typepay`
        db.sql.query(QUERY_STRING).then(({recordsets}) => {
            if (recordsets[0].length > 0) {
                res(recordsets[0])
            } else {
                rej('Not found');
            }
        }).catch(e => rej(e));
    })
}

module.exports.getVoucher = (type, cus_id) => {
    return new Promise((res, rej) => {

        let QUERY_STRING = `select id_voucher id,voucher_name name,
                voucher_startdate start_date, voucher_enddate end_date,
                 voucher_value value
                    from getVoucherByType(${type},${cus_id})

                `
        db.sql.query(QUERY_STRING).then(({recordsets}) => {
            if (recordsets[0].length > 0) {
                res(recordsets[0])
            } else {
                rej('Not found');
            }
        }).catch(e => rej(e));
    })
}


module.exports.addAnInvoice = async (totalPrice, shipID, invoiceID, payID, di_id, id_customer, cartItems) => {

    let query = `insert into Good_Invoice(Id_GD,Id_Invoice,gi_number) values`
    query += cartItems.reduce((acc, item) => acc + `(${item.product},@id,${item.qty}),`, '');
    query = query.slice(0, query.length - 1);
    let QUERY_STRING = `
                insert into Invoice(Invoice_InvoiceDate,Invoice_TotalPrice,Id_ShipVoucher
                        ,Id_ProductVoucher,Id_TP,Id_DI,Id_Customer,Id_StatusInvoice)
                            values(getdate(),${totalPrice},${shipID},${invoiceID},${payID},${di_id},${id_customer},1)
                          declare @id int                   
                          set @id =(select max(id_invoice)
                          from invoice
                          where id_customer = ${id_customer})   
                            ` + query;
    console.log(QUERY_STRING);
    return db.sql.query(QUERY_STRING);
}

