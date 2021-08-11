const express = require('express');
const {validatePassword, generateToken, generateSecret} = require('../service/auth.service')

const { secretKey, expiresIn } = require('../config').webToken;
const UserDao = require('../dao/dao.user');

module.exports = () => {
    const api = express.Router();

    api.post('/login', async (req, res) => {
        const { username, password } = req.body;
        try {
            let {secret, ...user} = await UserDao.getOneByUsername(username);
            let flag = await validatePassword(password, secret);
            if (flag) {
                let token = await generateToken(user._id, username);
                const payload = { user: user, token: token };
                res.status(200).json({payload});
            } else {
                res.status(400).json('invalid credentials');
            }
        } catch (err) {
            res.status(500).json(err);
        }
    });

    api.post('/register', async (req, res) => {
        const {username, password, firstName, lastName} = req.body;
        try {
            secret = await generateSecret(password);
            const savedUser = await UserDao.addNew({username, firstName, lastName, secret});
            res.status(200).json(savedUser);
        } catch (err) {
            res.status(500).json(err);
        }
    });

    return api;
}