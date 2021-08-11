const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const { secretKey, expiresIn } = require('../config').webToken;

function validatePassword(password, hash) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hash, (err, same) => {
            if (err) {
                reject(err);
            }
            resolve(same);
        });
    });
}

function generateSecret(password) {
    console.log(password);
    return new Promise((resolve, reject) => {
        bcrypt.genSalt((err, salt) => {
            if (err) reject(err);
            else bcrypt.hash(password, salt, (err, hash) => {
                if (err) reject(err);
                else resolve(hash);
            });
        });
    });
}

function generateToken(id, username) {
    return new Promise((resolve, reject) => {
        jsonwebtoken.sign({id, username}, secretKey, {expiresIn}, (err, token) => {
            if (err) {
                reject(err);
            }
            resolve(token);
        });
    });
}

module.exports = {validatePassword, generateSecret, generateToken}