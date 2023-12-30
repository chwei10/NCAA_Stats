import React, { useState } from "react";
import '../styles/QueryGameId.css';
import getGameByTeamName from '../queries/getGameStatsByTeamName';
import getGameStatsById from "../queries/getGameStatsById";

// const GET_GAME_BY_ID = gql`
//   query GetGameById($gameId: String!) {
//     getGameById(game_id: $gameId) {
//       game_id
//       season
//       status
//       coverage
//       scheduled_date
//       gametime
//       conference_game
//       tournament
//       tournament_type
//       tournament_round
//       tournament_game_no
//       attendance
//       lead_changes
//       times_tied
//       periods
//       possession_arrow
//     }
//   }
// `;

const QueryGame = () => {
  const [searchType, setSearchType] = useState('gameId');
  const [searchValue, setSearchValue] = useState('');
  const [gameStats, setGameStats] = useState(null);

  const handleSearchCriteriaChange = (value) => {
    setSearchType(value);
  };

  const handleSearchInputChange = (value) => {
    setSearchValue(value);
  };
  
  const handleSearch = async () => {
    if (searchType === 'gameId') {
      const result = await getGameStatsById(searchValue);
      setGameStats(result.gameStats);
    } else if (searchType === 'teamName') {
      const result = await getGameByTeamName(searchValue);
      setGameStats(result.gameStats);
    }
  };

  return (
    <div>
      <h1>Game Query</h1>
      <div>
        <label htmlFor="searchCriteria">Search Criteria:</label>
        <select id="searchCriteria" value={searchType} onChange={(e) => handleSearchCriteriaChange(e.target.value)}>
          <option value="gameId">Game ID</option>
          <option value="teamName">Team Name</option>
        </select>
      </div>
      <div>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => handleSearchInputChange(e.target.value)}
          placeholder={`Enter ${searchType === 'gameId' ? 'Game ID' : 'teamName'}`}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {/* Display gameStats here */}
      {gameStats && (
        <div>
          {/* Display gameStats information */}
          {/* For example: */}
          <p>Game ID: {gameStats.game_id}</p>
          <p>Season: {gameStats.season}</p>
          {/* Display other gameStats properties */}
        </div>
      )}
    </div>
  );
};

export default QueryGame;
