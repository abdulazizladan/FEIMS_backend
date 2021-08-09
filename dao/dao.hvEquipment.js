const HVEquipmentModel = require('../models/highValueEquipment');

class HVEquipmnetDao {
    addNew(obj) {
        return new Promise((resolve, reject) => {
            let newEquipment = new HVEquipmentModel(obj);
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
            HVEquipmentModel.findById(id, (err, singleEquipment) => {
                if (err) {
                    reject(err);
                }
                resolve(singleEquipment);
            });
        });
    }

    getAll() {
        return new Promise((resolve, reject) => {
            HVEquipmentModel.find((err, equipmentsArray) => {
                if (err) {
                    reject(err);
                }
                resolve(equipmentsArray);
            });
        });
    }

    update(id, obj) {
        return new Promise((resolve, reject) => {
            HVEquipmentModel.findByIdAndUpdate(id, obj, (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            HVEquipmentModel.findByIdAndRemove(id, (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve('Equipent delete successfully');
            });
        });
    }
}

module.exports = new HVEquipmnetDao();
