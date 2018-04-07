const session = require('../../neo4j/dbUtils')(
  process.env.NEO4J_URL,
  process.env.NEO4J_USER,
  process.env.NEO4J_PASSWORD
).getSession(this)

const GraphSegment = require('../../models/graphModels/GraphSegment')
const TransportType = require('../../models/TransportType')

/// TODO: Rename Stations to nodes
const getDirection = function(params, callback) {
  let transports = []
  if (params.transport.bus) transports.push(TransportType.Bus.db_label)
  if (params.transport.tram) transports.push(TransportType.Tramway.db_label)
  if (params.transport.walk) transports.push(TransportType.Walk.db_label)

  session
    .run(
      `MATCH p = AllShortestPaths((A:Station)-[*..20]->(B:Station))
            WHERE A.name = {startParam} AND B.name = {endParam}
            AND ALL(rel IN relationships(p) WHERE type(rel) IN {transportsParam})
            WITH p, RELATIONSHIPS(p) as segments
            WITH EXTRACT (segment in segments| StartNode(segment)) AS startNodes,
            EXTRACT (segment in segments| EndNode(segment)) AS endNodes,
            RELATIONSHIPS(p) as segments
            
            return segments, startNodes, endNodes`,
      {
        startParam: params.start,
        endParam: params.end,
        transportsParam: transports
      }
    )
    .then(result => {
      session.close()
      callback(result.records)
    })
    .catch(err => console.log(err))
}


var createLine = function(
  segments,
  success = s => console.log(s),
  error = err => console.log(err)
) {
  let query = GraphSegment.getNeo4JLineQuery(segments)

  session
    .run(query)
    .then(result => {
      success(result.records)
    })
    .catch(err => console.log(err))
}

module.exports = {
  getDirection,
  createLine,
}
