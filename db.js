require('dotenv').config()

const mongoose = require('mongoose')

const connect = function(url = process.env.MONGODB_URL) {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(db => {
        console.log('connected to mongodb', db.connections[0].name)
        resolve(db)
      })
      .catch(err => reject(err))
  })
}

module.exports = { connect }
