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
 *       coordLat:
 *         type: number
 *       coordLon:
 *         type: number
 */

const DatabaseManager = require('../controllers/modules/DatabaseManager')
const LinesManager = require("../controllers/modules/LinesManager")

const GraphNode = require('./GraphNode')

class Station {

  /**
   * 
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
   * Fetch all stations from Neo4J database
   * @returns {Promise.<Array.<Station>, Error>} An array of Station objects
   */
  static getAll() {
    return new Promise((resolve, reject) => {
      let stations = []
      DatabaseManager
        .getAllStations()
        .then(stationNodes => {
          stationNodes.forEach(node => {
            stations.push(new Station(
              node.ID,
              node.name,
              node.address,
              node.coordLat,
              node.coordLon
            ))
          });
          resolve(stations)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  /**
   * 
   * @param {Number} id If of the station to get
   * @returns {Promise.<Station, Error>} A promise for a Station object
   */
  static getByID(id) {
    return new Promise((resolve, reject) => {
      DatabaseManager
        .getStation(id)
        .then((stationNode) => {
          resolve(new Station(
            stationNode.ID,
            stationNode.name,
            stationNode.address,
            stationNode.coordLat,
            stationNode.coordLon
          ))
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  save() {
    LinesManager.updateStation(this)
  }
}

module.exports = Station