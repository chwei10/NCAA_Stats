const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { getGameById, getGameByTeamName } = require('./resolvers/ncaaResolvers'); 
const schema = require('./schema');

// Root resolver
const root = {
  getGameById: getGameById, // Assign resolver function to the getGameById field
  getGameByTeamName: getGameByTeamName
};

const app = express();
const cors = require("cors");
// GraphQL endpoint
app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true, // Enable GraphiQL tool for testing in the browser
}));

app.get('/', (req, res) => {
    res.send('Server is running!');
  });

  
module.exports = app; 