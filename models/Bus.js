/**
 * @swagger
 * definitions:
 *   Bus:
 *     type: object
 *     properties:
 *       name:
 *         type: string
 *       price:
 *         type: number
 *       frequence:
 *         type: number
 *       avgWaitTime:
 *         type: number
 */

const mongoose = require('mongoose');


const BusSchema = new mongoose.Schema({
    name: String,
    price: Number,
    frequence: Number,
    avgWaitTime: Number
});

/**
 * @property {String} name 
 * @property {Number} price (in DA)
 * @property {Number} frequence Number of buses serving line at any given time 
 * @property {Number} avgWaitTime Average waiting time in each station, in minutes
 * @constructor Bus
 */
class Bus {

}

BusSchema.loadClass(Bus)

module.exports = mongoose.model('Bus', BusSchema);