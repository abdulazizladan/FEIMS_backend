const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const BuildingSchema = new Schema({
  structure: {
    type: {
      name: {type: String, required: true}, 
      code: {type: String}, 
      year_built: {type: Number, required: true},

      position: { 
        type: {
          longitude: {type: Number, required: true},
          latitude: {type: Number, required: true} 
        }
      },

      purpose: {type: String, required: true}, 
      comment: {type: String, required: true},

      dimensions: {
        type: {
          floor_area: {type: Number, required: true}, 
          wall_area: {type: Number, required: true}, 
          ceiling_area: {type: Number, required: true}, 
          floors: {type: Number, required: true},
        }
      },
    
      superstructure: {
        type: {
          type: {type: String, required: true},

          under_concrete: {
            type: {
              concrete_work: {type: Number, required: true}, 
              form_work: {type: Number, required: true}, 
              reinforcement: {type: Number, required: true},
            }
          },

          under_block: {
            type: {
              brick_work: {type: Number, required: true}
            }
          },

          under_crack_tiles: {
            type: {
              size: {type: Number, required: true}, 
              type: {type: String, required: true},
              quantity: {type: Number, required: true}
            }
          },

          under_alucobond: {
            type: {
              size: {type: Number, required: true}, 
              type: {type: String, required: true},
              accessories: [{type: String, required: true}],
              quantity: {type: Number, required: true}
            },
            required: true
          },
          condition: {type: String, required: true},
          cost_of_repair: {type: Number, required: true}
        }
      },
      
      walls: {
        type: {
          wall_type: {type: String, required: true}, 
          quantity: {type: Number, required: true}, 
          last_decorated: {type: Number, required: true}, 
          has_stain: {type: Boolean, required: true},

          concrete_wall: {
            type: {
              condition: {type: String, required: true}, 
              quantity: {type: Number, required: true}, 
              cost_of_repair: {type: Number, required: true},
            },
            required: true
          },

          paint: {
            type: {
              condition: {type: String, required: true}, 
              quantity: {type: Number, required: true}, 
              cost_of_repair: {type: Number, required: true}
            },
            required: true
          },

          mortar: {
            type: {
              condition: {type: String, required: true},
              quantity: {type: Number, required: true}, 
              cost_of_repair: {type: Number, required: true}
            }
          },

          structure: {
            type: {
              type: {type: String, required: true}, 
              quantity: {type: Number, required: true}, 
              damage: {type: Number, required: true}, 
              condition: {type: String, required: true}, 
              cost_of_repair: {type: Number, required: true}
            }
          },

          trimming: {
            type: {
              quantity: {type: Number, required: true}, 
              finishes: {type: String, required: true}, 
              condition: {type: String, required: true}, 
              cost_of_repair: {type: Number, required: true}
            }
          },

          frame: {
            type: {
              concrete_work: {type: Number, required: true}, 
              finishes: {type: Number, required: true}, 
              form_work: {type: Number, required: true}, 
              quantity: {type: Number, required: true},
              reinforceemnt: {type: Number, required: true}, 
              damage: {type: Number, required: true}, 
              cost_of_repair: {type: Number, required: true}
            }
          },

          facade: {
            type: {
              concrete_work: {type: Number, required: true}, 
              finishes: {type: Number, required: true}, 
              form_work: {type: Number, required: true}, 
              type: {type: String, required: true},
              quantity: {type: Number, required: true}, 
              damage: {type: Number, required: true}, 
              cost_of_repair: {type: Number, required: true}
            }
          },

          corridors: {
            type: {
              quantity: {type: Number, required: true},
              type: {type: String, required: true},
              condition: {type: String, required: true}, 
              cost_of_repair: {type: Number, required: true}
            }
          },
        
          interior_wall: {
            type: {
              finishing: {type: String, required: true}, 
              size: {type: Number, required: true}, 
              type: {type: String, required: true}, 
              accessories: {type: String, required: true},
              quantity: {type: Number, required: true}, 
              condition: {type: String, required: true}, 
              cost_of_repair: {type: Number, required: true}
            }
          },
        
          windows: {
            type: {
              material: {type: String, required: true}, 
              
              size: {type: Number, required: true}, 
              type: {type: String, required: true},
              quantity: {type: Number, required: true}, 
              condition: {type: String, required: true}, 
              cost_of_repair: {type: Number, required: true}
            }
          },
        }
      },
    
      floor: {
        joints_and_beams: {
          type: {
            concrete_work: {type: Number, required: true}, 
            finishes: {type: Number, required: true}, 
            form_work: {type: Number, required: true}, 
            quantity: {type: Number, required: true}, 
            damage: {type: Number, required: true}, 
            cost_of_repair: {type: Number, required: true}
          }
        },

        slabs: {
          type: {
            concrete_work: {type: Number, required: true}, 
            finishes: {type: Number, required: true}, 
            form_work: {type: Number, required: true}, 
            quantity: {type: Number, required: true}, 
            reinforcement: {type: Number, required: true}, 
            damage: {type: Number, required: true}, 
            cost_of_repair: {type: Number, required: true}
          }
        },

        foundation: {
          type: {
            type: {type: String, required: true},
            depth: {type: Number, required: true}, 
            filling: {type: Number, required: true}, 
            excavation: {type: Number, required: true}, 
            concrete_work: {type: Number, required: true}, 
            block_work: {type: Number, required: true}, 
            form_work: {type: Number, required: true}, 
            reinforcement: {type: Number, required: true}, 
            rendering: {type: Number, required: true}, 
            dpm: {type: Number, required: true}, 
            damage: {type: Number, required: true}, 
            cost_of_repair: {type: Number, required: true}
          }
        },
        
        floor_structure: {
          type: {
            material: {type: String, required: true}, 
            size: {type: Number, required: true}, 
            type: {type: String, required: true},
            accessories: {type: String, required: true},
            qauntity: {type: Number, required: true},
            condition: {type: String, required: true}, 
            cost_of_repair: {type: Number, required: true}
          }
        },

        floor_covering: {
          type: {
            material: {type: String, required: true}, 
            size: {type: Number, required: true}, 
            type: {type: String, required: true},
            accessories: {type: String, required: true},
            qauntity: {type: Number, required: true},
            condition: {type: String, required: true}, 
            cost_of_repair: {type: Number, required: true}
          }
        },
        
      },

      roof: {
        type: {
          style: {type: String, required: true}, 
          size: {type: Number, required: true}, 
          damage: {type: Number, required: true}, 
          condition: {type: String, required: true}, 
          cost_of_repair: {type: Number, required: true},

          support: {
            type: {
              type: {type: String, required: true}, 
              size: {type: Number, required: true}, 
              quantity: {type: Number, required: true},
              damage: {type: Number, required: true}, 
              condition: {type: String, required: true}, 
              cost_of_repair: {type: Number, required: true}
            }
          },

          steel_truss: {
            type: {
              type: {type: String, required: true}, 
              size: {type: Number, required: true}, 
              quantity: {type: Number, required: true},
              damage: {type: Number, required: true}, 
              condition: {type: String, required: true}, 
              cost_of_repair: {type: Number, required: true},
            }
          },

          decking: {
            type: {
              type: {type: String, required: true}, 
              size: {type: Number, required: true}, 
              quantity: {type: Number, required: true},
              damage: {type: Number, required: true}, 
              condition: {type: String, required: true}, 
              cost_of_repair: {type: Number, required: true}
            }
          },

          covering: {
            type: {
              type: {type: String, required: true}, 
              size: {type: Number, required: true}, 
              quantity: {type: Number, required: true},
              damage: {type: Number, required: true}, 
              condition: {type: String, required: true}, 
              cost_of_repair: {type: Number, required: true}
            }
          },
          
          ceiling: {
            type: {
              type: {type: String, required: true},
              size: {type: Number, required: true}, 
              quantity: {type: Number, required: true}, 
              damage: {type: Number, required: true}, 
              cost_of_repair: {type: Number, required: true}
            }
          },
        }
      },
      
      elevator: {
        type: {
          count: {
            type: {
              passenger: {type: Number, required: true},
              freight: {type: Number, required: true},
              fire_service: {type: Number, required: true},
              independent: {type: Number, required: true}
            }
          },

          type: {
            electric: {type: Number, required: true},
            hydraulic: {type: Number, required: true}
          },

          electric_eye: {type: Boolean, required: true},
          heat_sensor: {type: Boolean, required: true},
          key_location: {type: String, required: true},
          brand_name: {type: String, required: true},
          service_company: {type: String, required: true},
          phone: {type: String, required: true},
          emergency_shotoff_location: {type: String, required: true},

          elevator_exits: {
            type: {
              top: {type: Number, required: true},
              side: {type: Number, required: true},
              dumb_waiter: {type: Number, required: true},
              laundry_chute: {type: Number, required: true},
              trash_chute: {type: Number, required: true},
              other: {type: Number, required: true}
            }
          },
        }
      }
    },
    required: true
  },

  services: {
    type: {
      roof_lights: {
        type: {
          size: {type: Number, required: true}, 
          thickness: {type: Number, required: true},
          quantity: {type: Number, required: true},
          condition: {type: String, required: true},
          damage: {type: Number, required: true},
          cost_of_repair: {type: Number, required: true}
        }
      },

      air_conditioning: {
        type: {
          piping_length: {type: Number, required: true},
          quantity: {type: Number, required: true},
          condition: {type: String, required: true},
          damage: {type: Number, required: true},
          cost_of_repair: {type: Number, required: true}
        }
      },

      roof_covering: {
        type: {
          height: {type: Number, required: true},
          sloping_length: {type: Number, required: true},
          quantity: {type: Number, required: true},
          condition: {type: String, required: true},
          damage: {type: Number, required: true},
          cost_of_repair: {type: Number, required: true}
        }
      },

      burglar_proof: {
        type: {
          type: {type: String, required: true},
          quantity: {type: Number, required: true},
          location: {type: String, required: true},
          condition: {type: String, required: true},
          damage: {type: Number, required: true},
          cost_of_repair: {type: Number, required: true}
        }
      },
      gates: {
        type: {
          quantity: {type: Number, required: true},
          condition: {type: String, required: true},
          cost_of_repair: {type: Number, required: true}
        }
      },
      drainage: {
        type: {
          quantity: {type: Number, required: true},
          condition: {type: String, required: true},
          cost_of_repair: {type: Number, required: true}
        }
      },
      distribution: {
        type: {
          quantity: {type: Number, required: true},
          condition: {type: String, required: true},
          cost_of_repair: {type: Number, required: true}
        }
      }
    },
    required: true
  }
}, {strict: true});


const Building = mongoose.model('Building', BuildingSchema);
module.exports = Building;