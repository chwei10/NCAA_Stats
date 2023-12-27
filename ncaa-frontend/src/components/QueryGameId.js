import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import client from "../services/apollo";
import '../styles/QueryGameId.css';

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

const QueryGameId = () => {
  const [gameId, setGameId] = useState("");
  const { loading, error, data } = useQuery(GET_GAME_BY_ID, {
    variables: { gameId },
    client,
  });

  const handleInputChange = (event) => {
    setGameId(event.target.value);
  };
  const renderGameData = () => {
    if (loading) {
      return <p>Loading...</p>;
    }
    if (error) {
      return <p>Error fetching game data</p>;
    }
    if (!data || !data.getGameById) {
      return <p>No game data found</p>;
    }
    const game = data.getGameById;
    return (
      <div className="container">
        <div className="center-content">
          <h2>Game Details</h2>
          <p>Game ID: {game.game_id}</p>
          <p>Season: {game.season}</p>
        </div>
      </div>
    );
  };
  return (
    <div>
      <h1>Game Query</h1>
      <input
        type="text"
        value={gameId}
        onChange={handleInputChange}
        placeholder="Enter Game ID"
      />
      <button onClick={() => setGameId(gameId)}>Fetch Game Details</button>
      {renderGameData()}
    </div>
  );
};

export default QueryGameId;
