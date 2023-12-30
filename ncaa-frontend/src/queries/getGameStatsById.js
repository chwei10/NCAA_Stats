// queries/getGameStatsById.js

import { gql } from "@apollo/client";
import client from "../services/apollo";

const GET_GAME_BY_ID = gql`
  query GetGameById($gameId: String!) {
    getGameById(game_id: $gameId) {
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
    }
  }
`;

const getGameStatsById = async (gameId) => {
  try {
    const { data } = await client.query({
      query: GET_GAME_BY_ID,
      variables: { gameId },
    });
    return { gameStats: data.getGameById };
  } catch (error) {
    console.error("Error retrieving game stats by ID:", error);
    return { gameStats: null };
  }
};

export default getGameStatsById;
