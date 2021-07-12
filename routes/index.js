const sites = require("./route.site");
const buildings = require("./route.building");

function intialize(application) {
  console.log("intilizing routes");
  application.use("/sites", sites());
  application.use('/buildings', buildings());
}

module.exports = { intialize };
