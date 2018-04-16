bodyParser = require("body-parser");

module.exports = function(dbSession) {
  const PathFinder = require("./modules/PathFinder")(dbSession);
  let router = require("express").Router();

  return {
    getRouter: function() {
      /**
       * @swagger
       * /api/direction/:
       *   get:
       *     tags:
       *     - direction
       *     description: Get Path from start to end
       *     summary: Get path
       *     produces:
       *       - application/json
       *     responses:
       *       200:
       *         description: A Path object
       *         schema:
       *           $ref: '#/definitions/Path'
       */
      router.route("/").get(this.direction);


      return router;
    },
    direction: (req, res) => {
      //TODO : check params
      if (req.query.start && req.query.end) {
        var params = {
          start: req.query.start,
          end: req.query.end,
          transport: {
            bus: req.query.bus ? true : false,
            tram: req.query.tram ? true : false,
            walk: req.query.walk ? true : false
          }
        };
        PathFinder.getPath(params)
        .then(result => {
          res.json(result);
        }).catch(err => console.log(err));
      } else {
        res.json({});
      }
    }
  };
};
