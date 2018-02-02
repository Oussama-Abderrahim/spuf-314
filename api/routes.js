bodyParser = require("body-parser");
const express = require("express");

var DatabaseManager = require("./modules/DatabaseManager");
var PathFinder = require("./modules/PathFinder")

var routes = express.Router();

routes.route('/').get((req, res) => {
    res.json({message:"Welcome to our API, see *link* for documentation"})
});

routes.route('/station').get((req, res) => {
    DatabaseManager.getAllStations((stations)=>{
        res.json(stations)
    });
});

routes.route('/direction').get((req, res)=>{
    //TODO : check params 
    PathFinder.getPath(req.query.start, req.query.end, (result)=>{
        res.json(result)
    });

});
module.exports = routes;