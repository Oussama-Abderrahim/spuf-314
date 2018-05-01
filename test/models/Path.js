require('dotenv').config()

const assert = require('assert')

const Path = require("../../models/Path")
const Step = require('../../models/Step')
const Station = require('../../models/Station')()

const TransportType = require('../../models/TransportType')

describe('Path Model Tests', function() {
  before(done => {
    done()
  })

  after(done => {
    done()
  })

  it('Adding same transport step should not affect totals', done => {
    let path = new Path()

    path.addStep(new Step(new Station(1), new Station(2), 20, 10, 2, TransportType.Bus, "someBus"))
    path.addStep(new Step(new Station(2), new Station(3), 20, 10, 2, TransportType.Bus, "someBus"))
    path.addStep(new Step(new Station(3), new Station(4), 20, 10, 2, TransportType.Bus, "someBus"))
    path.addStep(new Step(new Station(4), new Station(5), 20, 10, 2, TransportType.Bus, "someBus"))

    assert.equal(path.totalPrice, 20)
    assert.equal(path.totalDistance, 40)
    assert.equal(path.totalTime, 8)

    done()
  })

  it('minimize should reduce steps count', done => {
    let path = new Path()

    path.addStep(new Step(new Station(1), new Station(2), 20, 10, 2, TransportType.Bus, "someBus"))
    path.addStep(new Step(new Station(2), new Station(3), 20, 10, 2, TransportType.Bus, "someBus"))
    path.addStep(new Step(new Station(3), new Station(4), 20, 10, 2, TransportType.Bus, "someBus"))
    path.addStep(new Step(new Station(4), new Station(5), 20, 10, 2, TransportType.Bus, "someBus"))

    let minPath = path.minimize()
    assert.equal(minPath.steps.length, 1)
    done()
  })

  it('Total fields should be same after minimize', done => {
    let path = new Path()

    path.addStep(new Step(new Station(1), new Station(2), 20, 10, 2, TransportType.Bus, "someBus"))
    path.addStep(new Step(new Station(2), new Station(3), 20, 10, 2, TransportType.Bus, "someBus"))
    path.addStep(new Step(new Station(3), new Station(4), 20, 10, 2, TransportType.Bus, "someBus"))
    path.addStep(new Step(new Station(4), new Station(5), 20, 10, 2, TransportType.Bus, "someBus"))

    let minPath = path.minimize()

    assert.equal(minPath.totalDistance, path.totalDistance)
    assert.equal(minPath.totalPrice, path.totalPrice)
    assert.equal(minPath.totalTime, path.totalTime)

    done()
  })

  it('minimize should not affect path if it cannot be minimized', done => {
    let path = new Path()

    path.addStep(new Step(new Station(1), new Station(2), 20, 10, 2, TransportType.Bus, "someBus1"))
    path.addStep(new Step(new Station(2), new Station(3), 20, 10, 2, TransportType.Bus, "someBus2"))
    path.addStep(new Step(new Station(3), new Station(4), 20, 10, 2, TransportType.Bus, "someBus3"))
    path.addStep(new Step(new Station(4), new Station(5), 20, 10, 2, TransportType.Bus, "someBus4"))

    let minPath = path.minimize()

    assert.equal(minPath.totalDistance, path.totalDistance)
    assert.equal(minPath.totalPrice, path.totalPrice)
    assert.equal(minPath.totalTime, path.totalTime)
    assert.equal(minPath.steps.length, path.steps.length)

    for(let i = 0; i < minPath.steps.length; i++) {
        assert.equal(minPath.steps[i], path.steps[i])
    }

    done()
  })

  it('Should throw an error if steps are not connected', done => {
    let path = new Path()

    assert.throws(() => {
        path.addStep(new Step(new Station(1), new Station(2), 20, 10, 2, TransportType.Bus, 'someBus'))
        path.addStep(new Step(new Station(4), new Station(3), 20, 10, 2, TransportType.Bus, 'someBus'))
      }, Error, 'Steps are not connected')
    done()
  })

})
