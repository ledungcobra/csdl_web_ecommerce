const db = require('../config/db');

module.exports.getProvince=()=>{
    return new Promise((res, rej)=>{
        db.sql.query(
            `SELECT id,name
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

module.exports.getDistrict = (id)=>{
    return new Promise((res, rej)=> {

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
module.exports.getWard = (id)=>{
    return new Promise((res, rej)=> {
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
module.exports.postAddressService = (addressData,userid)=>{

    return new Promise((res, rej)=> {
        console.log("postAddressService")

        console.log(userid)



        let QUERY_STRING = `Insert into DeliveryInformation(Id_Customer,DI_Name,DI_PhoneNumber,
            DI_Province_Id,DI_District_Id,DI_Ward_Id,DI_Address) values (${userid},N'${addressData.name}',
            '${addressData.phoneNumber}',${addressData.provinceOrCity},${ addressData.district},${addressData.ward},N'${addressData.address}')`
        console.log(QUERY_STRING)
        db.sql.query(QUERY_STRING).then(res()).catch(e => rej(e));
    })
}

