const neo4j = require('neo4j-driver').v1;


var driver = neo4j.driver(process.env.NEO4J_URL, neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD));
var session = driver.session();

var getDirection = function(params, callback){

    var transports = [];
    if(params.transport.bus) transports.push("BusSegment")
    if(params.transport.tram) transports.push("TramSegment")
    if(params.transport.walk) transports.push("WalkSegment")

    session
        .run(`MATCH p = AllShortestPaths((A:Station)-[*..20]->(B:Station))
                WHERE A.name = {startParam} AND B.name = {endParam}
                AND ALL(rel IN relationships(p) WHERE type(rel) IN {transportsParam})
                return NODES(p), RELATIONSHIPS(p)`,
                {
                    startParam : params.start,
                    endParam : params.end,
                    transportsParam : transports
                }
        ).then((result) => {
            session.close();
            callback(result.records)
        }).catch(err => console.log(err))
}

var getAllStations = function(callback) {
    var stations = [];
    session
        .run('MATCH (n) RETURN n')
        .then((result) => {
            result.records.forEach(function (record) {
                stations.push({
                    name: record._fields[0].properties.name,
                    coord: {
                        lat: record._fields[0].properties.coord[0],
                        lon: record._fields[0].properties.coord[1]
                    }
                });
            });
            session.close();
            callback(stations)
        })
        .catch(err => console.log(err));
}

module.exports = {getAllStations, getDirection};