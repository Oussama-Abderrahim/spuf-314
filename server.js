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
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerDocument = require('./docs/swagger.json');


const app = express();
const server = require('http').Server(app);

/* Template engines */
app.set("view engine", "ejs");

/* serve files from public folder */
app.use(express.static(`${__dirname}/public`));

/* Middlewares */
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

/* Start Server */
server.listen(process.env.PORT, () => {
    console.log("listening at port " + process.env.PORT);
});

/* Routes */
var router = require("./controllers/index.js");

app.use("/api", router);

var swaggerDefinition = {
    info: {
        title: 'Oran Bus API (Node/Express)',
        version: '1.0.0',
        description: '',
    },
    host: 'localhost:3000',
    basePath: '/',
};

// options for the swagger docs
var options = {
    // import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // path to the API docs
    apis: ['./controllers/*.js'],
    // Hide header 
    customCss: ''
};

// initialize swagger-jsdoc
var swaggerSpec = swaggerJSDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));



app.get("/", (request, response) => {
    response.render("index"); // render views/index
});



/* USER VIEWS */

app.post("/", (request, response) => {
    response.json("")
});

app.get("/user", (req, res) => {
    res.render("user/user")
})

app.get('/station', (req, response) => {

    var options = {
        uri: 'https://project314.herokuapp.com/api/station',
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true // Automatically parses the JSON string in the response
    };

    request(options)
        .then(function (stations) {
            response.render("user/stations", {
                stations
            })
        })
        .catch(err => console.log(err))
});

app.get('/direction', (req, response) => {

    request({
            url: 'https://project314.herokuapp.com/api/station',
            json: true
        })
        .then((stations) => {
            /// TODO: add validator
            if (req.query.start, req.query.end) {
                var transports = "";
                if (req.query.bus == "on") transports += "bus=on&"
                if (req.query.tram == "on") transports += "tram=on&"
                if (req.query.walk == "on") transports += "walk=on&"
                request({
                        url: `https://project314.herokuapp.com/api/direction?start=${req.query.start}&end=${req.query.end}&${transports}`,
                        json: true
                    })
                    .then((paths) => {
                        response.render("user/direction", {
                            paths,
                            stations
                        })
                    })
                    .catch(err => {
                        console.log(err)
                        response.render("user/direction", {
                            paths: [],
                            stations
                        })
                    })
            } else {
                response.render("user/direction", {
                    paths: [],
                    stations
                })
            }
        })
        .catch(err => {
            console.log(err)
            response.send(error)
        })
});

/* ADMIN VIEWS */
app.get("/admin", (req, res) => {
    res.render("admin/admin")
})

app.get('/admin/editstation', (req, response) => {

    var options = {
        uri: 'https://project314.herokuapp.com/api/station',
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true // Automatically parses the JSON string in the response
    };

    request(options)
        .then(function (stations) {
            response.render("admin/editStation", {
                stations
            })
        })
        .catch(err => console.log(err.name))
});