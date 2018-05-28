module.exports = function(dbSession) {
  class GraphSegment {
    /**
     * @param {ID} srcStationID ID of the source station
     * @param {ID} destStationID ID of the destination station
     * @param {String} type
     * @param {Number} distance in meters
     * @param {Number} avgTime average time to get from src to dst (in minutes)
     * @param {String} bus
     */
    constructor(srcStationID,destStationID,type,distance,avgTime,bus = '') {
      this.srcStationID = srcStationID
      this.destStationID = destStationID
      this.type = type
      this.distance = distance
      this.avgTime = avgTime
      if (bus) this.bus = bus
    }

    /**
     * Creates a list of GraphSegments, and pass it to DatabaseManager
     * @param {Array.<GraphSegment>} graphSegments
     */
    static createLineGraph(graphSegments) {
      return new Promise((resolve, reject) => {
        
        let query = GraphSegment.getNeo4JLineQuery(graphSegments)

        dbSession
          .run(query)
          .then(result => resolve(result.records))
          .catch(err => reject(err))
      })
    }

    /**
     * Builds query to CREATE a line from an array of GraphSegment
     * @param {Array.<GraphSegment>} segments
     */
    static getNeo4JLineQuery(segments) {
      let matchQueries = ''
      let createQueries = ''

      // Match initial Station
      matchQueries += `MATCH (s${0}:Station) WHERE ID(s${0}) = ${segments[0].srcStationID} \n`

      segments.forEach((segment, index) => {
        // Match next station
        matchQueries +=
          `MATCH (s${index + 1}:Station) ` +
          `WHERE ID(s${index + 1}) = ${segment.destStationID}\n`

        // Create segment between last station and current one
        createQueries += `CREATE (s${index}) - [:${segment.type}{
          distance: ${segment.distance},
          avgTime: ${segment.avgTime},
          bus: '${segment.bus}'
        }] -> (s${index + 1}) \n`
      })

      let query = matchQueries + '\n' + createQueries
    //   console.log(query)
      return query
    }
  }

  return GraphSegment
}
