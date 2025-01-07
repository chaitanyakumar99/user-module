//middleware:-It's a series of functions that are used to handle requests and responses,
//            and can perform a variety of tasks

const User = require("../models/userModel");
const jwt = require('jsonwebtoken')

const isLoggedIn = async (req, res, next) => {
    if(!req.headers) {
        return res.status(401).json({
            error: 'Unauthorized Access'
        })
    }
    
    const token = req?.headers?.authorization?.split(" ")[1]
    
    if(!token) {
        return res.status(401).json({
            error: 'Login first to access this page'
        })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if(!decoded) {
        return res.status(401).json({
            error: 'Unauthorized Access'
        })
    }

    req.user = await User.findById(decoded.id);
    next();
}

module.exports = isLoggedIn