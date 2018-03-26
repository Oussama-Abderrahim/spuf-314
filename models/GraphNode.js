

class GraphNode {

    /**
     * An object that represents a GraphNode
     * @param {String} name Name of station
     * @param {String} address 
     * @param {Number} coordLat 
     * @param {Number} coordLon 
     * @param {ID} ID -1 if not yet created
     */
    constructor(name, address, coordLat, coordLon, ID=-1) {
        this.name = name
        this.address = address
        this.coordLat = coordLat
        this.coordLon = coordLon
        this.ID = ID;
    }
}

module.exports = GraphNode