bodyParser = require("body-parser");
const express = require("express");

var PathFinder = require("./modules/PathFinder")

var router = express.Router();

router.route('/').get((req, res) => {
    res.json({message:"Welcome to our API, see *link* for documentation"})
});

router.use('/station', require('./stations'))
router.use('/docs', require('./swagger'))

router.route('/direction').get((req, res)=>{
    //TODO : check params 
    if(req.query.start && req.query.end){
        var params = {
            start: req.query.start,
            end: req.query.end,
            transport: {
                bus: (req.query.bus)? true: false,
                tram: (req.query.tram)? true: false,
                walk: (req.query.walk)? true: false
            }
        }
        PathFinder.getPath(params, (result)=>{
                res.json(result)
        });
    } else {
        res.json({})
    }
});


module.exports = router;