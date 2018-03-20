const Station = require("./Station")
const Bus  = require("./Bus")

class Line {
    /**
     * @param {String} name Name of the line (usualy same name as Bus)
     * @param {Station[]} stations an array of Station, sorted from source to destination
     * @param {Bus} bus line's Bus
     */
    constructor(name, stations, bus) {
        this.name = name
        this.line = []
        stations.forEach((station) => {
            this.line.push({
                station, 
                distFromPrev: 0,
                timeFromPrev: 0
            })
        })
        this.bus = bus
    }

    /**
     * Add station to line
     * @param {Station} station a station
     */
    addStation(station, distFromPrev, timeFromPrev, index = this.stations.length) {
        this.line.push({
            station,
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