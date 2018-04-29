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
        // minPath = new Path()
        
        // while(i < steps.length-1) {
        //     if (step[i].canMerge(step[i+1])) {
        //         steps[i] = steps[i].merge(step[i+1])
        //     } else {
        //         minPath.push(step[i])
        //         i++
        //     }
        // }
        // minPath.push(this.steps[steps.lenght-1])
    }
}

module.exports = Path