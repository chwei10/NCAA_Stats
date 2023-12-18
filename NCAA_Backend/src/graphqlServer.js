// const { GraphQLServer } = require('graphql-yoga/dist');
// const { BigQuery } = require('@google-cloud/bigquery');
// const express = require('express')

// process.env.GOOGLE_APPLICATION_CREDENTIALS = 'NCAA_Backend/keys/bigquery.json'

// const bigquery = new BigQuery();

// const typeDefs = `
//   type Game {
//     game_id: String!
//     season: Int
//     status: String
//     coverage: String
//     neutral_site: Boolean
//     scheduled_date: String
//     gametime: String
//     conference_game: Boolean
//     tournament: String
//     tournament_type: String
//     # Add more fields as needed
//   }

//   type Query {
//     getGameById(game_id: String!): Game
//   }
// `;


// // Resolver function to fetch data from BigQuery
// const resolvers = {
//     Query: {
//       getGameById: async (_, { game_id }) => {
//         // Fetch game data by game_id from BigQuery
//         const query = `
//           SELECT * 
//           FROM bigquery-public-data.ncaa_basketball.mbb_games_sr 
//           WHERE game_id = @game_id
//           LIMIT 1
//         `;
  
//         const options = {
//           query: query,
//           params: { game_id: game_id },
//         };
  
//         try {
//           const [rows] = await bigquery.query(options);
//           return rows[0]; // Return the first row (or null if not found)
//         } catch (error) {
//           console.error('Error retrieving game data:', error);
//           return null;
//         }
//       },
//     },
//   };


// const server = new GraphQLServer({ typeDefs, resolvers });

// const app = server.getExpress();

// // app.use(express.json)

// app.get('./custom', (req, res)=>{
//     res.send('this is a custom route');
// })

// const PORT = process.env.PORT || 4000;
// app.listen(PORT, ()=>{
//     console.log('Server is running on ${PORT}');
// });

