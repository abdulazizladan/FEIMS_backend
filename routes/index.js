const sites = require("./sites.route");
const buildings = require("./buildings.route");

function intialize(application) {
  application.use("/sites", sites);
  application.use('/buildings', buildings);
}

module.exports = { intialize };
