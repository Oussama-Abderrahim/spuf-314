var DatabaseManager = require("./DatabaseManager");


var getPath = function(start, end, callback){
    DatabaseManager.getDirection(start, end, (result)=>{
        var results = []

        console.log(result)
        result.forEach((record, i)=>{
            results.push([])
            record._fields.forEach((field,j)=>{
                if (j==0 || j == record._fields.length-1) {
                    results[i].push({
                        name: (field.properties)? field.properties.name : "sa9si xD"
                    })
                }else{
                    results[i].push({name:field.start.properties.name})
                    results[i].push({name:field.end.properties.name})   
                }
            })
        })
        callback(results[0])
    })
}


module.exports = {getPath}