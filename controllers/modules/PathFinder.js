const Path = require('../../models/Path')
const Step = require('../../models/Step')
const TransportType = require('../../models/TransportType')

module.exports = function(dbSession) {
  const Station = require('../../models/Station')(dbSession)
  const GraphNode = require('../../models/graphModels/GraphNode')(dbSession)

  const getPathFromRecord = record => {
    let path = []
    try {
      path = _makePath(record)
      path = path.minimize()
      return path
    } catch (err) {
      console.error(err)
      return []
    }
  }
  /**
   * @param {*} db_result a record from the database results
   */
  const _makePath = function(db_result) {
    let segments = db_result.get('segments')
    let startNodes = db_result.get('startNodes')
    let endNodes = db_result.get('endNodes')

    let path = new Path()

    for (let i = 0; i < segments.length; i++) {
      let sourceStation = Station.convertNodeToStation(
        new GraphNode(startNodes[i])
      )
      let destStation = Station.convertNodeToStation(new GraphNode(endNodes[i]))

      let type = TransportType.getTransportType(segments[i].type).label

      let price = _getPrice(type)
      let dist = segments[i].properties.distance.toNumber()
      let time = segments[i].properties.avgTime.toNumber()

      let name = segments[i].properties.bus ? segments[i].properties.bus : 'X'

      let step = new Step(
        sourceStation,
        destStation,
        price,
        dist,
        time,
        type,
        name
      )

      path.addStep(step)
    }
    return path
  }

  /**
   * Returns a predefined Default price for each type
   * @param {TransportType} type
   * @return {Number} price
   */
  const _getPrice = function(type) {
    switch (type) {
      case TransportType.Bus.label:
        return 20
        break
      case TransportType.Tramway.label:
        return 40
        break
      default:
        return 0
    }
  }

  /**
   * Computes the path from point A to B given in params
   * Queries from GraphDatabase and performs call all evaluation functions
   * @param {Object} params
   * @param {String} params.start Name of start Station
   * @param {String} params.end Name of end Station
   * @param {Array.<Boolean>} params.transport list of transports to use
   * @param {Boolean} params.transport.bus true if to include Bus in path
   * @param {Boolean} params.transport.tram true if to include tramway in path
   * @param {Boolean} params.transport.walk true if to include walking in path
   */
  const getPath = function(params) {
    return computeDirection(params)
  }

  /**
   * Compute direction from Graphdatabase
   * @param {Object} params
   * @param {String} params.start Name of start Station
   * @param {String} params.end Name of end Station
   * @param {Array.<Boolean>} params.transport list of transports to use
   * @param {Boolean} params.transport.bus true if to include Bus in path
   * @param {Boolean} params.transport.tram true if to include tramway in path
   * @param {Boolean} params.transport.walk true if to include walking in path
   */
  const computeDirection = function(params) {
    return new Promise((resolve, reject) => {
      let transports = []
      if (params.transport.bus) transports.push(TransportType.Bus.db_label)
      if (params.transport.tram) transports.push(TransportType.Tramway.db_label)
      if (params.transport.walk) transports.push(TransportType.Walk.db_label)

      let paths = []

      const query = `MATCH p = AllShortestPaths((A:Station)-[*..20]->(B:Station))
            WHERE A.name = {startParam} AND B.name = {endParam}
            AND ALL(rel IN relationships(p) WHERE type(rel) IN {transportsParam})
            WITH p, RELATIONSHIPS(p) as segments
            WITH EXTRACT (segment in segments| StartNode(segment)) AS startNodes,
            EXTRACT (segment in segments| EndNode(segment)) AS endNodes,
            RELATIONSHIPS(p) as segments
            
            return segments, startNodes, endNodes`

      dbSession
        .run(query, {
          startParam: params.start,
          endParam: params.end,
          transportsParam: transports
        })
        .subscribe({
          onNext: record => {
            paths.push(getPathFromRecord(record))
          },
          onCompleted: () => {
            dbSession.close()
            resolve(paths)
          },
          onError: function(error) {
            console.log(error)
          }
        })
    })
  }

  return {
    getPath
  }
}
