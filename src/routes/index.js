const sites = require("./route.site");
const buildings = require("./route.building");
const LVEquipments = require("./route.lvEquipment");
const HVEquipments = require("./route.hvEquipment");
const user = require("./route.user");
const auth = require("./route.auth");
const { authenticate } = require('../middleware/middleware.authenticate');

function intialize(application) {
  console.log("intilizing routes");
  application.use('/auth', auth());
  application.use('/users', authenticate(), user());
  application.use("/sites", sites());
  application.use('/buildings', buildings());
  application.use('/equipment/low-value', LVEquipments());
  application.use('/equipment/high-value', HVEquipments());
}

module.exports = { intialize };
