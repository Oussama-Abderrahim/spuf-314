var DatabaseManager = require("./DatabaseManager");


var getPath = function(start, end, callback){
    DatabaseManager.getDirection(start, end, callback)
}


module.exports = {getPath}