var DatabaseManager = require("./GraphDatabaseManager");
const Path = require("../../models/Path")
const Step = require("../../models/Step")
const TransportType = require("../../models/TransportType")


/**
 * 
 * @param {*} db_result a record from the database results  
 */
var _makePath = function (db_result) {
    var segments = db_result._fields[db_result._fieldLookup["segments"]]
    var startNodes = db_result._fields[db_result._fieldLookup["startNodes"]]
    var endNodes = db_result._fields[db_result._fieldLookup["endNodes"]]

    var totalDist = 0 // TODO : get from Path
    var totalPrice = 0 // TODO : get from Path
    var totalTime = 0 // TODO : get from Path

    let path = new Path(totalDist, totalPrice, totalTime)

    for (var i = 0; i < segments.length; i++) {
        let sourceStation = {
            name: startNodes[i].properties.name,
            coords: {
                lat: startNodes[i].properties.coord[0],
                lon: startNodes[i].properties.coord[1]
            },
            address: startNodes[i].properties.address
        }
        let destStation = {
            name: endNodes[i].properties.name,
            coords: {
                lat: endNodes[i].properties.coord[0],
                lon: endNodes[i].properties.coord[1]
            },
            address: endNodes[i].properties.address
        }

        let price = 0
        let dist = 0
        let time = 0

        let type = TransportType.getTransportType(segments[i].type).label

        let name = (segments[i].properties.buses) ? segments[i].properties.buses[0] : ""

        let step = new Step(sourceStation, destStation, price, dist, time, type, name)

        path.addStep(step)
    }
    return path;
}

/**
 * Evaluates path's total distance, time and price
 * @param {Path} path 
 */
var _evaluatePath = function (path) {
    path.totalDistance = 0
    path.totalPrice = 0
    path.totalTime = 0
    path.steps.forEach(step => {
        path.totalDistance += step.dist
        path.totalPrice += step.price
        path.totalTime += step.time
    })

    return path
}

/**
 * Returns a predefined Default price for each type
 * @param {TransportType} type
 * @return {Number} price 
 */
var _getPrice = function (type) {
    switch (type) {
        case TransportType.Bus:
            return 20
            break
        case TransportType.Tramway:
            return 40
            break
        default:
            return 0
    }
}

/**
 * Computes the path from point A to B given in params
 * Queries from the DatabaseManager and performs call all evaluation functions
 * @param {QueryParams} params // TODO : Add query model 
 * @param {function} callback callback using an array of Path objects
 */
var getPath = function (params, callback) {

    DatabaseManager.getDirection(params, (db_results) => {
        var paths = []

        db_results.forEach((db_result, i) => {
            let path = []
            try {
                path = _makePath(db_result)
                path = _evaluatePath(path)
            } catch (err) {
                /// TODO : Add a logger
                console.log(err)
                path = []
            }
            paths.push(path)
        })
        callback(paths)
    })
}


module.exports = {
    getPath
}