const sites = require("./sites.route");

function intialize(application) {
  application.use("/sites", sites);
}

module.exports = { intialize };
