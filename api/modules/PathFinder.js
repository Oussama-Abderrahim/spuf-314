var DatabaseManager = require("./DatabaseManager");


var getPath = function(start, end, callback){
    DatabaseManager.getDirection(start, end, (result)=>{
        var steps = []
        
        result[0]._fields[0].forEach(station => {
            steps.push({
                name: (station.properties.name)? station.properties.name : "?"
            })
        });
        callback(steps)
    })
}


module.exports = {getPath}