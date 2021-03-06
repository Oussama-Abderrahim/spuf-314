module.exports = function(dbSession) {
  let session = dbSession //|| require('../../neo4j/dbUtils')().getSession(this)

  class GraphNode {
    /**
     *
     * @param {Record} record
     * @param {Object} fields object fields if record is undefined
     */
    constructor(record, fields = {}) {
      if (record) {
        this.name = record.properties.name
        this.address = record.properties.address
        this.coordLat = record.properties.coordLat
        this.coordLon = record.properties.coordLon
        this.ID = record.identity.low /// TODO : Get proper ID
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
            station = new GraphNode(result.records[0].get(0))
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
    static getAllStations(match) {
      return new Promise((resolve, reject) => {
        let stations = []
        session
          .run(`MATCH (n) WHERE n.name CONTAINS '${match}' RETURN n`)
          .then(result => {
            result.records.forEach(function(record) {
              stations.push(new GraphNode(record.get(0)))
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
     * @param {String} fields.name
     * @param {String} fields.address
     * @param {Number} fields.coordLat
     * @param {Number} fields.coordLon
     */
    static createNode(fields) {
      return new Promise((resolve, reject) => {
        let query = GraphNode.getNeo4JCreateQuery()

        let queryParams = {
          nameParam: fields.name,
          addressParam: fields.address,
          coordLatParam: fields.coordLat,
          coordLonParam: fields.coordLon
        }

        session
          .run(query, queryParams)
          .then(result => {
            session.close()
            if (result.records) resolve(result.records[0])
            else reject(new Error('failed to create Node'))
          })
          .catch(err => {
            reject(err)
          })
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
        let query = GraphNode.getNeo4JUpdateQuery()
        let queryParams = {
          idParam: fields.ID,
          nameParam: fields.name,
          addressParam: fields.address,
          coordLatParam: fields.coordLat,
          coordLonParam: fields.coordLon
        }

        session
          .run(query, queryParams)
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
     */
    static getNeo4JUpdateQuery() {
      const query = `MATCH (s:Station) WHERE ID(s) = {idParam}
                SET s.name = "{nameParam}", s.address = "{addressParam}",
                s.coordLat = "{coordLatParam}", s.coordLon = "{coordLonParam}" 
                return s`
      return query
    }

    /**
     *
     */
    static getNeo4JCreateQuery() {
      const query = `CREATE (station:Station {
                              name:{nameParam}, address:{addressParam},
                              coordLat:{coordLatParam}, coordLon:{coordLonParam}
                            }) return station`
      return query
    }
  }

  return GraphNode
}
