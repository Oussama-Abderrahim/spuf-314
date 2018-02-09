var DatabaseManager = require("./DatabaseManager");


var getPath = function(start, end, callback){
    DatabaseManager.getDirection(start, end, (result)=>{
        var steps = []

        callback(result)
    })
}


module.exports = {getPath}