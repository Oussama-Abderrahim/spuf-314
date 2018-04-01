const mongoose = require('mongoose')


class DBManager {

    static connect(url, done = _ => {}) {
        mongoose.connect(url)
            .then((db) => {
                console.log('connected to mongodb', db.connections[0].name)
                return done()
            })
            .catch((err) => {
                return done(err)
            })
    }
}

module.exports = DBManager