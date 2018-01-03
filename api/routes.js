bodyParser = require("body-parser");


var routes = function (app) {
  
    var message = {
        message : "Hello ! Got me from a GET request ?"
    };

    app.get("/api", function (request, response) {
        response.json(message);
    });
};


module.exports = routes;