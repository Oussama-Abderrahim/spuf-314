/**
 * @swagger
 * definitions:
 *   Step:
 *     type: object
 *     properties:
 *       sourceStation:
 *         $ref: '#/definitions/Station'
 *       destStation:
 *         $ref: '#/definitions/Station' 
 *       price:
 *         type: number
 *       time:
 *         type: number
 *       type:
 *         type: string
 *       name:
 *         type: string
 */
const Station = require('./Station')()

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
     * test if step can be merged with another
     * @param {Step} step 
     */
    canMergeWith(step) {
        return ( this.type === step.type
            && this.name === step.name
            && this.to.equals(step.from) )
    }

    /**
     * Merge two steps ( does not make any check for similar bus/stations )
     * @param {Step} step1 
     * @param {Step} step2 
     * @returns {Step} minimizedStep
     */
    static mergeSteps(step1, step2) {
        let mergedStep = new Step(
            step1.from,
            step2.to,
            Math.max(step1.price, step2.price),
            step1.dist + step2.dist,
            step1.time + step2.time,
            step1.type,
            step1.name
        )
        return mergedStep
    }
}

module.exports = Step