const sites = require("./route.site");
const buildings = require("./route.building");
const LVEquipments = require("./route.lv-equipment");
const HVEquipments = require("./route.hv-equipment");

function intialize(application) {
  console.log("intilizing routes");
  application.use("/sites", sites());
  application.use('/buildings', buildings());
  application.use('/equipments/low-value', LVEquipments());
  application.use('/equipments/high-value', HVEquipments());
}

module.exports = { intialize };
