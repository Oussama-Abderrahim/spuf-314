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
 *       line:
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
const Station = require("./Station")
const Bus = require("./Bus")

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * @class Line
 * @classdesc A Line object that represents a Bus line with relative information.
 * @property {String} this.name Name of the line (usualy same name as Bus).
 * @property {Bus} this.bus The Bus serving this line (one bus per line).
 * @property {Array.<LineStation>} this.line The list of stations in this line, with time and distance between each station.
 * @this Line
 */
/**
 * @typedef LineStation
 * @type {Object}
 * @property {Number} stationID ObjectID of the station in this line
 * @property {Number} distFromPrev distance from previous station (in meters)
 * @property {Number} timeFromPrev avg time to get to this one from previous (in minutes)
 */

 const LineSchema = new Schema({
    name: String,
    bus: Bus.schema,
    LineStations: [{
        stationID: Number,
        distFromPrev: Number,
        timeFromPrev: Number
    }]
})

class Line {
    
    /**
     * @param {Object} lineData
     * @param {String} lineData.name Name of the line (usualy same name as Bus).
     * @param {Bus} lineData.bus The Bus serving this line (one bus per line).
     * @param {Array.<LineStation>} lineData.stations an array of Station, sorted from source to destination.
     */
    static createLine(lineData, cb) {
        return LineModel.create(lineData)
        .then((line) => {
            line.LineStations = []
    
            lineData.stations.forEach((station) => {
                line.LineStations.push({
                    stationID: station.stationID,
                    distFromPrev: station.distFromPrev,
                    timeFromPrev: station.timeFromPrev
                })
            })

            line.save(err => {
                if(err) console.log(err)
                else console.log("saved")
            })
            return line
        })
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

const LineModel = mongoose.model('Line', LineSchema);

module.exports = LineModel