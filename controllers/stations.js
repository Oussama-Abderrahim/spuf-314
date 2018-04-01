bodyParser = require("body-parser");
const express = require("express");

var PathFinder = require("./modules/PathFinder")
var LinesManager = require("./modules/LinesManager")

var Station = require("../models/Station")

var routes = express.Router();

/**
 * @swagger
 * /api/station:
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
    Station.getAll()
        .then(stations => {
            res.json(stations)
        })
        .catch(err => {
            console.log(err)
            res.sendStatus(404)
            res.end()
        })
});

/**
 * @swagger
 * /api/station/{id}:
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
    Station
        .getByID(req.params.id)
        .then(station => {
            res.json(station)
        })
        .catch(err => {
            console.log(err)
            res.sendStatus(404)
            res.end()
        })
});

/* POST */
// TODO : make it PUT
/**
 * @swagger
 * /api/station/{id}:
 *   post:
 *     tags:
 *     - Station
 *     description: Set a station's properties
 *     summary: Update station
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: id of station to update
 *         in: body
 *         required: true
 *         type: integer
 *       - name: name
 *         description: name of station to update
 *         in: body
 *         type: string
 *       - name: address
 *         description: address of station to update
 *         in: body
 *         type: string
 *       - name: coordLat
 *         description: Latitude coordinates of station to update
 *         in: body
 *         type: integer
 *       - name: coordLong
 *         description: lontitude coordinates of station to update
 *         in: body
 *         type: number
 *       - name: Authorization
 *         in: header
 *         type: string
 *         required: true
 *         description: Token (token goes here)
 *     responses:
 *       200:
 *         description: updated station {id}
 *       400:
 *         description: Error message(s)
 *       401:
 *         description: invalid / missing authentication
 */
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