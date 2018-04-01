const assert = require('assert');
const server = require("../../server")
const Line = require('../../models/Line')

const DB = require('../../db')

const LINE_NAME = 'TestL' + Math.random()


describe('Model Line Tests', function () {

    before(done => {
        DB.connect(process.env.MONGODB_TEST_URL, done)
    })

    after(done => {
        server.close()
        done()
    })

    it('create', function (done) {
        Line.createLine({
            name: LINE_NAME,
            bus: {
                name: 'TestBus',
                price: 20,
                frequence: 2,
                avgWaitTime: 5
            },
            stations: []
        }).then(doc => {
            assert.equal(doc.name, LINE_NAME)
            done()
        })
    })

    it('remove', function (done) {
        Line.remove({
            name: LINE_NAME
        }, err => {
            Line.findOne({
                    name: LINE_NAME
                })
                .then((doc) => {
                    assert.equal(doc, null)
                    done()
                })
        })
    })
})