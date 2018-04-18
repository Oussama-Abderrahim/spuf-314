"use strict";

require('dotenv').config()

module.exports = function(DB_URL = process.env.NEO4J_URL,
                          DB_USER = process.env.NEO4J_USER,
                          DB_PASSWORD = process.env.NEO4J_PASSWORD
                        ) {
  
  const _ = require('lodash');
  const neo4j = require("neo4j-driver").v1;
  const driver = neo4j.driver(
    DB_URL,
    neo4j.auth.basic(DB_USER, DB_PASSWORD)
  );
  const session = driver.session();
  
  const getSession = function (context) {
    if(context.neo4jSession) {
      return context.neo4jSession;
    }
    else {
      context.neo4jSession = driver.session();
      return context.neo4jSession;
    }
  };

  const runQuery = function (session, query, params) {
    return session.run(query, params)
  }

  return {getSession}
}

