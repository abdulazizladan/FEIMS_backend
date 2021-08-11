const express = require('express');
const UserDao = require('../dao/dao.user');

module.exports = () => {
    const api = express.Router();

    api.get('', async (req, res) => {
        try {
            const usersArray = await UserDao.getAll();
            res.status(200).json(usersArray);
        } catch (err) {
            res.status(500).json(err);
        }
    });

    return api;
}