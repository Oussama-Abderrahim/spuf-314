/**
 * @swagger
 * definitions:
 *   Path:
 *     type: object
 *     properties:
 *       totalDist:
 *         type: number
 *       totalPrice:
 *         type: number
 *       totalTime:
 *         type: number
 *       steps:
 *         type: array
 *         items:
 *           $ref: '#/definitions/Step'
 */
class Path {

    /**
     * @param {Number} dist total Distance (in meters)
     * @param {Number} price total Price (in DA)
     * @param {Number} time totalTime (in minutes)
     */
    constructor(dist = 0, price = 0, time = 0) {
        this.totalDistance = dist
        this.totalPrice = price
        this.totalTime = time
        this.steps = new Array()
    }

    addStep(step) {
        this.steps.push(step)
        this.totalDistance += step.dist
        this.totalPrice += step.price
        this.totalTime += step.time
    }

    /** 
     * Creates a new path from current with merged steps
     * @return {Path} minimized Path
    */
    minimizePath() {
        minPath = new Path()
        
        for(var i = 0; i < steps.length-1; ++i) {
            // TODO : 
            // test if steps[i] and steps[i+1] can be merged
                // merge
            // else
                // add step[i]
        }

        // add this.steps[steps.length-1] to minPath
    }
}

module.exports = Path