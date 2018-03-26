const Station = require("./Station")
const Bus  = require("./Bus")

class Line {
    /**
     * @param {String} name Name of the line (usualy same name as Bus)
     * @param {ID} busID line's Bus's ID
     * @param {Station[]} stations an array of Station, sorted from source to destination
   */
    constructor(name, busID, stations = []) {
        this.name = name
        this.line = []
        stations.forEach((stationID) => {
            this.line.push({
                stationID, 
                distFromPrev: 0,
                timeFromPrev: 0
            })
        })
        this.busID = busID
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
    setBus(busID) {
        this.busID = busID
    }
}

module.exports = Line