bodyParser = require('body-parser')

module.exports = function(dbSession) {
  let Station = require('../models/Station')(dbSession)
  let router = require('express').Router()

  return {
    getRouter: function() {
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
       *     parameters:
       *       - name: match
       *         description: name of station to match
       *         in: query
       *         required: false
       *         type: string
       *       - name: limit
       *         description: maximum number of stations to return
       *         in: query
       *         required: false
       *         type: number
       *       - name: offset
       *         description: number of stations to skip when returning with limit
       *         in: query
       *         required: false
       *         type: number
       *     responses:
       *       200:
       *         description: A list of stations
       *         schema:
       *           type: array
       *           items:
       *             $ref: '#/definitions/Station'
       */
      router.route('/').get(this.stations)

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
       *       400:
       *         description: Arguments invalid or missing
       *       404:
       *         description: station not found
       */
      router.route('/:id').get(this.stationByID)

      /**
       * @swagger
       * /api/station/:
       *   post:
       *     tags:
       *     - Station
       *     description: creates a new station
       *     summary: Create station
       *     produces:
       *       - application/json
       *     parameters:
       *       - name: name
       *         description: name of station to update
       *         in: body
       *         type: string
       *         required: true
       *       - name: address
       *         description: address of station to update
       *         in: body
       *         type: string
       *         required: true
       *       - name: coordLat
       *         description: Latitude coordinates of station to update
       *         in: body
       *         type: integer
       *         required: true
       *       - name: coordLon
       *         description: lontitude coordinates of station to update
       *         in: body
       *         type: number
       *         required: true
       *       - name: Authorization
       *         in: header
       *         type: string
       *         required: true
       *         description: Token (token goes here)
       *     responses:
       *       200:
       *         description: create station {id}
       *       400:
       *         description: Error message(s)
       *       401:
       *         description: invalid / missing authentication
       */
      router.route('/').post(this.createStation)

      /**
       * @swagger
       * /api/station/{id}:
       *   put:
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
      router.route('/').put(this.updateStation)

      return router
    },
    stations: (req, res) => {
      const matchParam = req.query.match || "";
      Station.getAll(matchParam)
        .then(stations => {
          res.json(stations)
        })
        .catch(err => {
          console.log(err)
          res.sendStatus(404)
          res.end()
        })
    },
    stationByID: (req, res) => {
      if (isNaN(Number.parseInt(req.params.id))) {
        res.sendStatus(400)
        return res.end()
      }

      Station.getByID(req.params.id)
        .then(station => {
          res.json(station)
        })
        .catch(err => {
          res.sendStatus(404)
          res.end()
        })
    },
    createStation: (req, res) => {
      Station.create(
        new Station(
          null,
          req.body.name,
          req.body.address,
          req.body.coordLat,
          req.body.coordLon
        )
      ).then(createdStation => {
        console.log(createdStation)
        res.sendStatus(200)
      }).catch(err => {
        console.log(err)
        res.send(500)
      })
    },
    updateStation: (req, res) => {
      Station.getByID(req.body.station_id)
        .then(station => {
          station.name = req.body.name || station.name
          station.address = req.body.address || station.address
          station.coord.lat = req.body.coordLat || station.coord.lat
          station.coord.lon = req.body.coordLon || station.coord.lon

          station.save()

          console.log('Station ' + req.body.station_id + ' Changed')

          res.redirect('/admin/editStation')
        })
        .catch(err => {
          console.log('error POST station', err)
        })
    }
  }
}
