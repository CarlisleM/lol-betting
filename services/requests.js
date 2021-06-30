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

const getAllGames = (req, res) => {
  const getString = "SELECT * FROM games, match_results where id = game_id ORDER BY game_date";
  const countString = "SELECT count(*) FROM games, match_results where id = game_id ORDER BY game_date" 
  pool.query(getString) // send query to select all rows from the 'my_activities' table 
    .then(activityResults => {
      let activities = activityResults.rows;
      pool.query(countString) // send query to get total row count from the 'my_activities' table
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

module.exports = { getAllUpcomingGames, getAllGames }