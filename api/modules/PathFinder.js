var DatabaseManager = require("./DatabaseManager");


var getPath = function(start, end, callback){
    DatabaseManager.getDirection(start, end, (result)=>{
        var results = []

        result.forEach((record, i)=>{
            results.push([])
            record._fields.forEach(field=>{
                results[i].push({
                    name: (field.properties)? field.properties.name : "sa9si xD"
                })
            })
        })
        callback(results[0])
    })
}


module.exports = {getPath}