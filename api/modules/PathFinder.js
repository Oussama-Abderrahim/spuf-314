var DatabaseManager = require("./DatabaseManager");
const Path = require("../../models/Path")
const Step = require("../../models/Step")
const Station = require("../../models/Station")


var getPath = function(params, callback){

    DatabaseManager.getDirection(params, (results)=>{
        var paths = []
        
        try {
            results.forEach((result, i) => {
                var segments = result._fields[result._fieldLookup["segments"]]
                var startNodes = result._fields[result._fieldLookup["startNodes"]]
                var endNodes = result._fields[result._fieldLookup["endNodes"]]
                
                var totalDist = 0   // TODO : get from Path 
                var totalPrice = 0   // TODO : get from Path 
                var totalTime = 0   // TODO : get from Path

                let path = new Path(totalDist, totalPrice, totalTime)

                for(var i = 0; i < segments.length; i++) {
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

                    let type = segments[i].type
                    let name = (segments[i].properties.buses)? segments[i].properties.buses[0]: ""

                    let step = new Step(sourceStation, destStation, price, dist, time, type, name)

                    path.addStep(step)
                }
                paths.push(path)
            })
            console.log(paths)
        } catch (err) {
            console.log(err)
            paths = []
            /// TODO : Add a logger
        }
        callback(paths)
    })
}


module.exports = {getPath}