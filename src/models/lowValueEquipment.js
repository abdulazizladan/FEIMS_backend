const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const LVEquipmentSchema = new Schema({
    name: {type: String, required: true},
    code: {type: String, required: true},
    quantity: {type: Number, required: true},
    serialNumber: {type: String},
    dateCommissioned: {type: Date, required: true},
    brand: {type: String, required: true},
    model: {type: String},
    status: {type: String, required: true},
    costOfRepair: {type: Number, required: true},
    comment: {type: String, required: true}
});

const LVEquipmentModel = mongoose.model('lv-equipment', LVEquipmentSchema);
module.exports = LVEquipmentModel;