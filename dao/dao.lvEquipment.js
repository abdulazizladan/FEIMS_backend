const LVEquipmentModel = require('../models/lowValueEquipment');

class LVEquipmentDao {
    addNew(obj) {
        return new Promise((resolve, reject) => {
            let newEquipment = new LVEquipmentModel(obj);
            newEquipment.save((err, savedEquipment) => {
                if (err) {
                    reject(err);
                }
                resolve(savedEquipment);
            });
        });
    }

    getOne(id) {
        return new Promise((resolve, reject) => {
            LVEquipmentModel.findById(id, (err, singleEquipment) => {
                if (err) {
                    reject(err);
                }
                resolve(singleEquipment);
            });
        });
    }

    getAll() {
        return new Promise((resolve, reject) => {
            LVEquipmentModel.find((err, equipmentsArray) => {
                if (err) {
                    reject(err);
                }
                resolve(equipmentsArray);
            });
        });
    }

    update(id, obj) {
        return new Promise((resolve, reject) => {
            LVEquipmentModel.findByIdAndUpdate(id, obj, (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            LVEquipmentModel.findByIdAndRemove(id, (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve('Equipent delete successfully');
            });
        });
    }
}

module.exports = new LVEquipmentDao();
