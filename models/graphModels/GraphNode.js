module.exports = function(dbSession) {
  let session = dbSession || require('../../neo4j/dbUtils')().getSession(this)

  class GraphNode {
    /**
     *
     * @param {Record} record
     * @param {Object} fields object fields if record is undefined
     */
    constructor(record, fields = {}) {
      if (record) {
        this.name = record.get(0).properties.name
        this.address = record.get(0).properties.address
        this.coordLat = record.get(0).properties.coordLat
        this.coordLon = record.get(0).properties.coordLon
        this.ID = record.get(0).identity.low /// TODO : Get proper ID
      } else {
        this.name = fields.name
        this.address = fields.address
        this.coordLat = fields.coordLat
        this.coordLon = fields.coordLon
        this.ID = fields.ID
      }
    }

    /**
     *
     * @param {ID} id
     */
    static getStation(id) {
      return new Promise((resolve, reject) => {
        let station = {}
        session
          .run(`MATCH (s:Station) WHERE ID(s)=${id} RETURN s`)
          .then(result => {
            station = new GraphNode(result.records[0])
            session.close()
            resolve(station)
          })
          .catch(err => {
            reject(err)
          })
      })
    }

    /**
     *
     */
    static getAllStations() {
      return new Promise((resolve, reject) => {
        let stations = []
        session
          .run('MATCH (n) RETURN n')
          .then(result => {
            result.records.forEach(function(record) {
              stations.push(new GraphNode(record))
            })
            session.close()
            resolve(stations)
          })
          .catch(err => reject(err))
      })
    }

    /**
     *
     * @param {Object} fields
     * @param {Number} fields.ID
     * @param {String} fields.name
     * @param {String} fields.address
     * @param {Number} fields.coordLat
     * @param {Number} fields.coordLon
     */
    static updateNode(fields) {
      return new Promise((resolve, reject) => {
        let query = GraphNode.getNeo4JUpdateQuery(new GraphNode(null, fields))
        session
          .run(query)
          .then(result => {
            session.close()
            if (result.records) resolve(result.records[0])
            else resolve({})
          })
          .catch(err => {
            reject(err)
          })
      })
    }

    /**
     *
     * @param {GraphNode} station
     */
    static getNeo4JUpdateQuery(station) {
      var query = `MATCH (s:Station) WHERE ID(s) = ${station.ID}
                SET s.name = "${station.name}", s.address = "${station.address}",
                s.coordLat = "${station.coordLat}", s.coordLon = "${station.coordLon}" 
                return s`
      return query
    }
  }

  return GraphNode
}
