bodyParser = require('body-parser')

const express = require('express')

module.exports = function(dbSession) {
    
  const PathFinder = require('./modules/PathFinder')
  const router = express.Router()

  return {
    getRouter: function() {
      router.route('/').get((req, res) => {
        res.json({
          message: 'Welcome to our API, see /api/docs for documentation'
        })
      })

      router.use('/station', require('./stations')(dbSession).getRouter())
      router.use('/line', require('./lines'))
      router.use('/docs', require('./swagger'))

      router.route('/direction').get((req, res) => {
        //TODO : check params
        if (req.query.start && req.query.end) {
          var params = {
            start: req.query.start,
            end: req.query.end,
            transport: {
              bus: req.query.bus ? true : false,
              tram: req.query.tram ? true : false,
              walk: req.query.walk ? true : false
            }
          }
          PathFinder.getPath(params, result => {
            res.json(result)
          })
        } else {
          res.json({})
        }
      })

      return router
    }
  }
}
