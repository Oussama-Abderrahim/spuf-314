bodyParser = require("body-parser");


var routes = function (app) {
  
    app.get("/api", function (request, response) {
        response.json();
    });
};


module.exports = routes;