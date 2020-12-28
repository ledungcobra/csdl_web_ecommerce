const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken.js");
const {getInvoiceCartService} = require("../services/userService");
const {getInvoicesService} = require("../services/userService");
const {rateGoodService} = require("../services/userService");
const {addNewCustomer} = require("../services/userService");
const {checkIfExistCustomer} = require("../services/userService");
const {getCustomerInfoDetail} = require("../services/userService");
const {getCustomerAuth} = require("../services/userService");


// @desc Auth user  & get token
// @access Public
//route POST api/users/login
const authCustomer = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    console.log(req.body)
    try {

        const user = await getCustomerAuth(email);
        console.log("get user" + user)
        if (user['CUSTOMER_PASSWORD'].trim() === password) {
            const {CUSTOMER_NAME,ID_CUSTOMER} = user;
            res.json({
                token: generateToken(email),
                email,
                name: CUSTOMER_NAME,
                message: 'success',
                id:ID_CUSTOMER

            });

        } else {
            res.status(401).json({
                message: 'Password or username does not match'
            });
        }


    } catch (e) {
        throw new Error('Error when authorizing!!' + e);
    }


});


const getCustomerProfile = asyncHandler(async (req, res) => {

    const customer = req.customer;

    if (customer) {
        res.json({
            token: generateToken(customer),
            status: 'ok',
            customer: {
                ...customer
            }
        })
    } else {
        res.status(404);
        throw new Error('Invalid email or password');
    }

});


/**
 *
 * @type {*|express.RequestHandler}
 *returns
 * {
email, password, name
 }
 */

const registerCustomer = asyncHandler(async (req, res) => {

    const {phoneNumber, password, email, name, gender, birthday} = req.body;

    const isExistCustomer = await checkIfExistCustomer(email);

    if (isExistCustomer) {
        res.status(400);
        throw new Error('Email already exists please take another email');
    }

    const result = await addNewCustomer(name, email, gender, password, phoneNumber, birthday);

    if (result) {
        res.status(201).json({
            token: generateToken(email),
            email,
            name
        })
    } else {
        res.status(400)
        throw new Error('Cannot register new account');
    }

});

const putChangeCustomerProfile = asyncHandler(async (req, res) => {

    const {phoneNumber, password, email, name, gender, birthday} = req.body;
    try {

        const result = await updateCustomer(name, email, gender, birthday, phoneNumber, password);

        if (result) {
            res.json({
                token: generateToken(email),
                email
            })
        } else {
            res.status(404);
            throw new Error('Customer not found')
        }

    } catch (e) {
        throw  e;
    }

});


const rateGoodController = asyncHandler(async (req, res) => {

    const {userid, goodid, rate} = req.body;
    console.log(req.body)


    const result = await rateGoodService(userid, goodid, rate);

    if (result) {
        res.status(201).json({
        })
    } else {
        res.status(400)
        throw new Error('Cannot rate this product');
    }

});

const getInvoicesController = asyncHandler(async (req, res) => {

    const userid = req.query.userid;
    console.log(req.query)


    const result = await getInvoicesService(userid);

    if (result) {
        res.status(201).json({result})
    } else {
        res.status(400)
        throw new Error('Cannot rate this product');
    }

});

const getInvoiceCartController = asyncHandler(async (req, res) => {

    const invoiceid = req.query.invoiceID;
    console.log(req.query)


    const result = await getInvoiceCartService(invoiceid);

    if (result) {
        res.status(201).json({result})
    } else {
        res.status(400)
        throw new Error('Cannot rate this product');
    }

});


module.exports = {
    authCustomer,
    getCustomerProfile,
    registerCustomer,
    putChangeCustomerProfile,
    rateGoodController,
    getInvoicesController,
    getInvoiceCartController
}