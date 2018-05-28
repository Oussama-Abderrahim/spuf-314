/**
 * @swagger
 * definitions:
 *   Line:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *       name:
 *         type: string
 *       bus:
 *         $ref: '#/definitions/Bus'
 *       lineStations:
 *         type: array
 *         items:
 *           $ref: '#/definitions/LineStations'
 *
 *   LineStations:
 *      type: object
 *      properties:
 *          stationID:
 *              type: integer
 *              default: 1
 *          distFromPrev:
 *              type: number
 *              default: 1
 *          timeFromPrev:
 *              type: number
 *              format: 'minutes'
 *              default: 1
 */

/**
 * @class Line
 * @classdesc A Line object that represents a Bus line with relative information.
 * @property {String} this.name Name of the line (usualy same name as Bus).
 * @property {String} this.type Type of the line ( stored using TransportType.db_label )
 * @property {Bus} this.bus The Bus serving this line (one bus per line).
 * @property {Array.<LineStation>} this.lineStations The list of stations in this line, with time and distance between each station.
 * @this Line
 *
 *
 * @typedef LineStation
 * @type {Object}
 * @property {Number} stationID ObjectID of the station in this line
 * @property {Number} distFromPrev distance from previous station (in meters)
 * @property {Number} timeFromPrev avg time to get to this one from previous (in minutes)
 */

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Bus = require('./Bus')
const TransportType = require('./TransportType')

const LineSchema = new Schema({
  name: String,
  type: String,
  bus: Bus.schema,
  lineStations: [
    {
      stationID: Number,
      distFromPrev: Number,
      timeFromPrev: Number
    }
  ]
})

module.exports = function(dbSession) {
  const TransportType = require('./TransportType')
  const GraphSegment = require('./graphModels/GraphSegment')(dbSession)

  class Line {
    /**
     * @param {Object} lineParams
     * @param {String} lineParams.name Name of the line (usualy same name as Bus).
     * @param {TransportType} linesParams.type The type of transport of this line
     * @param {Bus} lineParams.bus The Bus serving this line (one bus per line).
     * @param {Array.<LineStation>} lineParams.stations an array of Station, sorted from source to destination.
     */
    static createLine(lineParams) {
      lineParams.type = lineParams.type || TransportType.Bus // by default Bus
      
      lineParams.type = lineParams.type.db_label

      return new Promise((resolve, reject) => {

        // Create Line from Schema
        LineModel.create(lineParams).then(line => {
          line.lineStations = []
          lineParams.stations.forEach(station => {
            line.lineStations.push({
              stationID: station.stationID,
              distFromPrev: station.distFromPrev,
              timeFromPrev: station.timeFromPrev
            })
          })
          // Save to Mongo then to graph
          line.save(err => {
            if (err) reject(err)
            // return line
            Line.saveToGraph(line)
              .then(records => resolve(line))
              .catch(err => reject(err))
          })
        })
      })
    }

    /**
     * @param {Line} line
     */
    static saveToGraph(line) {
      let graphSegments = []

      let lineStations = line.lineStations

      for (let i = 0; i < lineStations.length - 1; i++) {
        graphSegments.push(
          new GraphSegment(
            lineStations[i].stationID,
            lineStations[i + 1].stationID,
            line.type,
            lineStations[i + 1].distFromPrev,
            lineStations[i + 1].timeFromPrev,
            line.bus.name
          )
        )
      }

      return GraphSegment.createLineGraph(graphSegments)
    }

    /**
     * Insert a station into the line
     * @param {LineStation} lineStation Station to add
     * @param {Number} index position of station in line (default : last)
     */
    addStation(lineStation, index = this.line.length) {
      this.line.push({
        stationID,
        distFromPrev,
        timeFromPrev
      })
    }
  }

  LineSchema.loadClass(Line)

  let LineModel = mongoose.model('Line', LineSchema)

  return LineModel
}
