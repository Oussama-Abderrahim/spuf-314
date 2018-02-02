/**
 * Bus : 
 */
const mongoose = require('mongoose');

const BusSchema = new  mongoose.Schema({
  
    
},{
	collection: 'buses'
});

module.exports = mongoose.model('Bus', BusSchema);