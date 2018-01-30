//'use strict';

require('dotenv').config();

/**
 * Module dependencies.
 */
const helmet = require('helmet');
const express = require("express");
const bodyParser = require('body-parser');

const app = express();
const server = require('http').Server(app);

/* Template engines */
app.set("view engine", "ejs");

/* serve files from public folder */
app.use(express.static(`${__dirname}/public`));

/* Middlewares */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());

/* Start Server */
server.listen(process.env.PORT, () => {
    // log stuff 
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