const { buildSchema } = require('graphql');


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
    venue_id: String
    venue_city: String
    venue_state: String
    venue_address: String
    venue_zip: String
    venue_country: String
    venue_name: String
    venue_capacity: Int
    h_name: String
    h_market: String
    h_id: String
    h_alias: String
    h_league_id: String
    h_league_name: String
    h_league_alias: String
    h_conf_id: String
    h_conf_name: String
    h_conf_alias: String
    h_division_id: String
    h_division_name: String
    h_division_alias: String
    h_logo_large: String
    h_logo_medium: String
    h_logo_small: String
    h_points_game: Int
    h_rank: Int
    h_minutes: String
    h_field_goals_made: Int
    h_field_goals_att: Int
    h_field_goals_pct: Float
    h_three_points_made: Int
    h_three_points_att: Int
    h_three_points_pct: Float
  }

  type Query {
    getGameById(game_id: String!): Game
    getGameByTeamName(teamName: String!): [Game]
  }
`);

module.exports = schema;
