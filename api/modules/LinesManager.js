const DatabaseManager = require("./DatabaseManager")
const GraphSegment = require("../../models/GraphSegment")
const TransportType = require("../../models/TransportType")
const Line = require("../../models/Line")
const Bus = require("../../models/Bus")
const Station = require("../../models/Station")


var testCreateLine = function () {

    var line = new Line(
        "K3",
        3       
    )

    line.addStation(
        9,
        1,
        2
    )
    line.addStation(
        10,
        3,
        5
    )

    createLine(line)
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
    testCreateLine
}