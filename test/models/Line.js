require('dotenv').config()

const assert = require('assert')

const session = require('../../neo4j/dbUtils')(
  process.env.NEO4J_TEST_URL,
  process.env.NEO4J_TEST_USER,
  process.env.NEO4J_TEST_PASSWORD
).getSession(this)

const Line = require('../../models/Line')(session)

const DB = require('../../db')

const LINE_NAME = 'TestL' + Math.random()

describe('Model Line Tests', () => {
  before(function(done) {
    DB.connect(process.env.MONGODB_TEST_URL)
      .then(db => done())
      .catch(err => {
        console.log("Skipped Line test du to connection errors")
        this.skip()        
      })
  })

  after(done => {
    done()
  })

  it('create', function(done) {
    Line.createLine({
      name: LINE_NAME,
      bus: {
        name: 'TestBus',
        price: 20,
        frequence: 2,
        avgWaitTime: 5
      },
      stations: [
        {
          stationID: 9,
          distFromPrev: 2,
          timeFromPrev: 3
        },
        {
          stationID: 10,
          distFromPrev: 2,
          timeFromPrev: 3
        },
        {
          stationID: 11,
          distFromPrev: 2,
          timeFromPrev: 3
        }
      ]
    }).then(doc => {
      assert.equal(doc.name, LINE_NAME)
      done()
    })
  })

  it('remove', function(done) {
    Line.remove(
      {
        name: LINE_NAME
      },
      err => {
        Line.findOne({
          name: LINE_NAME
        }).then(doc => {
          assert.equal(doc, null)
          done()
        })
      }
    )
  })
})
