class Step {
    constructor(sourceStation, destStation, price, dist, time, type, name = "") {
        this.from = sourceStation

        this.to = destStation

        this.price = price
        this.dist = dist
        this.time = time
        this.type = type
        this.name = name
    }
   
}

module.exports = Step