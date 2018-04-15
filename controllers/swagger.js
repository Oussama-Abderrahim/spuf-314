const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const express = require('express')
const router = express.Router()

const swaggerDefinition = {
    info: {
        title: 'Oran Bus API (Node/Express)',
        version: '0.3.1',
        description: 'A web service guide for public transit in Oran, Algeria',
        contact: {
            email: 'SakasakyRay@Gmail.com'
        }
    },
    tags: [
        {
            name: 'Station',
            description: 'Stations API'
        },
        {
            name: 'Line',
            description: 'Bus Lines API'
        }
    ],
    schemes: ['https'],
    host: process.env.HOST_NAME,
    basePath: '/'
};

// options for the swagger docs
const options = {
    // import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // path to the API docs
    apis: [
        './controllers/*.js',
        './models/*.js'
    ],
    // customCss: `.topbar {display:none;}`,
    explorer : false
};

// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

router.get('/json', function (req, res) {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
})


router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec, options))

module.exports = router