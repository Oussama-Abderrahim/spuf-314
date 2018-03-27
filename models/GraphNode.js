

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

    static getNeo4JUpdateQuery(station) {

        var query = `MATCH (s:Station) WHERE ID(s) = ${station.ID}
                SET s.name = "${station.name}", s.address = "${station.address}",
                    s.coordLat = "${station.coordLat}", s.coordLon = "${station.coordLon}" 
                return s`
    
        return query
    }

    static getNeo4JUpdateQuery(station) {

        var query = `MATCH (s:Station) WHERE ID(s) = ${station.ID}
                SET s.name = "${station.name}", s.address = "${station.address}",
                    s.coordLat = "${station.coordLat}", s.coordLon = "${station.coordLon}" 
                return s`
    
        return query
    }
    
}


module.exports = GraphNode