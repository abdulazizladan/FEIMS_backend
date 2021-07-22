const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const HVEquipmentSchema = new Schema({
    name: {type: String, required: true},
    code: {type: String, required: true},
    serialNumber: {type: String, required: true},
    hasManual: {type: Boolean, required: true},
    purchaseDate: {type: Date, required: true},
    manufacturer: {type: String, required: true},
    commissionDate: {type: Date, required: true},
    model: {type: String},
    dateManufactured: {type: Date},
    dateAcquired: {type: Date},
    position: {
        longitude: Number,
        latitude: Number
    },
    specifications: [
        {
            parameter: String,
            value: Number
        }
    ],
    hasCircuitDiagram: {type: Boolean, required: true},
    condition: {type: String, required: true},
    comment: {type: String, required: true},
    damage: {type: Number, required: true},
    costOfRepair: {type: Number, required: true},
    components: [
        {
            name: String,
            description: String,
            quantity: Number
        }
    ]
});

const HVEquipmentModel = mongoose.model('hv-equipment', HVEquipmentSchema);
module.exports = HVEquipmentModel;