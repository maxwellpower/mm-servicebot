// middleware/verifyToken.js
require('dotenv').config();

function verifyToken(expectedToken) {
    return (req, res, next) => {
        const token = req.body.token;

        if (token !== expectedToken) {
            return res.status(403).json({ text: 'Unauthorized: Invalid token.' });
        }

        next();
    };
}

module.exports = verifyToken;

