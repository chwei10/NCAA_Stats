const { BigQuery } = require("@google-cloud/bigquery");

const bigqueryClient = new BigQuery();
process.env.GOOGLE_APPLICATION_CREDENTIALS = __dirname+"/../../keys/bigquery.json";

// Resolver function for getGameById
const getGameById = async ({ game_id }) => {
  try {
    const query = "SELECT * FROM NCAA.mbb_games_sr WHERE game_id = @game_id";
    const options = {
      query: query,
      params: { game_id: game_id },
    };
    const [gameData] = await bigqueryClient.query(options);
    if (gameData.length > 0) {
      // Parse date fields as Date objects
      console.log('Scheduled Date:', gameData[0].scheduled_date);
      console.log('Scheduled Date Type:', typeof gameData[0].scheduled_date);

      console.log('Game Time:', gameData[0].gametime);
      console.log('Game Time Type:', typeof gameData[0].gametime);

      const scheduledDateValue = gameData[0].scheduled_date.value;
      const gameTimeValue = gameData[0].gametime.value;

      // Convert the retrieved values into JavaScript Date objects
      const scheduledDate = new Date(scheduledDateValue);
      const gameTime = new Date(gameTimeValue);

      const formattedScheduledDate = scheduledDate.toISOString().split('T')[0];
      const formattedGameTime = gameTime.toISOString().split('T')[1].slice(0, -1);

      // Update the fields in the data object with the formatted values
      gameData[0].scheduled_date = formattedScheduledDate;
      gameData[0].gametime = formattedGameTime;
      return gameData[0];
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error retrieving game data:", error);
    return null;
  }
};

module.exports = {
  getGameById,
};
