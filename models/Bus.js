/** 
 * 
*/
class Bus {

    /**
     * @param {String} name 
     * @param {Number} price (in DA)
     * @param {Number} frequence Number of buses disptached at any given time ( to compute avg Wait time)
     * @param {Number} avgWaitTime 
     */
    constructor(name, price, frequence = 1, avgWaitTime = 1.0) {
        this.name = name
        this.price = price
        this.frequence = frequence
        this.avgWaitTime = avgWaitTime

    }

}

module.exports = Bus