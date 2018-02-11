var DatabaseManager = require("./DatabaseManager");


var getPath = function(params, callback){

    DatabaseManager.getDirection(params, (result)=>{
        var steps = []
        
        try {
            result[0]._fields[0].forEach(station => {
                steps.push({
                    name: (station.properties.name)? station.properties.name : "?"
                })
            });
        } catch (err) {
            steps = []
        }
        callback(steps)
    })
}


module.exports = {getPath}