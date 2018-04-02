const DatabaseManager = require("./GraphDatabaseManager")
const GraphSegment = require("../../models/GraphSegment")
const GraphNode = require("../../models/GraphNode")
const TransportType = require("../../models/TransportType")
const Line = require("../../models/Line")
const Bus = require("../../models/Bus")
const Station = require("../../models/Station")

/**
 * Updates a station 
 * @param {Station} station 
 */
var updateStation = function(station) {
    console.log("Updating station : \n", station)
    DatabaseManager.updateStation(new GraphNode(
        station.name,
        station.address,
        station.coord.lat,
        station.coord.lon,
        station.ID
    ), (updatedStations) => {
        console.log(updatedStations._fields)
    }, err => {
        console.log(err)
    })
} 

/**
 * Creates a list of GraphSegments, and pass it to DatabaseManager
 * @param {Line} line 
 */
var createLine = function (line) {

    graphSegments = []

    var lines = line.line

    for(var i = 0; i < lines.length-1; i++) {
        graphSegments.push(new GraphSegment(
            lines[i].stationID,
            lines[i+1].stationID,
            TransportType.Bus,
            lines[i].distFromPrev,
            lines[i].timeFromPrev
        ))
    }

    DatabaseManager.createLine(graphSegments)
}

module.exports = {
    createLine,
    updateStation
}