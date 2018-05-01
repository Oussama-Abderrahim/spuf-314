require('dotenv').config()

const assert = require('assert')

const Step = require('../../models/Step')
const Station = require('../../models/Station')()

const TransportType = require('../../models/TransportType')


describe('Step Model Tests', function() {
    before(done => {
      done()
    })
  
    after(done => {
      done()
    })
      
    it('should merge stations correctly', done => {
        let step1 = new Step(new Station(1), new Station(2), 10, 20, 30, TransportType.Bus, "bus")
        let step2 = new Step(new Station(2), new Station(3), 5, 15, 25, TransportType.Bus, "bus")

        assert(step1.canMergeWith(step2))
        
        let mergedStep = Step.mergeSteps(step1, step2)

        assert.equal(mergedStep.from.ID, step1.from.ID)
        assert.equal(mergedStep.to.ID, step2.to.ID)

        done()
    })

    it('should keep correct distance and time', done => {
        let step1 = new Step(new Station(1), new Station(2), 10, 20, 30, TransportType.Bus, "bus")
        let step2 = new Step(new Station(2), new Station(3), 5, 15, 25, TransportType.Bus, "bus")

        let mergedStep = Step.mergeSteps(step1, step2)

        assert.equal(mergedStep.dist, step1.dist+step2.dist)
        assert.equal(mergedStep.time, step1.time+step2.time)
        assert.equal(mergedStep.price, 10)

        done()
    })
  })
  