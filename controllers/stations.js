bodyParser = require("body-parser");
const express = require("express");

var DatabaseManager = require("./modules/DatabaseManager");
var PathFinder = require("./modules/PathFinder")
var LinesManager = require("./modules/LinesManager")

var Station = require("../models/Station")

var routes = express.Router();


routes.route('/').get((req, res) => {
    DatabaseManager.getAllStations((stations)=>{
            res.json(stations)
    });
});

routes.route('/:id').get((req, res) => {
    DatabaseManager.getStation(req.params.id, (station)=>{
            res.json(station)
    });
});

/* POST */
// TODO : make it PUT
routes.route('/').post((req, res) => {
    LinesManager.updateStation(new Station(
        req.body.station_id,
        req.body.station_name,
        req.body.station_address,
        req.body.station_coord_lat,
        req.body.station_coord_lon
    ))
    console.log("Station "+ req.body.station_id + " Changed")
    
    res.redirect("/admin/editStation")
})

module.exports = routes;