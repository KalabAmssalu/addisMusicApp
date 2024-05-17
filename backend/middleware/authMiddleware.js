const jwt = require('jsonwebtoken')
const User = require('../models/User')

const protect = async (req, res, next) =>{
    let token;

    token = req.cookies.jwt;

    if(token){
        try {
            const decoded = jwt.verify(token, process.env.JWT )

            req.user = await User.findById(decoded.userId).select('-password');
            next();
        } catch (error) {
            res.status(401).json({message: 'Not Authorised,invalid token'})
        }
    }else {
        res.status(401).json({message: 'Not Authorised, no token'})
    }
}

module.exports = protect;