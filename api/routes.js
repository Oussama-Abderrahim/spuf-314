bodyParser = require("body-parser");
const express = require("express");


var routes = express.Router();

routes.route('/').get((req, res) => {
    res.json({message:"Welcome to our API, see *link* for documentation"})
});

module.exports = routes;