const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./routes');
const cors = require("cors");

const application = express();
application.use(morgan('dev'));
application.use(bodyParser.json());
application.use(cors());

routes.intialize(application);

application.get('/', (req, res) => {
    res.status(200).json('server is up and running');
});

module.exports = { application };
