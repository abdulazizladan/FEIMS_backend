const Site = require('../models/site');

module.exports = {
    create: async function(newSite) {
        return await Site.create(newSite);
    },

    list: async function() {
        return await Site.find();
    },

    retrive: async function(id) {
        return await Site.findById(id);
    },

    update: async function(id, newSite) {
        const site = await Site.findById(id);
        if (site == null) return false;

        return await Site.update({site, ...newSite});
    },

    delete: async function(id) {
        return await Site.findByIdAndRemove(id);
    }
}
