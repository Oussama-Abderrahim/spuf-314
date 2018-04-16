bodyParser = require('body-parser')

const express = require('express')

module.exports = function(dbSession) {
    
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
      router.use('/direction', require('./directions')(dbSession).getRouter())

      return router
    }
  }
}
