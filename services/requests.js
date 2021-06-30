const fetch = require('node-fetch'); // import node-fetch (enables the fetch API to be used server-side)
const { Pool } = require('pg'); // import node-postgres

const pool = new Pool({ // create connection to database
  connectionString: process.env.DATABASE_URL,	// use DATABASE_URL environment variable from Heroku app 
  ssl: {
    rejectUnauthorized: false // don't check for SSL cert
  }
});

const getAllUpcomingGames = (req, res) => {
  const getString = "SELECT * FROM upcoming WHERE (game_date = DATE(NOW()) AND (TO_TIMESTAMP(match_time,'HH24:MI:SS')::TIME > timezone('PDT', NOW())::TIME(0))) OR game_date > DATE(NOW());"; // select all rows from the 'my_activities' table
  const countString = "SELECT count(*) FROM upcoming WHERE (game_date = DATE(NOW()) AND (TO_TIMESTAMP(match_time,'HH24:MI:SS')::TIME > timezone('PDT', NOW())::TIME(0))) OR game_date > DATE(NOW());" // get total row count from the 'my_activities' table
  pool.query(getString)
    .then(activityResults => {
      let activities = activityResults.rows;
      pool.query(countString)
        .then(countResult => {
          let count = countResult.rows[0].count;
          console.log('Activities List:', activities);
          console.log(`Activities Count: ${count}`);
          res.json({ activities, count})
          // res.render('index', { activities: activities, count: count }); // render index.ejs, and send activity and count results to index.ejs
          // TODO: Send info to frontend 
        })
    })
    .catch(err => console.log(err));
}

// const getGamesString = "SELECT * FROM games, match_results where id = game_id ORDER BY game_date;";
// const countGamesString = "SELECT count(*) FROM games, match_results where id = game_id ORDER BY game_date;" 

const getAllGames = (req, res) => {
  const getGamesString = "SELECT * FROM games;";
  const countGamesString = "SELECT count(*) FROM games;" 
  pool.query(getGamesString) // send query to select all rows from the 'my_activities' table 
    .then(gamesResults => {
      let games = gamesResults.rows;
      pool.query(countGamesString) // send query to get total row count from the 'my_activities' table
        .then(countGamesResult => {
          let count = countGamesResult.rows[0].count;
          console.log('Activities List:', games);
          console.log(`Activities Count: ${count}`);
          res.json({ games, count})
          // res.render('index', { activities: activities, count: count }); // render index.ejs, and send activity and count results to index.ejs
          // TODO: Send info to frontend 
        })
    })
    .catch(err => console.log(err));
}

module.exports = { getAllUpcomingGames, getAllGames }