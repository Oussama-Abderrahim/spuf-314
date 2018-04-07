const http_mocks = require('node-mocks-http')
const mockery = require('mockery')
const assert = require('assert')

let controllers = undefined

function buildResponse() {
  return http_mocks.createResponse({
    eventEmitter: require('events').EventEmitter
  })
}

describe('Stations controller Tests', function() {
  before(done => {
    mockery.enable({
      warnOnUnregistered: false,
      // useCleanCache: true
    })

    const dbSession = require('../../neo4j/dbUtils')(
      process.env.NEO4J_URL,
      process.env.NEO4J_USER,
      process.env.NEO4J_PASSWORD
    ).getSession(this)

    const Station = require('../../models/Station')()

    mockery.registerMock('../models/Station', function(dbSession) {
      return {
        getAll: () =>
          new Promise((resolve, reject) => {
            resolve([
              new Station(1, 'TestStation', 'testAddress', 1, 2),
              new Station(2, 'helloStation', 'HelloAddress', 1, 2)
            ])
          }),
        getByID: id =>
          new Promise((resolve, reject) => {
            if (id === '1') {
              resolve(new Station(1, 'testStation', 'testAddress', 1, 2))
            } else {
              reject(new Error('station not found'))
            }
          })
      }
    })

    controllers = require('../../controllers/index')(dbSession).getRouter()
    done()
  })

  after(done => {
    mockery.disable()
    done()
  })

  it('/station should return a station array', done => {
    let response = buildResponse()
    let request = http_mocks.createRequest({
      method: 'GET',
      url: '/station'
    })

    response.on('end', function() {
      const stations = JSON.parse(response._getData())
      assert(!!stations && stations.constructor === Array)
      stations.forEach(s => {
        assert(s.hasOwnProperty('ID'), 'Station object has not ID')
        assert(s.hasOwnProperty('name'))
        assert(s.hasOwnProperty('address'))
        assert(s.hasOwnProperty('coord'))
      })
      done()
    })

    controllers.handle(request, response)
  })

  it('/station/:id should return a station object with correct attributes', done => {
    let response = buildResponse()
    let request = http_mocks.createRequest({
      method: 'GET',
      url: '/station/1',
      params: {
        id: 1
      }
    })

    response.on('end', function() {
      assert(response._isJSON(), 'Response should be JSON')
      const station = JSON.parse(response._getData())
      assert(station.hasOwnProperty('ID'), 'Station object has not ID')
      assert(station.hasOwnProperty('name'))
      assert(station.hasOwnProperty('address'))
      assert(station.hasOwnProperty('coord'))
      done()
    })

    controllers.handle(request, response)
  })

  it('/station/:id should return a 404 if not found', done => {
    let response = buildResponse()
    let request = http_mocks.createRequest({
      method: 'GET',
      url: '/station/3',
      params: {
        id: 3
      }
    })

    response.on('end', function() {
      assert.equal(response.statusCode, 404, 'status code should be 404')
      done()
    })

    controllers.handle(request, response)
  })

  it('/station/azazaza should return an error', done => {
    let response = buildResponse()
    let request = http_mocks.createRequest({
      method: 'GET',
      url: '/station/Miaou',
      params: {
        id: 'Miaou'
      }
    })

    response.on('end', function() {
      assert.equal(response.statusCode, 400, 'status code should be 400')
      done()
    })

    controllers.handle(request, response)
  })
})
