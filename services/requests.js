const fetch = require('node-fetch');
const { Pool } = require('pg'); 

const pool = new Pool({ // create connection to database
  connectionString: process.env.DATABASE_URL,	// use DATABASE_URL environment variable from Heroku app 
  ssl: {
    rejectUnauthorized: false // don't check for SSL cert
  }
});

const getAllUpcomingGames = (req, res) => {
  pool.query("SELECT * FROM upcoming WHERE (game_date = DATE(NOW()) AND (TO_TIMESTAMP(match_time,'HH24:MI:SS')::TIME > timezone('PDT', NOW())::TIME(0))) OR game_date > DATE(NOW());")
    .then(upcomingGamesResults => {
      // let upcomingGames = upcomingGamesResults.rows;
      res.json(upcomingGamesResults.rows)
    })
    .catch(err => console.log(err));
}

// const getGamesString = "SELECT * FROM games, match_results where id = game_id ORDER BY game_date;";

const getAllGames = (req, res) => {
  pool.query("SELECT * FROM games, match_results where id = game_id ORDER BY game_date;") 
    .then(gamesResults => {
      let games = gamesResults.rows;
      res.json({ games })
    })
    .catch(err => console.log(err));
}

module.exports = { getAllUpcomingGames, getAllGames }