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

const Step = require('./Step')

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

  /**
   * Add step to Path, and updates total fields
   * @param {Step} step step to add
   */
  addStep(step) {
   
    let lastStep = this.steps[this.steps.length - 1]

    if(lastStep && !lastStep.to.equals(step.from)){
      throw new Error("Steps are not connected")
    }
    
    this.totalDistance += step.dist
    this.totalTime += step.time

    if (
      this.steps.length <= 0 ||
      lastStep.type !== step.type ||
      lastStep.name !== step.name
    ) {
      this.totalPrice += step.price
    }
    this.steps.push(step)
  }

  /**
   * Creates a new path from current with merged steps
   * @return {Path} minimized Path
   */
  minimize() {
    let minPath = new Path()
  
    let step = this.steps[0]
    let i = 1
    while (i < this.steps.length) {
      // merge with next steps
      while (i < this.steps.length && step.canMergeWith(this.steps[i])) {
        step = Step.mergeSteps(step, this.steps[i])
        i++
      }
      minPath.addStep(step)
      step = this.steps[i]
      i++
    }
    if(i === this.steps.length) minPath.addStep(step)
    return minPath
  }
}

module.exports = Path
