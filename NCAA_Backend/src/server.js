const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const { getGameById } = require('./resolvers/ncaaResolvers'); 

// Define GraphQL schema
const schema = buildSchema(`
  type Game {
    game_id: String
    season: Int
    status: String
    coverage: String
    neutral_site: Boolean
    scheduled_date: String
    gametime: String
    conference_game: Boolean
    tournament: String
    tournament_type: String
    tournament_round: String
    tournament_game_no: String
    attendance: Int
    lead_changes: Int
    times_tied: Int
    periods: Int
    possession_arrow: String
    # Add other fields as needed based on your requirements
  }

  type Query {
    getGameById(game_id: String!): Game
    # Add other queries if needed
  }
`);

// Root resolver
const root = {
  getGameById: getGameById, // Assign resolver function to the getGameById field
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