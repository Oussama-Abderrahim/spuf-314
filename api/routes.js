bodyParser = require("body-parser");
const express = require("express");

var DatabaseManager = require("./modules/DatabaseManager");
var PathFinder = require("./modules/PathFinder")
var LinesManager = require("./modules/LinesManager")
var Station = require("../models/Station") // TODO: TEMPORARY

var routes = express.Router();

routes.route('/').get((req, res) => {
    res.json({message:"Welcome to our API, see *link* for documentation"})
});

routes.route('/station').get((req, res) => {
    DatabaseManager.getAllStations((stations)=>{
            res.json(stations)
    });
});

routes.route('/station/:id').get((req, res) => {
    DatabaseManager.getStation(req.params.id, (station)=>{
            res.json(station)
    });
});

routes.route('/direction').get((req, res)=>{
    //TODO : check params 
    if(req.query.start && req.query.end){
        var params = {
            start: req.query.start,
            end: req.query.end,
            transport: {
                bus: (req.query.bus)? true: false,
                tram: (req.query.tram)? true: false,
                walk: (req.query.walk)? true: false
            }
        }
        PathFinder.getPath(params, (result)=>{
                res.json(result)
        });
    } else {
        res.json({})
    }
});

/* POST */
routes.route('/station').post((req, res) => {
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