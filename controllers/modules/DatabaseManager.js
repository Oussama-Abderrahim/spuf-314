const neo4j = require('neo4j-driver').v1;

const Station = require('../../models/Station')
const GraphNode = require('../../models/GraphNode')
const GraphSegment = require('../../models/GraphSegment')
const TransportType = require('../../models/TransportType')

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
                stations.push(new Station(
                    record._fields[0].identity.low, /// TODO : Get proper ID
                    record._fields[0].properties.name,
                    record._fields[0].properties.address,
                    record._fields[0].properties.coord[0],
                    record._fields[0].properties.coord[1]
                ))
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
            station = new Station(
                result.records[0]._fields[0].identity.low, /// TODO : Get proper ID
                result.records[0]._fields[0].properties.name,
                result.records[0]._fields[0].properties.address,
                result.records[0]._fields[0].properties.coord[0],
                result.records[0]._fields[0].properties.coord[1]
            )
            session.close()
            callback(station)
        })
        .catch(err => {
            console.log(err)
            callback(station)
        })
}

/**
 * 
 * @param {GraphNode} station 
 */
var updateStation = function (station,
        success = () => console.log("created"),
        error = () => console.log("error")) {

    var query = GraphNode.getNeo4JUpdateQuery(station)

    session
        .run(query)
        .then((result) => {
            session.close()
            if (result.records)
                success(result.records)
        }).catch(err => {
            error(err)
        })
}


var createLine = function (segments, success = (s) =>console.log(s), error = err=>console.log(err)) {

    let query = GraphSegment.getNeo4JLineQuery(segments)

    session
        .run(query)
        .then((result) => {
            success(result.records)
        })
        .catch(err => console.log(err))
}


module.exports = {
    getAllStations,
    getDirection,
    getStation,
    createLine,
    updateStation
};