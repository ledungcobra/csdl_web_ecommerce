const jwt =require('jsonwebtoken');
const asyncHandler =require("express-async-handler");
const {getCustomerInfoDetail} = require("../services/userService");

const protect = asyncHandler(async (req, res, next) => {

    let token;

    const {authorization} = req.headers;

    if (authorization && authorization.startsWith('Bearer ')) {

        try {

            token = authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decoded);

            req.customer= await getCustomerInfoDetail(decoded.email);

            if(req.customer){
                next();
            }else{
                res.status(404);
                throw new Error('Can not find this customer');
            }

        } catch (e) {
            console.error(e);
            res.status(401);
            throw new Error('Not authorized token failed');
        }

    }

    if (!token) {
        res.status(401);
        throw new Error('Not authorize not token')
    }
});


module.exports =protect;

