const mongoose = require('mongoose')


class DBManager {

    static connect () {
        mongoose.connect(process.env.MONGODB_URL)
                .then((db) => console.log('connected to mongodb', db.connections[0].name))
                .catch((err) => {console.log('Error connecting to mongodb')})
    }
}

module.exports = DBManager