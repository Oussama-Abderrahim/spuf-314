const session = require('../../neo4j/dbUtils')(
  process.env.NEO4J_URL,
  process.env.NEO4J_USER,
  process.env.NEO4J_PASSWORD
).getSession(this)

const GraphSegment = require('../../models/graphModels/GraphSegment')

/// TODO: Rename Stations to nodes



var createLine = function(
  segments,
  success = s => console.log(s),
  error = err => console.log(err)
) {
  let query = GraphSegment.getNeo4JLineQuery(segments)

  session
    .run(query)
    .then(result => {
      success(result.records)
    })
    .catch(err => console.log(err))
}

module.exports = {
  createLine,
}
