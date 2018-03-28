const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const express = require('express')
const router = express.Router()

const swaggerDefinition = {
    info: {
        title: 'Oran Bus API (Node/Express)',
        version: '0.3.1',
        description: 'A web service guide for public transit in Oran, Algeria',
    },
    host: 'localhost:3000',
    basePath: '/',
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
    // Hide header 
    customCss: ''
};

// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

router.get('/json', function (req, res) {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
})


router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

module.exports = router