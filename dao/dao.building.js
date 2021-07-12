const Building = require('../models/building');

class BuildingDao {
    addNew(obj) {
        return Building.create(obj);
    }

    getOne(id) {
        return Building.findById(id);
    }

    getAll() {
        return Building.find();
    }

    update(id, obj) {
        return Building.findByIdAndUpdate(id, obj);
    }

    delete(id) {
        return Building.findByIdAndRemove(id);
    }
}

module.exports = new BuildingDao();
