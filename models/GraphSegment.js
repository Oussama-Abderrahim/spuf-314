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
    constructor(srcStationID, destStationID, type, distance, avgTime, bus = {})
    {
        this.srcStationID = srcStationID
        this.destStationID = destStationID
        this.type = type
        this.distance = distance
        this.avgTime = avgTime
        if(bus)
            this.bus = bus
    }
}

module.exports = GraphSegment