const neo4j = require('neo4j-driver').v1;

const Station =  require('../../models/Station')
const GraphSegment =  require('../../models/GraphSegment')
const TransportType =  require('../../models/TransportType')

var driver = neo4j.driver(process.env.NEO4J_URL, neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD));
var session = driver.session();

var getDirection = function (params, callback) {

    var transports = [];
    if (params.transport.bus) transports.push(TransportType.Bus.db_label)
    if (params.transport.tram) transports.push(TransportType.Tramway.db_label)
    if (params.transport.walk) transports.push(TransportType.Walk.db_label)

    session
        .run(`MATCH p = AllShortestPaths((A:Station)-[*..20]->(B:Station))
            WHERE A.name = {startParam} AND B.name = {endParam}
            AND ALL(rel IN relationships(p) WHERE type(rel) IN {transportsParam})
            WITH p, RELATIONSHIPS(p) as segments
            WITH EXTRACT (segment in segments| StartNode(segment)) AS startNodes,
            EXTRACT (segment in segments| EndNode(segment)) AS endNodes,
            RELATIONSHIPS(p) as segments
            
            return segments, startNodes, endNodes`, {
            startParam: params.start,
            endParam: params.end,
            transportsParam: transports
        }).then((result) => {
            session.close();
            callback(result.records)
        }).catch(err => console.log(err))
}

var getAllStations = function (callback) {
    var stations = [];
    session
        .run('MATCH (n) RETURN n')
        .then((result) => {
            result.records.forEach(function (record) {
                stations.push({
                    id: record._fields[0].identity.low,
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

var getStation = function (id, callback) {
    var station = {}
    session
        .run(`MATCH (s:Station) WHERE ID(s)=${id} RETURN s`)
        .then((result) => {
            station = {
                id : result.records[0]._fields[0].identity.low,
                name: result.records[0]._fields[0].properties.name,
                coord: {
                    lat: result.records[0]._fields[0].properties.coord[0],
                    lon: result.records[0]._fields[0].properties.coord[1]
                }
            }
            session.close()
            callback(station)
        })
        .catch(err => {
            console.log(err)
            callback(station)
        })
}

/**
 * Builds query to CREATE a line from an array of GraphSegment
 * @param {GraphSegment} segments 
 */
var createLine = function(segments) {

    var query = ""

    // Match initial Station
    query += `MATCH (s${0}:Station) WHERE ID(s${0} = ${segments[0].srcStationID}) `

    segments.forEach((segment, index)=>{
        // Match next station
        query += `MATCH (s${index+1}:Station) `
                    + `WHERE ID(s${index+1} = ${segment.srcStationID}) `

        // Create segment between last station and current one
        query += `CREATE (s${index}) - [
            :${segment.type.db_label}
            {
                distance: ${segment.distance},
                avgTime: ${segment.avgTime},
            }
        ] -> (s${index+1}) `
    })

    console.log(query)
}

module.exports = {
    getAllStations,
    getDirection,
    getStation,
    createLine
};