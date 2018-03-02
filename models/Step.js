/**
 * Class representing a single Step
 * Step represents the whole journey from Station A to Station C on the same transport 
 */

class Step {
    /**
     * Creates a step
     * @param {Station} sourceStation First Station
     * @param {Station} destStation Last Station
     * @param {Number} price Cost of the station
     * @param {Number} dist Distance (in Km)
     * @param {Number} time Average number of minutes 
     * @param {TransportType} type Transport type
     * @param {String} name Name of the transport (eg : bus name)
     */
    constructor(sourceStation, destStation, price, dist, time, type, name = "") {
        this.from = sourceStation

        this.to = destStation

        this.price = price
        this.dist = dist
        this.time = time
        this.type = type
        this.name = name
    }
   
    /**
     * Merge two steps ( does not make any check for similar bus/stations )
     * @param {Step} step1 
     * @param {Step} step2 
     */
    mergeSteps(step1, step2) {
        let mergedStep = new Step(
            step1.sourceStation,
            step2.destStation,
            step1.price + step2.price,
            step1.dist + step2.dist,
            step1.time + step2.time,
            step1.type,
            step1.name
        )
        return mergedStep
    }
}

module.exports = Step