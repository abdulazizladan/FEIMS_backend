const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const SiteSchema = new Schema({
    name : {type: String, required: true},
    code : {type: String, required: true},
    state: {type: String, required: true},
    lga: {type: String, required: true},

    street_address: {type: String, required: true},
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
			cost_of_repair: {type: Number, required: true},
		}
    },
    fence: {
		type: {
			description: {type: String, required: true},
			fence_height: {type: Number, required: true},
			perimeter: {type: Number, required: true},
			concrete_work: {type: Number, required: true},
			block_work: {type: Number, required: true},
			form_work: {type: Number, required: true},
			reinforcement: {type: Number, required: true},
			rendering: {type: Number, required: true},
			barb_wire: {type: Number, required: true},
			condition: {type: String, required: true},
			damage: {type: Number, required: true},
			cost_of_repair: {type: Number, required: true},
		}
    },

    roads: {
		type: {
			description: {type: String, required: true},
			width: {type: Number, required: true},
			length: {type: Number, required: true},
			surface_dressing: {type: Number, required: true},
			condition: {type: String, required: true},
			damage: {type: Number, required: true},
			cost_of_repair: {type: Number, required: true}
		}
    },    
    
    paths: {
		type: {
			width: {type: Number, required: true},
			length: {type: Number, required: true},
			surface_dressing: {type: Number, required: true},
			condition: {type: String, required: true},
			damage: {type: Number, required: true},
			cost_of_repair: {type: Number, required: true},
		}
    },    
    
    driveway: {
		type: {
			width: {type: Number, required: true},
			length: {type: Number, required: true},
			surface_dressing: {type: Number, required: true},
			condition: {type: String, required: true},
			damage: {type: Number, required: true},
			cost_of_repair: {type: Number, required: true},
		}
    },    
    
    drainage: {
		type: {
			depth: {type: Number, required: true},
			length: {type: Number, required: true},
			concrete_work: {type: Number, required: true},
			block_work: {type: Number, required: true},
			form_work: {type: Number, required: true},
			reinforcement: {type: Number, required: true},
			rendering: {type: Number, required: true},
			condition: {type: String, required: true},
			damage: {type: Number, required: true},
			cost_of_repair: {type: Number, required: true}
		}
    },    
    
    electricity: {
		type: {
			piping_and_accessories: {type: Number, required: true},
			cabling: {type: Number, required: true},
			sources: {type: String, required: true}, 
			condition: {type: String, required: true},
			damage: {type: Number, required: true},
			cost_of_repair: {type: Number, required: true}
		}
    },    
    
    water: {
		type: {
			piping_and_accessories: {type: Number, required: true},
			cabling: {type: Number, required: true},
			sources: {type: String, required: true}, 
			condition: {type: String, required: true},
			damage: {type: Number, required: true},
			cost_of_repair: {type: Number, required: true}
		}
    },
    
    steps: {
		type: {
			concrete_work: {type: Number, required: true},
			width: {type: Number, required: true},
			length: {type: Number, required: true},
			quantity: {type: Number, required: true},
			surface_dressing: {type: Number, required: true},
			condition: {type: String, required: true},
			damage: {type: Number, required: true},
			cost_of_repair: {type: Number, required: true}
		}
    },
    
    gas_tanks: {
		type: {
			quantity: {type: Number, required: true},
			condition: {type: String, required: true},
			damage: {type: Number, required: true},
			cost_of_repair: {type: Number, required: true}
		}
    },
    
    ramps: {
		type: {
			width: {type: Number, required: true},
			sloping_length: {type: Number, required: true},
			concrete_work: {type: Number, required: true},
			condition: {type: String, required: true},
			cost_of_repair: {type: Number, required: true}
		}
    },
    
    street_lights: {
		type: {
			quantity: {type: Number, required: true},
			height: {type: Number, required: true},
			condition: {type: String, required: true},
			cost_of_repair: {type: Number, required: true}
		}
    },
    
    waste_site: {
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

const Site = mongoose.model('Site', SiteSchema);
module.exports = Site;