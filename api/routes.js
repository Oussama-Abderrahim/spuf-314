bodyParser = require("body-parser");
const express = require("express");

var getAll = require("./modules/DatabaseManager");

var routes = express.Router();

routes.route('/').get((req, res) => {
    res.json({message:"Welcome to our API, see *link* for documentation"})
});

routes.route('/station').get((req, res) => {
    getAll((stations)=>{
        res.json(stations)
    });
});

module.exports = routes;