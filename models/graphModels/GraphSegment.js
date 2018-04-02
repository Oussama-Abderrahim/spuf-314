/** 
 * 
 */
class GraphSegment {

    /**
     * 
     * @param {ID} srcStationID ID of the source station
     * @param {ID} destStationID ID of the destination station
     * @param {TransportType} type 
     * @param {Number} distance in meters
     * @param {Number} avgTime average time to get from src to dst (in minutes)
     * @param {Bus} bus 
     */
    constructor(srcStationID, destStationID, type, distance, avgTime, bus = {}) {
        this.srcStationID = srcStationID
        this.destStationID = destStationID
        this.type = type
        this.distance = distance
        this.avgTime = avgTime
        if (bus)
            this.bus = bus
    }

    /**
     * Builds query to CREATE a line from an array of GraphSegment
     * @param {GraphSegment[]} segments 
     */
    static getNeo4JLineQuery(segments) {

        var query = ""

        // Match initial Station
        query += `MATCH (s${0}:Station) WHERE ID(s${0}) = ${segments[0].srcStationID} `

        segments.forEach((segment, index) => {
            // Match next station
            query += `MATCH (s${index+1}:Station) ` +
                `WHERE ID(s${index+1}) = ${segment.srcStationID} `

            // Create segment between last station and current one
            query += `CREATE (s${index}) - [
                    :${segment.type.db_label}
                    {
                        distance: ${segment.distance},
                        avgTime: ${segment.avgTime},
                    }
                ] -> (s${index+1}) `
        })
        console.log(query)
        return query
    }
}

module.exports = GraphSegment
