/**
 * @swagger
 * definitions:
 *   Bus:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *       name:
 *         type: string
 *       price:
 *         type: number
 *       frequence:
 *         type: number
 *       avgWaitTime:
 *         type: number
 */
class Bus {

    /**
     * @param {ID} ID
     * @param {String} name 
     * @param {Number} price (in DA)
     * @param {Number} frequence Number of buses disptached at any given time ( to compute avg Wait time)
     * @param {Number} avgWaitTime 
     */
    constructor(ID, name, price, frequence = 1, avgWaitTime = 1.0) {
        this.ID = ID
        this.name = name
        this.price = price
        this.frequence = frequence
        this.avgWaitTime = avgWaitTime

    }

}

module.exports = Bus