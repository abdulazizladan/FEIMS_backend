const mongoose = require('mongoose');
const { Schema } = require('mongoose');

var Corridor = new Schema({
  type: {
    quantity: {type: Number, required: true},
    type: {type: String},
    condition: {type: String, required: true},
    costOfRepair: {type: Number, required: true}
  }
})

const BuildingSchema = new Schema({
  structure: {
    type: {
      name: {type: String, required: true}, 
      code: {type: String}, 
      yearBuilt: {type: Number, required: true},

      position: { 
        type: {
          longitude: {type: Number, required: true},
          latitude: {type: Number, required: true} 
        }
      },

      purpose: {type: String, required: true}, 

      dimensions: {
        type: {
          floorArea: {type: Number, required: true}, 
          wallArea: {type: Number, required: true}, 
          ceiling_area: {type: Number, required: true}, 
          floors: {type: Number, required: true},
        }
      },
    
      superStructure: {
        type: {
          type: {type: String, required: true},

          under_concrete: {
            type: {
              concrete_work: {type: Number, required: true}, 
              formWork: {type: Number, required: true}, 
              reinforcement: {type: Number, required: true},
              brickWork: {type: Number, required: true}
            }
          },

          underCrackTiles: {
            type: {
              size: {type: Number, required: true}, 
              type: {type: String, required: true},
              quantity: {type: Number, required: true}
            }
          },

          underAlucobond: {
            type: {
              size: {type: Number, required: true}, 
              type: {type: String, required: true},
              accessories: [{type: String, required: true}],
              quantity: {type: Number, required: true}
            },
            required: true
          },
          condition: {type: String, required: true},
          costOfRepair: {type: Number, required: true}
        }
      },
      
      walls: {
        type: {
          wallType: {type: String, required: true}, 
          quantity: {type: Number, required: true}, 
          lastDecorated: {type: Number, required: true}, 
          hasStain: {type: Boolean, required: true},

          concreteWall: {
            type: {
              condition: {type: String, required: true}, 
              quantity: {type: Number, required: true}, 
              costOfRepair: {type: Number, required: true},
            },
            required: true
          },

          paint: {
            type: {
              condition: {type: String, required: true}, 
              quantity: {type: Number, required: true}, 
              costOfRepair: {type: Number, required: true}
            },
            required: true
          },

          mortar: {
            type: {
              condition: {type: String, required: true},
              quantity: {type: Number, required: true}, 
              costOfRepair: {type: Number, required: true}
            }
          },

          structure: {
            type: {
              type: {type: String, required: true}, 
              quantity: {type: Number, required: true}, 
              damage: {type: Number, required: true}, 
              condition: {type: String, required: true}, 
              costOfRepair: {type: Number, required: true}
            }
          },

          trimming: {
            type: {
              quantity: {type: Number, required: true}, 
              finishes: {type: String, required: true}, 
              condition: {type: String, required: true}, 
              costOfRepair: {type: Number, required: true}
            }
          },

          frame: {
            type: {
              concrete_work: {type: Number, required: true}, 
              finishes: {type: Number, required: true}, 
              formWork: {type: Number, required: true}, 
              quantity: {type: Number, required: true},
              reinforceemnt: {type: Number, required: true}, 
              damage: {type: Number, required: true}, 
              costOfRepair: {type: Number, required: true}
            }
          },

          facade: {
            type: {
              concreteWork: {type: Number, required: true}, 
              finishes: {type: Number, required: true}, 
              formWork: {type: Number, required: true}, 
              type: {type: String, required: true},
              quantity: {type: Number, required: true}, 
              damage: {type: Number, required: true}, 
              costOfRepair: {type: Number, required: true}
            }
          },

          corridors: [Corridor],
        
          interiorWall: {
            type: {
              finishing: {type: String, required: true}, 
              size: {type: Number, required: true}, 
              type: {type: String, required: true}, 
              accessories: {type: String, required: true},
              quantity: {type: Number, required: true}, 
              condition: {type: String, required: true}, 
              costOfRepair: {type: Number, required: true}
            }
          },
        
          windows: {
            type: {
              material: {type: String, required: true}, 
              
              size: {type: Number, required: true}, 
              type: {type: String, required: true},
              quantity: {type: Number, required: true}, 
              condition: {type: String, required: true}, 
              costOfRepair: {type: Number, required: true}
            }
          },
        }
      },
    
      floor: {
        jointsAndBeams: {
          type: {
            concreteWork: {type: Number, required: true}, 
            finishes: {type: Number, required: true}, 
            formWork: {type: Number, required: true}, 
            quantity: {type: Number, required: true}, 
            damage: {type: Number, required: true}, 
            costOfRepair: {type: Number, required: true}
          }
        },

        slabs: {
          type: {
            concreteWork: {type: Number, required: true}, 
            finishes: {type: Number, required: true}, 
            formWork: {type: Number, required: true}, 
            quantity: {type: Number, required: true}, 
            reinforcement: {type: Number, required: true}, 
            damage: {type: Number, required: true}, 
            costOfRepair: {type: Number, required: true}
          }
        },

        foundation: {
          type: {
            type: {type: String, required: true},
            depth: {type: Number, required: true}, 
            filling: {type: Number, required: true}, 
            excavation: {type: Number, required: true}, 
            concrete_work: {type: Number, required: true}, 
            blockWork: {type: Number, required: true}, 
            formWork: {type: Number, required: true}, 
            reinforcement: {type: Number, required: true}, 
            rendering: {type: Number, required: true}, 
            dpm: {type: Number, required: true}, 
            damage: {type: Number, required: true}, 
            costOfRepair: {type: Number, required: true}
          }
        },
        
        floorStructure: {
          type: {
            material: {type: String, required: true}, 
            size: {type: Number, required: true}, 
            type: {type: String, required: true},
            accessories: {type: String, required: true},
            qauntity: {type: Number, required: true},
            condition: {type: String, required: true}, 
            costOfRepair: {type: Number, required: true}
          }
        },

        floorCovering: {
          type: {
            material: {type: String, required: true}, 
            size: {type: Number, required: true}, 
            type: {type: String, required: true},
            accessories: {type: String, required: true},
            qauntity: {type: Number, required: true},
            condition: {type: String, required: true}, 
            costOfRepair: {type: Number, required: true}
          }
        },
        
      },

      roof: {
        type: {
          style: {type: String, required: true}, 
          size: {type: Number, required: true}, 
          damage: {type: Number, required: true}, 
          condition: {type: String, required: true}, 
          costOfRepair: {type: Number, required: true},

          support: {
            type: {
              type: {type: String, required: true}, 
              size: {type: Number, required: true}, 
              quantity: {type: Number, required: true},
              damage: {type: Number, required: true}, 
              condition: {type: String, required: true}, 
              costOfRepair: {type: Number, required: true}
            }
          },

          steelTruss: {
            type: {
              type: {type: String, required: true}, 
              size: {type: Number, required: true}, 
              quantity: {type: Number, required: true},
              damage: {type: Number, required: true}, 
              condition: {type: String, required: true}, 
              costOfRepair: {type: Number, required: true},
            }
          },

          decking: {
            type: {
              type: {type: String, required: true}, 
              size: {type: Number, required: true}, 
              quantity: {type: Number, required: true},
              damage: {type: Number, required: true}, 
              condition: {type: String, required: true}, 
              costOfRepair: {type: Number, required: true}
            }
          },

          covering: {
            type: {
              type: {type: String, required: true}, 
              size: {type: Number, required: true}, 
              quantity: {type: Number, required: true},
              damage: {type: Number, required: true}, 
              condition: {type: String, required: true}, 
              costOfRepair: {type: Number, required: true}
            }
          },
          
          ceiling: {
            type: {
              type: {type: String, required: true},
              size: {type: Number, required: true}, 
              quantity: {type: Number, required: true}, 
              damage: {type: Number, required: true}, 
              costOfRepair: {type: Number, required: true}
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
              fireService: {type: Number, required: true},
              independent: {type: Number, required: true}
            }
          },

          type: {
            electric: {type: Number, required: true},
            hydraulic: {type: Number, required: true}
          },

          electricEye: {type: Boolean, required: true},
          heatSensor: {type: Boolean, required: true},
          keyLocation: {type: String, required: true},
          brandName: {type: String, required: true},
          serviceCompany: {type: String, required: true},
          phone: {type: String, required: true},
          emergencyShotoffLocation: {type: String, required: true},

          elevator_exits: {
            type: {
              top: {type: Number, required: true},
              side: {type: Number, required: true},
              dumbWaiter: {type: Number, required: true},
              laundryChute: {type: Number, required: true},
              trashChute: {type: Number, required: true},
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
      roofLights: {
        type: {
          size: {type: Number, required: true}, 
          thickness: {type: Number, required: true},
          quantity: {type: Number, required: true},
          condition: {type: String, required: true},
          damage: {type: Number, required: true},
          costOfRepair: {type: Number, required: true}
        }
      },

      airConditioning: {
        type: {
          pipingLength: {type: Number, required: true},
          quantity: {type: Number, required: true},
          condition: {type: String, required: true},
          damage: {type: Number, required: true},
          costOfRepair: {type: Number, required: true}
        }
      },

      roofCovering: {
        type: {
          height: {type: Number, required: true},
          slopingLength: {type: Number, required: true},
          quantity: {type: Number, required: true},
          condition: {type: String, required: true},
          damage: {type: Number, required: true},
          costOfRepair: {type: Number, required: true}
        }
      },

      burglarProof: {
        type: {
          type: {type: String, required: true},
          quantity: {type: Number, required: true},
          location: {type: String, required: true},
          condition: {type: String, required: true},
          damage: {type: Number, required: true},
          costOfRepair: {type: Number, required: true}
        }
      },
      gates: {
        type: {
          quantity: {type: Number, required: true},
          condition: {type: String, required: true},
          costOfRepair: {type: Number, required: true}
        }
      },
      drainage: {
        type: {
          quantity: {type: Number, required: true},
          condition: {type: String, required: true},
          costOfRepair: {type: Number, required: true}
        }
      },
      distribution: {
        type: {
          quantity: {type: Number, required: true},
          condition: {type: String, required: true},
          costOfRepair: {type: Number, required: true}
        }
      }
    },
    required: true
  }
}, {strict: true});


const BuildingModel = mongoose.model('Building', BuildingSchema);
module.exports = BuildingModel;
