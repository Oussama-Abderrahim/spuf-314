const DatabaseManager = require("./GraphDatabaseManager")
const GraphSegment = require("../../models/graphModels/GraphSegment")
const TransportType = require("../../models/TransportType")
const Line = require("../../models/Line")

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
    createLine
}