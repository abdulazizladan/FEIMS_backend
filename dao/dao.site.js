const Site = require('../models/site');

class SiteDao {
    addNew(obj) {
        return Site.create(obj);
    }

    getOne(id) {
        return Site.findById(id);
    }

    getAll() {
        return Site.find();
    }

    update(id, obj) {
        return Site.findByIdAndUpdate(id, obj);
    }

    delete(id) {
        return Site.findByIdAndRemove(id);
    }
}

module.exports = new SiteDao();