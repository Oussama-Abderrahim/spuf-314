bodyParser = require('body-parser')
const express = require('express')

module.exports = function(dbSession) {
  let routes = express.Router()

  const PathFinder = require('./modules/PathFinder')

  const Station = require('../models/Station')
  let Line = require('../models/Line')(dbSession)
  const Bus = require('../models/Bus')

  return {
    getRouter: function() {
      /**
       * @swagger
       * /api/line:
       *   get:
       *     tags:
       *     - Line
       *     description: Get all lines
       *     summary: Get all lines
       *     produces:
       *       - application/json
       *     responses:
       *       200:
       *         description: A list of Lines
       *         schema:
       *           type: array
       *           items:
       *             $ref: '#/definitions/Line'
       */
      routes.route('/').get((req, res) => {
        res.json({
          message: 'TBD soon'
        })
      })

      /**
       * @swagger
       * /api/line/{id}:
       *   get:
       *     tags:
       *     - Line
       *     description: Get Line by ID
       *     summary: Get Line by ID
       *     produces:
       *       - application/json
       *     parameters:
       *       - name: id
       *         description: line id
       *         in: path
       *         required: true
       *         type: integer
       *     responses:
       *       200:
       *         description: A Line
       *         schema:
       *           $ref: '#/definitions/Line'
       *       404:
       *         description: Line not found
       */
      routes.route('/:id').get((req, res) => {
        res.json({
          message: 'This is line ' + req.params.id
        })
      })

      /**
       * @swagger
       * /api/line/:
       *   post:
       *     tags:
       *     - Line
       *     description: Create a new line
       *     summary: Add Line
       *     produces:
       *       - application/json
       *     parameters:
       *       - name: line
       *         in: body
       *         type: object
       *         schema:
       *           $ref: '#/definitions/Line'
       *       - name: Authorization
       *         in: header
       *         type: string
       *         required: true
       *         description: Token (token goes here)
       *     responses:
       *       200:
       *         description: Line created succesfully
       *       400:
       *         description: Eroor creating line
       *       401:
       *         description: invalid / missing authentication
       */
      routes.route('/').post(this.createLine)

      return routes
    },
    createLine: (req, res) => {
      Line.createLine({
        name: req.body.name,
        bus: new Bus({
          name: req.body.bus.name,
          price: req.body.bus.price,
          frequence: req.body.bus.frequence,
          avgWaitTime: req.body.bus.avgWaitTime
        }),
        stations: req.body.lineStations
      })
        .then(line => res.json(line))
        .catch(err => console.log(err))
    }
  }
}
