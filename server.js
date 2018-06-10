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
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

/* Start Server */
server.listen(process.env.PORT, () => {
    console.log("listening at port " + process.env.PORT);
    app.emit("app_started")
});

module.exports = server

const mongodb = require('./db').connect(process.env.MONGODB_URL)
const dbSession = require('./neo4j/dbUtils')(
    process.env.NEO4J_URL,
    process.env.NEO4J_USER,
    process.env.NEO4J_PASSWORD
).getSession(this)

/* Routes */
const router = require("./controllers/index.js")(dbSession).getRouter();

app.use("/api", router);

app.get("/", (request, response) => {
    response.json({
        message: `Welcome to our API, see ${process.env.HOST_NAME}/api/docs for documentation`
    })
});