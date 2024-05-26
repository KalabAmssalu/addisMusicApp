const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
    let token;

    // Check token is in the Authorization header or in cookies
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies.jwt) {
        token = req.cookies.jwt;
    }

    if (token) {
        try {
         
            const decoded = jwt.verify(token, process.env.JWT);
            req.user = await User.findById(decoded.userId).select('-password');
            next();
        } catch (error) {
            console.error('Token verification failed:', error);
            res.status(401).json({ message: 'Not Authorized, invalid token' });
        }
    } else {
        res.status(401).json({ message: 'Not Authorized, no token' });
    }
};

module.exports = protect;
