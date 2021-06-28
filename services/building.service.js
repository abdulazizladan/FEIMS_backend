const Building = require('../models/building');

module.exports = {
    create: async function(newBuilding) {
        return await Building.create(newBuilding);
    },

    list: async function() {
        return await Building.find();
    },

    retrive: async function(id) {
        return await Building.findById(id);
    },

    update: async function(id, newBuilding) {
        const building = await Building.findById(id);
        if (building == null) return false;

        return await Building.update({building, ...newBuilding});
    },

    delete: async function(id) {
        return await Building.findByIdAndRemove(id);
    }
}
