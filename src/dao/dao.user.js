const UserModel = require('../models/user.model');
const { generateSecret } = require('../service/auth.service');

class UserDao {
    constructor() { }

    addNew(obj) {
        return new Promise((resolve, reject) => {
            let newUser = new UserModel(obj);
            newUser.save((err, savedUser) => {
                if (err) {
                    reject(err);
                }
                const {secret, ...user} = savedUser.toObject();
                resolve(user);
            });
        });
    }

    getAll() {
        return new Promise((resolve, reject) => {
            UserModel.find({}, { secret: 0 }, (err, usersArray) => {
                if (err) {
                    reject(err);
                }
                resolve(usersArray);
            });
        });
    }

    getOneByEmail(email) {
        return new Promise((resolve, reject) => {
            UserModel.findOne({ email }, (err, singleUser) => {
                if (err) {
                    reject(err);
                }
                resolve(singleUser?.toObject());
            });
        });
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            UserModel.findOneAndDelete(id, (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve('User Deleted Successfully!');
            });
        });
    }
}

module.exports = new UserDao();