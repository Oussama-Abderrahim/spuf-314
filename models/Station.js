/**
 * @swagger
 * definitions:
 *   Station:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *       name:
 *         type: string
 *       address:
 *         type: string
 *       coord.lat:
 *         type: number
 *       coord.lon:
 *         type: number
 */
module.exports = function(dbSession) {
  let GraphNode = require('./graphModels/GraphNode')(dbSession)

  class Station {
    /**
     * @param {ID} ID
     * @param {String} name
     * @param {String} address
     * @param {Number} coordLat
     * @param {Number} coordLon
     */
    constructor(ID, name, address, coordLat, coordLon) {
      this.ID = ID
      this.name = name
      this.address = address
      this.coord = {
        lat: coordLat,
        lon: coordLon
      }
    }

    /**
     * Compares with another Station
     * @param {Station} station 
     * @returns true if stations are equal
     */
    equals(station) {
      if (this.ID && station.ID) return this.ID == station.ID
      else
        return (
          this.name === station.name &&
          this.address === station.address &&
          this.coordLat === station.coordLat &&
          this.coordLon === station.coordLon
        )
    }

    /**
     *
     * @param {Station} station
     * @return {Promise.<Station>} created station
     */
    static create(station) {
      return new Promise((resolve, reject) => {
        GraphNode.createNode({
          name: station.name,
          address: station.address,
          coordLat: station.coord.lat,
          coordLon: station.coord.lon
        })
          .then(createdNode => {
            resolve(Station.convertNodeToStation(createdNode))
          })
          .catch(err => reject(err))
      })
    }

    save() {
      let station = this
      GraphNode.updateNode({
        ID: station.ID,
        name: station.name,
        address: station.address,
        coordLat: station.coord.lat,
        coordLon: station.coord.lon
      })
        .then(updatedStations => {
          console.log(updatedStations._fields)
        })
        .catch(err => console.log(err))
    }

    static convertNodeToStation(graphNode) {
      return new Station(
        graphNode.ID,
        graphNode.name,
        graphNode.address,
        graphNode.coordLat,
        graphNode.coordLon
      )
    }

    /**
     * Fetch all stations from Graph database
     * @returns {Promise.<Array.<Station>, Error>} An array of Station objects
     */
    static getAll(match) {
      return new Promise((resolve, reject) => {
        let stations = []
        GraphNode.getAllStations(match)
          .then(stationNodes => {
            stationNodes.forEach(node => {
              stations.push(Station.convertNodeToStation(node))
            })
            resolve(stations)
          })
          .catch(err => {
            reject(err)
          })
      })
    }

    /**
     *
     * @param {Number} id Graph database' ID of station to get
     * @returns {Promise.<Station, Error>} A promise for a Station object
     */
    static getByID(id) {
      return new Promise((resolve, reject) => {
        GraphNode.getStation(id)
          .then(stationNode => {
            resolve(Station.convertNodeToStation(stationNode))
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }

  return Station
}
