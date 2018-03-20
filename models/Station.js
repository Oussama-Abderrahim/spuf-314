
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
    this.ID = ID,
    this.name = name,
    this.address = address,
    this.coord = {
      lat: coordLat,
      lon: coordLon
    }
  }
}

module.exports = Station