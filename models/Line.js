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
const Bus  = require("./Bus")

/**
* @class Line
* @classdesc A Line object that represents a Bus line with relative information.
* @property {String} this.name Name of the line (usualy same name as Bus).
* @property {Bus} this.bus The Bus serving this line (one bus per line).
* @property {Array} this.line The list of stations in this line, with time and distance between each station.
* @this Line
*/
class Line {
    /**
     * @param {String} name Name of the line (usualy same name as Bus).
     * @param {Bus} bus The Bus serving this line (one bus per line).
     * @param {Station[]} stations an array of Station, sorted from source to destination.
   */
    constructor(name, bus, stations = []) {
        this.name = name
        this.bus = bus

        this.initLine()
    }

    /**
     * @param {Station[]} stations 
     */
    initLine(stations) {
        this.line = []

        stations.forEach((station) => {
            this.line.push({
                stationID: station.ID,
                distFromPrev: 0,
                timeFromPrev: 0
            })
        })
    }

    /**
     * 
     * @param {Station} stationID station to add to line
     * @param {Number} distFromPrev distance from previous station (in meters)
     * @param {Number} timeFromPrev time to get to this station from previous (in minutes)
     * @param {Number} index position of Station in line (default : last)
     */
    addStation(stationID, distFromPrev, timeFromPrev, index = this.line.length) {
        this.line.push({
            stationID,
            distFromPrev,
            timeFromPrev
        })
    }

    /**
     * Set Bus
     * @param {Bus} bus
     */
    setBus(bus) {
        this.bus = bus
    }


}

module.exports = Line