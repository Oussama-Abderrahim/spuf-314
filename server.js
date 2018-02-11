//'use strict';

require('dotenv').config();

/**
 * Module dependencies.
 */
const helmet = require('helmet');
const express = require("express");
const bodyParser = require('body-parser');
const request = require('request-promise');
const cors = require('cors');

const app = express();
const server = require('http').Server(app);

/* Template engines */
app.set("view engine", "ejs");

/* serve files from public folder */
app.use(express.static(`${__dirname}/public`));

/* Middlewares */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

/* Start Server */
server.listen(process.env.PORT, () => {
    console.log("listening at port " + process.env.PORT);
});

/* Routes */
var Routes = require("./api/routes.js");

app.use("/api", Routes);

app.get("/", (request, response) => {
    response.render("index"); // render views/index
});

app.post("/", (request, response) => {
    response.json("")
});

app.get("/user", (req,res)=>{
    res.render("user")
})

app.get('/station', (req, response)=> {

    var options = {
        uri: 'https://project314.herokuapp.com/api/station',
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true // Automatically parses the JSON string in the response
    };
    
    request(options)
        .then(function (stations) {
            response.render("stations", {stations})
        })
        .catch(err => console.log(err))
});

app.get('/direction', (req, response)=> {

    request({url:'https://project314.herokuapp.com/api/station', json:true})
        .then((stations)=>{
            /// TODO: add validator
            if(req.query.start, req.query.end){
                var transports = "";
                if(req.query.bus == "on") transports += "bus=on&"
                if(req.query.tram == "on") transports += "tram=on&"
                if(req.query.walk == "on") transports += "walk=on&"
                request({url:`https://project314.herokuapp.com/api/direction?start=${req.query.start}&end=${req.query.end}&${transports}`, json:true})
                .then((steps) => {
                    response.render("direction", {steps, stations})
                })
                .catch(err => {
                    console.log(err)
                    response.render("direction", {steps: [], stations})
                })
            } else {
                response.render("direction", {steps: [], stations})
            }
        })
        .catch(err => {
            console.log(err)
            response.send(error)
        })
});

