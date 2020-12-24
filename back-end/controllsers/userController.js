const asyncHandler =require("express-async-handler");
const User =require('../models/userModel.js');
const generateToken =require("../utils/generateToken.js");

// @desc Auth user  & get token
// @access Public
//route POST api/users/login
const authUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email});

    if (user != null && (await user.comparePassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
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

    if(userExits){
        res.status(400);
        throw new Error('User already exists');
    }

    const user = await User.create({
        name,
        email,
        password
    });

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        });
    }else{
        res.status(400);
        throw  new Error('Invalid user data');
    }



});

export {
    authUser,
    getUserProfile,
    registerUser
}