// queries/getGameStatsByTeamName.js
import { gql } from "@apollo/client";
import client from "../services/apollo";

const GET_GAME_BY_TEAM_NAME = gql`
  query GetGameByTeamName($teamName: String!) {
    getGameByTeamName(h_market: $teamName) {
      game_id
      season
      status
      coverage
      scheduled_date
      gametime
      conference_game
      tournament
      tournament_type
      tournament_round
      tournament_game_no
      attendance
      lead_changes
      times_tied
      periods
      possession_arrow
      h_market
    }
  }
`;

const getGameStatsByTeamName = async (teamName) => {
  try {
    const { data } = await client.query({
      query: GET_GAME_BY_TEAM_NAME,
      variables: { teamName },
    });
    return { gameStats: data.getGameByTeamName };
  } catch (error) {
    console.error("Error retrieving game stats by team name:", error);
    return { gameStats: null };
  }
};

export default getGameStatsByTeamName;
