const server = require("../../server")
const stations = require('../../controllers/stations')


describe('Stations controller Tests', function() {
    before(done => {
        done()
    })

    after(done => {
        server.close()
        done()
    })

  it('/station should return a station array')
  it('/station/:id should return a station object with correct attributes')
  it('/station/:id should return a 404 if not found')
  it('/station/azazaza should return an error')
})