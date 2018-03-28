bodyParser = require("body-parser");
const express = require("express");

var DatabaseManager = require("./modules/DatabaseManager");
var PathFinder = require("./modules/PathFinder")
var LinesManager = require("./modules/LinesManager")

var Station = require("../models/Station")

var routes = express.Router();

/**
 * @swagger
 * /station:
 *   get:
 *     tags:
 *     - Station
 *     description: Get all stations
 *     summary: Get all stations
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: A list of stations
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/Station'
 */
routes.route('/').get((req, res) => {
    DatabaseManager.getAllStations((stations)=>{
            res.json(stations)
    });
});

/**
 * @swagger
 * /station/{id}:
 *   get:
 *     tags:
 *     - Station
 *     description: Get station by ID
 *     summary: Get station by ID
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: station id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: A station
 *         schema:
 *           $ref: '#/definitions/Station'
 *       404:
 *         description: station not found
 */
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