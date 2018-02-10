//'use strict';

require('dotenv').config();

/**
 * Module dependencies.
 */
const helmet = require('helmet');
const express = require("express");
const bodyParser = require('body-parser');
const request = require('request');
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
    request('https://project314.herokuapp.com/api/station', { json: true }, (err, res, body) => {
        response.render("stations", {stations: res.body})
    });
});

app.get('/direction', (req, response)=> {
    request('https://project314.herokuapp.com/api/station', { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        var stations = res.body;
        if(req.query.start && req.query.end) {
            request(`https://project314.herokuapp.com/api/direction?start=${req.query.start}&end=${req.query.end}`, {json: true}, (err, res2, body) => {
                if (err) { return console.log(err); }    
                var steps = res2.body;
                response.render("direction", {steps, stations})
            })
        } else {
            response.render("direction", {steps: [], stations})
        }
    });
});

