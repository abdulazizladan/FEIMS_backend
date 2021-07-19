const BuildingModel = require('../models/building');

class BuildingDao {
    addNew(obj) {
        return new Promise((resolve, reject) => {
            let newBuilding = new BuildingModel(obj);
            newBuilding.save((err, savedBuilding) => {
                if (err) {
                    reject(err);
                }
                resolve(savedBuilding);
            });
        });
    }

    getOne(id) {
        return new Promise((resolve, reject) => {
            BuildingModel.findById(id, (err, singleBuilding) => {
                if (err) {
                    reject(err);
                }
                resolve(singleBuilding);
            });
        });
    }

    getAll() {
        return new Promise((resolve, reject) => {
            BuildingModel.find((err, buildingsArray) => {
                if (err) {
                    reject(err);
                }
                resolve(buildingsArray);
            });
        });
    }

    update(id, obj) {
        return new Promise((resolve, reject) => {
            BuildingModel.findByIdAndUpdate(id, obj, (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            BuildingModel.findByIdAndRemove(id, (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve('Building delete successfully');
            });
        });
    }
}

module.exports = new BuildingDao();
