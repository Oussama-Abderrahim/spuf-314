/**
 * Station : 
 */
const mongoose = require('mongoose');

const StationSchema = new  mongoose.Schema({
  name: String,
  coord: {
      lat: Number,
      lon: Number
  },
  address: String
},{
	collection: 'stations'
});

module.exports = mongoose.model('Station', StationSchema);