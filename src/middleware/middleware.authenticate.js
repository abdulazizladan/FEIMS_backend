const jsonwebtoken = require('jsonwebtoken');
const { secretKey } = require('../config').webToken;

function authenticate() {
    return async (req, res, next) => {
        const token = req.headers['x-token'];
        if (token) {
            try {
                const validToken = await verifyTokenPromisified(token);
                req.userAuth = {id: validToken.userId};
                next();
            } catch (err) {
                res.status(401).json('invlid access token');
            }
        } else {
            res.status(401).json('invlid acess token');
        }
    }
}

function verifyTokenPromisified(token) {
    return new Promise((resolve, reject) => {
        jsonwebtoken.verify(token, secretKey, (err, validToken) => {
            if (err) {
                reject(err);
            }
            resolve(validToken);
        })
    })
}

module.exports.authenticate = authenticate;
