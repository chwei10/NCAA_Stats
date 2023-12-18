const { BigQuery } = require('@google-cloud/bigquery');
process.env.GOOGLE_APPLICATION_CREDENTIALS = '/Users/chenhaowei/Library/Mobile Documents/com~apple~CloudDocs/Projects/NCAA_Backend/keys/bigquery.json'
const bigquery = new BigQuery();
async function fetchDataFromBigQuery() {
    const query = 'SELECT * FROM `bigquery-public-data.ncaa_basketball.mbb_teams` LIMIT 10';
    try{
        const [rows] = await bigquery.query(query);
        console.log('Rows');
        rows.forEach(row => console.log(row));
    } catch(error){
        console.error('error ocurred:', error)
    }

}

fetchDataFromBigQuery();