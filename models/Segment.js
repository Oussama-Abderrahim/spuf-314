/**
 * Segment : 
 */
const mongoose = require('mongoose');

const SegmentSchema = new  mongoose.Schema({
    Buses : Array,  //array of bus objects 
    hasTramway : boolean, 
    canWalk : boolean,
    distance : Number,
    avgTime: Number
},{
	collection: 'segments'
});

module.exports = mongoose.model('Segment', SegmentSchema);