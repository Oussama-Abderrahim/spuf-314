class Path {
    constructor(dist = 0, price = 0, time = 0) {
        this.totalDistance = dist
        this.totalPrice = price
        this.totalTime = time
        this.steps = new Array()
    }

    addStep(step) {
        this.steps.push(step)
    }
}

module.exports = Path