const db = require("../config/db");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken.js");


// @desc Auth user  & get token
// @access Public
//route POST api/users/login
const authUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;

    try {
        const log = `SELECT CUSTOMER_EMAIL,CUSTOMER_ID,ID_CUSTOMER,CUSTOMER_PASSWORD
         WHERE CUSTOMER_EMAIL = ${email} `;


        const {recordsets} = await db.sql.query(
            `SELECT CUSTOMER_EMAIL,ID_CUSTOMER,CUSTOMER_PASSWORD
                FROM CUSTOMER
                WHERE CUSTOMER_EMAIL = '${email}'`
        )
        console.log(recordsets[0]);
        if (recordsets[0].length > 0) {

            if (recordsets[0][0]['CUSTOMER_PASSWORD'].trim() === password) {
                res.json({
                    token: generateToken(email),
                    email,
                    message: 'success'
                });
            } else {
                res.status(401).json({
                    message: 'Password or username does not match'
                });
            }

        } else {
            res.status(404).json({
                message: 'User not found'
            });
        }
    } catch (e) {
        throw new Error('Error when authorizing!!' + e);
    }


});

const getUserProfile = asyncHandler(async (req, res) => {

    const user = req.user;

    if (user != null) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(404);
        throw new Error('Invalid email or password');
    }

});

const registerUser = asyncHandler(async (req, res) => {

    const {email, password, name} = req.body;

    const userExits = await User.findOne({email});

    if (userExits) {
        res.status(400);
        throw new Error('User already exists');
    }

    const user = await User.create({
        name,
        email,
        password
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        });
    } else {
        res.status(400);
        throw  new Error('Invalid user data');
    }


});

module.exports = {
    authUser,
    getUserProfile,
    registerUser
}