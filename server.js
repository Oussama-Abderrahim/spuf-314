//'use strict';

require('dotenv').config();

/**
 * Module dependencies.
 */
const helmet = require('helmet');
const express = require("express");
const bodyParser = require('body-parser');
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

var DatabaseManager = require("./api/modules/DatabaseManager");
var PathFinder = require("./api/modules/PathFinder")

app.get("/user", (req,res)=>{
    res.render("user")
})

app.get('/station', (req, res)=> {
    DatabaseManager.getAllStations((stations)=>{
        res.render("stations", {stations})
    });
});

app.get('/direction', (req, res)=> {
    //TODO : check params 
    DatabaseManager.getAllStations((stations)=>{
        if(req.query.start && req.query.end){
            PathFinder.getPath(req.query.start, req.query.end, (result)=>{
                res.render("direction", {steps: result, stations})
            });
        } else {
            res.render("direction", {steps: null, stations})
        }
    })
});

