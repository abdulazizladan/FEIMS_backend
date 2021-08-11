const SiteModel = require('../models/site');

class SiteDao {
    addNew(obj) {
        return new Promise((resolve, reject) => {
            let newSite = new SiteModel(obj);
            newSite.save((err, savedSite) => {
                if (err) {
                    reject(err);
                }
                resolve(savedSite);
            });
        });
    }

    getOne(id) {
        return new Promise((resolve, reject) => {
            SiteModel.findById(id, (err, singleSite) => {
                if (err) {
                    reject(err);
                }
                resolve(singleSite);
            });
        });
    }

    getAll() {
        return new Promise((resolve, reject) => {
            SiteModel.find((err, sitesArray) => {
                if (err) {
                    reject(err);
                }
                resolve(sitesArray);
            });
        });
    }

    update(id, obj) {
        return new Promise((resolve, reject) => {
            SiteModel.findByIdAndUpdate(id, obj, (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            SiteModel.findByIdAndRemove(id, (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve('Building delete successfully');
            });
        });
    }
}

module.exports = new SiteDao();