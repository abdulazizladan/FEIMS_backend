const express = require('express');
const {validatePassword, generateToken, generateSecret} = require('../service/auth.service')

const { secretKey, expiresIn } = require('../config').webToken;
const UserDao = require('../dao/dao.user');

module.exports = () => {
    const api = express.Router();

    api.post('/login', async (req, res) => {
        const { email, password } = req.body;
        try {
            const user = await UserDao.getOneByEmail(email);
            if (user && await validatePassword(password, user.secret)) {
                let token = await generateToken(user._id, email);
                let {secret, ...data} = user;

                const payload = { user: data, token: token };
                res.status(200).json({payload});
            } else {
                res.status(400).json('invalid credentials');
            }
        } catch (err) {
            res.status(500).send(err);
        }
    });

    api.post('/register', async (req, res) => {
        const {email, password, firstName, lastName} = req.body;
        try {
            secret = await generateSecret(password);
            const savedUser = await UserDao.addNew({email, firstName, lastName, secret});
            res.status(200).json(savedUser);
        } catch (err) {
            res.status(500).send(err);
        }
    });

    return api;
}