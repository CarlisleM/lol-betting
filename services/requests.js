const fetch = require('node-fetch');
const { Pool } = require('pg'); 

const pool = new Pool({ 
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false 
  }
});

const getAllUpcomingGames = (req, res) => {
  pool.query("SELECT * FROM upcoming WHERE (game_date = DATE(NOW()) AND (TO_TIMESTAMP(match_time,'HH24:MI:SS')::TIME > timezone('PDT', NOW())::TIME(0))) OR game_date > DATE(NOW());")
    .then(upcomingGamesResults => {
      res.json(upcomingGamesResults.rows)
    })
    .catch(err => console.log(err));
}

const getAllGames = (req, res) => {
  pool.query("SELECT * FROM games, match_results where id = game_id ORDER BY game_date;") 
    .then(gamesResults => {
      res.json(gamesResults.rows)
    })
    .catch(err => console.log(err));
}

module.exports = { getAllUpcomingGames, getAllGames }