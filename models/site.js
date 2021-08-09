const mongoose = require('mongoose');
const { Schema } = require('mongoose');


const SiteSchema = new Schema({
    name : {type: String, required: true},
    code : {type: String, required: true},
    state: {type: String, required: true},
    lga: {type: String, required: true},

    streetAddress: {type: String, required: true},
    measurement: {type: Number, required: true},
    level: {type: Number, required: true},

    position: {
		type: {
			longitude: {type: Number, required: true},
			latitude: {type: Number, required: true}
    	}
	},
	
    comment: {type: String, required: true},
    gate: {
		type: {
			description: {type: String, required: true},
			size: {type: Number, required: true},
			thickness: {type: Number, required: true},
			condition: {type: String, required: true},
			damage: {type: Number, required: true},
			costOfRepair: {type: Number, required: true},
		}
    },
    fence: {
		type: {
			description: {type: String, required: true},
			fenceHeight: {type: Number, required: true},
			perimeter: {type: Number, required: true},
			concreteWork: {type: Number, required: true},
			blockWork: {type: Number, required: true},
			formWork: {type: Number, required: true},
			reinforcement: {type: Number, required: true},
			rendering: {type: Number, required: true},
			barbWire: {type: Number, required: true},
			condition: {type: String, required: true},
			damage: {type: Number, required: true},
			costOfRepair: {type: Number, required: true},
		}
    },

    roads: {
		type: {
			description: {type: String, required: true},
			width: {type: Number, required: true},
			length: {type: Number, required: true},
			surfaceDressing: {type: Number, required: true},
			condition: {type: String, required: true},
			damage: {type: Number, required: true},
			costOfRepair: {type: Number, required: true}
		}
    },    
    
    paths: {
		type: {
			width: {type: Number, required: true},
			length: {type: Number, required: true},
			surfaceDressing: {type: Number, required: true},
			condition: {type: String, required: true},
			damage: {type: Number, required: true},
			costOfRepair: {type: Number, required: true},
		}
    },    
    
    driveway: {
		type: {
			width: {type: Number, required: true},
			length: {type: Number, required: true},
			surfaceDressing: {type: Number, required: true},
			condition: {type: String, required: true},
			damage: {type: Number, required: true},
			costOfRepair: {type: Number, required: true},
		}
    },    
    
    drainage: {
		type: {
			depth: {type: Number, required: true},
			length: {type: Number, required: true},
			concreteWork: {type: Number, required: true},
			blockWork: {type: Number, required: true},
			formWork: {type: Number, required: true},
			reinforcement: {type: Number, required: true},
			rendering: {type: Number, required: true},
			condition: {type: String, required: true},
			damage: {type: Number, required: true},
			costOfRepair: {type: Number, required: true}
		}
    },    
    
    electricity: {
		type: {
			pipingAndAccessories: {type: Number, required: true},
			cabling: {type: Number, required: true},
			sources: [{
				type: String, required: true
			}], 
			condition: {type: String, required: true},
			damage: {type: Number, required: true},
			costOfRepair: {type: Number, required: true}
		}
    },    
    
    water: {
		type: {
			pipingAndAccessories: {type: Number, required: true},
			cabling: {type: Number, required: true},
			sources: [{
				type: String, required: true
			}], 
			condition: {type: String, required: true},
			damage: {type: Number, required: true},
			costOfRepair: {type: Number, required: true}
		}
    },
    
    steps: {
		type: {
			concreteWork: {type: Number, required: true},
			width: {type: Number, required: true},
			length: {type: Number, required: true},
			quantity: {type: Number, required: true},
			surfaceDressing: {type: Number, required: true},
			condition: {type: String, required: true},
			damage: {type: Number, required: true},
			costOfRepair: {type: Number, required: true}
		}
    },
    
    gasTanks: {
		type: {
			quantity: {type: Number, required: true},
			condition: {type: String, required: true},
			damage: {type: Number, required: true},
			costOfRepair: {type: Number, required: true}
		}
    },
    
    ramps: {
		type: {
			width: {type: Number, required: true},
			slopingLength: {type: Number, required: true},
			concreteWork: {type: Number, required: true},
			condition: {type: String, required: true},
			costOfRepair: {type: Number, required: true}
		}
    },
    
    streetLights: {
		type: {
			quantity: {type: Number, required: true},
			height: {type: Number, required: true},
			condition: {type: String, required: true},
			costOfRepair: {type: Number, required: true}
		}
    },
    
    wasteSite: {
		type: {
			length: {type: Number, required: true},
			width: {type: Number, required: true},
			position: {
				type: {
					longitude: {type: Number, required: true},
					latitude: {type: Number, required: true}
				}
			},
			condition: {type: String, required: true}
		}

    }
});

const SiteModel = mongoose.model('Site', SiteSchema);
module.exports = SiteModel;
