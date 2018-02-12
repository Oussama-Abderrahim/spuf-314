class Path {
    constructor(dist = 0, price = 0) {
        this.totalDistance = 0
        this.totalPrice = 0
        this.steps = new Array()
    }

    addStep(step) {
        this.steps.push(step)
    }
}